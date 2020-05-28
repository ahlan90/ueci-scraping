const puppeteer = require('puppeteer');


console.log('Bem vindo ao Bot Ueci');

async function playRobot() {
    
    const browser = await puppeteer.launch({ 
        handless: true,
     });

    const page = await browser.newPage();
     
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    await page.goto('https://sigefes.sefaz.es.gov.br/Siplag4/faces/login.jsp');
    
    // Inicio do Login
    await page.evaluate(() => {

        const inputLogin = document.querySelector('#loginBox\\:itxUsuario\\:\\:content');
        const inputPassword = document.querySelector('#loginBox\\:itxSenhaAtual\\:\\:content');
        const btnLogar = document.querySelector('#loginBox\\:btnConfirmar');
        const login = '10479761701';
        const password = 'sesp#2020';

        inputLogin.value = login;
        inputPassword.value = password;
        btnLogar.click();
    });
    // Fim do Login

    await page.waitForNavigation({ 
        waitUntil: 'networkidle0',
    });

    await page.evaluate(() => {
        const anchorRelatorio = document.querySelector('#pt1\\:pt\\_np4\\:4\\:pt\\_cni6\\:\\:disclosureAnchor');
        anchorRelatorio.click();
    });

    await page.waitForNavigation({ 
        waitUntil: 'networkidle0',
    });

    await page.evaluate(() => {
        const anchorRelatorio = document.querySelector('#pt1\\:pt\\_np3\\:0\\:pt\\_cni4\\:\\:disclosureAnchor');
        anchorRelatorio.click();
    });

    await page.waitForNavigation({ 
        waitUntil: 'networkidle0',
    });

    await page.screenshot({path: 'print.png'});    

    await browser.close();
}



playRobot();