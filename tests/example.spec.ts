import { test, expect } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ page }) => {
  await page.goto('https://internal.citigov.id/signin');

  await page.waitForTimeout(2000); 

  await page.click('text=Daftar Sekarang');
  await expect(page).toHaveURL('https://internal.citigov.id/register');

  await page.getByPlaceholder("Masukkan nama lengkap").type("Peri Setiawan");
  await page.getByPlaceholder("Masukkan email").type("perisetiawan70@gmail.com");
  await page.getByPlaceholder("Masukkan nomor telepon / handphone").type("087771100855");
  await page.locator("input[name='password']").type('Pass123!');
  await page.locator("input[name='confirmPassword']").type("Pass123!");
  await page.locator(".btn-active").click();
  
  //await page.getByRole('link', {name: 'Selanjutnya'}).click();
  //await expect(page.getByRole('heading', {name: 'Verifikasi OTP'})).toBeVisible();*/




});

test('pelayanan', async ({ page }) => {
  await page.goto('https://internal.citigov.id/signin');
  
  await page.locator('.bg-cg').click();
  await page.locator('#email').fill('perisetiawan70@gmail.com');
  await page.locator("input[name='password']").type('Pass123!');
  await page.locator(".btn-active").click();

  await page.getByRole('link', {name: 'Pelayanan'}).click();
  await page.click('text= Ajukan');

  await page.getByPlaceholder("Masukkan No. KTP").type("3209321905990001");
  await page.getByPlaceholder("Masukkan Nama Lengkap").type("Peri Setiawan");
  await page.getByPlaceholder("Masukkan Tempat Lahir").type("Cirebon");
  await page.getByPlaceholder("Masukkan Alamat Pemohon").type("Kel. Jatikarya, Kec. Jatisampurna, Kota Bekasi");
  await page.getByPlaceholder("Masukkan Negara Pemohon").type("Republik Indonesia");
  await page.getByPlaceholder("Masukkan No Telepon Pemohon").type("087771100855");
  await page.getByPlaceholder("Masukkan No. HP Pemohon").type("087771100855");
  await page.getByPlaceholder("Masukkan Email Pemohon").type("perisetiawan70@gmail.com");
  await page.getByPlaceholder("Masukkan Keterangan Pekerjaan").type("Quality Assurance");
  await page.getByPlaceholder("Masukkan Negara Perusahaan").type("Republik Indonesia");
  await page.getByPlaceholder("Masukkan Judul Reklame").type("Cartenz Group");
  await page.getByPlaceholder("Masukkan Jumlah").type("1");



});


