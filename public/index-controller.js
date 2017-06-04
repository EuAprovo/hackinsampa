var app = angular.module('myApp', []);
app.controller('indexCtrl', function($scope) {
    $scope.json = [];
    $scope.json = [
    {
        "resultado": "Aprovado",
        "presentes": "51",
        "curtidas": 3,
        "rejeicoes": 2,
        "nome": " INSTITUI O PROGRAMA DE PARCELAMENTO INCENTIVADO DE 2017- PPI 2017"
    },
    {
        "resultado": "Aprovado",
        "presentes": "51",
        "curtidas": 5,
        "rejeicoes": 4,
        "nome": " CRIA O CONSELHO MUNICIPAL DE DESESTATIZAÇÃO E PARCERIAS E O FUNDO MUNICIPAL DE DESENVOLVIMENTO."
    },
    {
        "resultado": "Aprovado",
        "curtidas": 6,
        "rejeicoes": 5,
        "nome": " DISPÕE SOBRE A COMPENSAÇÃO DE CRÉDITOS TRIBUTÁRIOS COM DÉBITOS TRIBUTÁRIOS, NA FORMA E CONDIÇÕES QUE ESPECIFICA."
    },
    {
        "resultado": "Aprovado",
        "curtidas": 7,
        "rejeicoes": 6,
        "nome": " DISPÕE SOBRE A APLICAÇÃO DO ART. 1º DA LEI Nº 14.889, DE 20 DE JANEIRO DE 2009, E DÁ OUTRAS PROVIDÊNCIAS. (FICAM ATUALIZADOS MONETARIAMENTE EM 4,76% (QUATRO E SETENTA E SEIS CENTÉSIMOS PERCENTUAIS), A PARTIR DO DIA 1º DE MARÇO DE 2017 OS VENCIMENTOS, FUNÇÕES GRATIFICADAS, SALÁRIOS, SALÁRIO-FAMÍLIA E SALÁRIO-ESPOSA DOS SERVIDORES PÚBLICOS DA CÂMARA MUNICIPAL DE SÃO PAULO)."
    },
    {
        "resultado": "Reprovado",
        "presentes": "55",
        "curtidas": 8,
        "rejeicoes": 7,
        "nome": "Emendas de 2 a 10, 12 e 13, de 15 a 20, 22 a 25, e de 27 a 36"
    },
    {
        "resultado": "Reprovado",
        "presentes": "54",
        "curtidas": 10,
        "rejeicoes": 9,
        "nome": " AUTORIZA O PODER EXECUTIVO A INSTITUIR SERVIÇO SOCIAL AUTÔNOMO DENOMINADO SÃO PAULO NEGÓCIOS - SP NEGÓCIOS; INTRODUZ ALTERAÇÕES NAS LEIS N° 14.517, DE 16 DE OUTUBRO DE 2007, E N° 14.649, DE 20 DE DEZEMBRO DE 2007."
    }
];
});