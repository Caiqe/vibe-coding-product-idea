import { expect, test } from '@playwright/test'

async function abrirFormulario(page) {
  await page.goto('/')
  await page.getByRole('button', { name: 'Comprar' }).click()
  return page.getByRole('dialog')
}

async function preencherCamposAuxiliares(dialog) {
  await dialog.getByLabel('Forma de pagamento').selectOption('card')
  await dialog.getByLabel('Sim', { exact: true }).check()
  await dialog.getByLabel('Distância até a tomada mais próxima (em metros)').fill('2')
  await dialog.getByLabel(/Estou ciente de que o Hammer/).check()
}

test.describe('Formulário de orçamento', () => {
  test('exibe o formulário e todos os campos especificados', async ({ page }) => {
    const dialog = await abrirFormulario(page)

    await expect(dialog).toBeVisible()
    await expect(dialog.getByLabel('Nome completo')).toBeVisible()
    await expect(dialog.getByLabel('E-mail')).toBeVisible()
    await expect(dialog.getByLabel('Telefone')).toBeVisible()
    await expect(dialog.getByLabel('Quantidade de unidades')).toBeVisible()
    await expect(dialog.getByLabel('Mensagem')).toBeVisible()
    await expect(dialog.getByRole('button', { name: /Confirmar compra fictícia/ })).toBeVisible()
  })

  test('mostra erros ao enviar os campos obrigatórios vazios', async ({ page }) => {
    const dialog = await abrirFormulario(page)
    await dialog.getByLabel('Quantidade de unidades').fill('')
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()

    await expect(dialog.getByLabel('Nome completo')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog.getByLabel('E-mail')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog.getByLabel('Telefone')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog.getByLabel('Quantidade de unidades')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog.getByLabel('Mensagem')).toHaveAttribute('aria-invalid', 'true')
  })

  test('rejeita e-mail em formato inválido', async ({ page }) => {
    const dialog = await abrirFormulario(page)
    await dialog.getByLabel('E-mail').fill('usuario@invalido')
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()

    await expect(dialog.getByLabel('E-mail')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog).toContainText('Informe um e-mail válido.')
  })

  test('rejeita telefone que não tenha 10 ou 11 dígitos', async ({ page }) => {
    const dialog = await abrirFormulario(page)
    await dialog.getByLabel('Telefone').fill('123456789')
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()

    await expect(dialog.getByLabel('Telefone')).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog).toContainText('Informe um telefone com 10 ou 11 dígitos.')
  })

  test('rejeita quantidade fora do intervalo de 1 a 100', async ({ page }) => {
    const dialog = await abrirFormulario(page)
    const quantidade = dialog.getByLabel('Quantidade de unidades')

    await quantidade.fill('0')
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()
    await expect(quantidade).toHaveAttribute('aria-invalid', 'true')

    await quantidade.fill('101')
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()
    await expect(quantidade).toHaveAttribute('aria-invalid', 'true')
    await expect(dialog).toContainText('Informe uma quantidade inteira entre 1 e 100.')
  })

  test('rejeita mensagem com mais de 300 caracteres', async ({ page }) => {
    const dialog = await abrirFormulario(page)
    const mensagem = dialog.getByLabel('Mensagem')
    await expect(mensagem).toBeVisible()
    await mensagem.fill('a'.repeat(301))
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()

    await expect(mensagem).toHaveAttribute('aria-invalid', 'true')
  })

  test('envia dados válidos, mostra sucesso e limpa o formulário', async ({ page }) => {
    let dialog = await abrirFormulario(page)
    await dialog.getByLabel('Nome completo').fill('Maria da Silva')
    await dialog.getByLabel('E-mail').fill('maria@example.com')
    await dialog.getByLabel('Telefone').fill('11987654321')
    await dialog.getByLabel('Quantidade de unidades').fill('2')
    const mensagem = dialog.getByLabel('Mensagem')
    await expect(mensagem).toBeVisible()
    await mensagem.fill('Gostaria de receber um orçamento.')
    await preencherCamposAuxiliares(dialog)
    await dialog.getByRole('button', { name: /Confirmar compra fictícia/ }).click()

    await expect(dialog.getByRole('heading', { name: /^HAM-/ })).toBeVisible()
    await expect(dialog).toContainText('Pedido confirmado')

    await dialog.getByRole('button', { name: 'Voltar ao site' }).click()
    dialog = await abrirFormulario(page)
    await expect(dialog.getByLabel('Nome completo')).toHaveValue('')
    await expect(dialog.getByLabel('E-mail')).toHaveValue('')
    await expect(dialog.getByLabel('Telefone')).toHaveValue('')
    await expect(dialog.getByLabel('Quantidade de unidades')).toHaveValue('1')
    await expect(dialog.getByLabel('Mensagem')).toHaveValue('')
  })
})
