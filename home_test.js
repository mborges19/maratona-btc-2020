Feature('home');

Scenario('test something', ({ I }) => {
    
    //Inicializo minha sessao verificando se a URL esta certa
    I.amOnPage('https://flukeout.github.io/');
    //Aguardo 1 segundo
    I.wait(1)
    //Reconheço um input e o preencho com a palavra 'plate'
    I.fillField('input.input-strobe','plate');
    I.wait(1);
    //reconheço um buton no caso o enter e então clico nele
    I.click('.enter-button')
    I.wait(1);
    I.fillField('input.input-strobe','bento');
    I.wait(1);
    I.click('.enter-button')
    I.wait(1);
    I.fillField('input.input-strobe','#fancy');
    I.wait(1);
    I.click('.enter-button')
    I.wait(1);

});
