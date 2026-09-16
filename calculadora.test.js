const {
    soma,
    subtrai,
    multiplica,
    divide,
    ehPar,
    raiz,
    media
} = require("./calculadora");

describe("soma", ()=>{
    test("Soma com dois numeros positivos", ()=>{
        expect(soma(2, 3)).toBe(5);
    });
});

describe("raiz", ()=>{
    test("Calcula a raiz de numero não exato com precisão", ()=>{
        expect(raiz(2)).toBeCloseTo(1.414);
    })
    test("Lançar erro para numero negativo", ()=>{
        expect(() => raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo");
    })
})


describe("subtrai", ()=>{
    test("Deve retornar o resultado correto da subtracao", ()=>{
        expect(subtrai(5, 2)).toBe(3);
    })
    test("Deve retornar um numero negativo quando o resultado for negativo", ()=>{
        expect(subtrai(5, 7)).toBe(-2);
    })
})


describe("multiplica", ()=>{
    test("Deve retornar o produto correto de dois numeros", ()=>{
        expect(multiplica(2, 4)).toBe(8);
    })
    test("Deve retornar 0 quando um dos fatores for 0", ()=>{
        expect(multiplica(2, 0)).toBe(0);
    })
    test("O resultado deve ser maior do que cada um dos fatores individualmente (quando ambos forem maiores que 1)", ()=>{
        expect(multiplica())
    })
})


describe("divide", ()=>{
    test("Deve retornar o resultado correto da divisao", ()=>{
        expect(divide(4,2)).toBe(2);
    })
    test("Deve lancar o erro 'Nao e possivel dividir por zero' quando b for 0", ()=>{
        expect(() => divide(2,0)).toThrow("Nao e possivel dividir por zero");
    })
})

describe("ehPar", ()=>{
    test("Deve retornar um valor verdadeiro para numero par", ()=>{
        expect(ehPar(2)).toBe(true)
    })
    test("Deve retornar um valor falso para numero impar",()=>{
        expect(ehPar(3)).toBe(false);
    })
})

describe("media", ()=>{
    test("")
})