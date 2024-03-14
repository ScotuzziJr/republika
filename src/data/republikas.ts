import rep1 from "../assets/images/rep1.jpg";
import rep2 from "../assets/images/rep2.jpg";
import rep3 from "../assets/images/rep3.jpg";

export const reps = [
	{
		id: 1,
		title: "Quarto compartilhado com mais uma pessoa",
		republic: "República Três Marias",
		location: "Salto - SP",
		rent: "R$750,00",
		photo: rep1,
		contractStatus: "Mensal",
        gender: "Mista",
		description:
			"Aluguel de um quarto compartilhado com mais uma pessoa. Além da cama, possui guarda roupa individual e escrivaninha.",
		about: "A República Três Marias é uma república mista e está localizada no centro de Salto. A capacidade máxima da casa é de 10 pessoas",
	},
	{
		id: 2,
		title: "Quarto individual",
		republic: "República Vegas",
		location: "Sorocaba - SP",
		rent: "R$920,00",
		photo: rep2,
		contractStatus: "Semestral",
        gender: "Mista",
		description:
			"Aluguel de um quarto individual, com cama de solteiro, guarda roupa, escrivaninha e estante de livros. Espaços comuns: banheiro, cozinha e sala de estar.",
		about: "A República Vegas é uma república mista e fica próxima ao campus da UFSCAR.",
	},
	{
		id: 3,
		title: "Quarto compartilhado (apenas mulheres)",
		republic: "República Baby Doll",
		location: "Franca - SP",
		rent: "R$840,00",
		photo: rep3,
		contractStatus: "Semestral",
        gender: "Feminina",
		description:
			"Aluguel de quarto compartilhado com mais uma pessoa. O quarto conta com duas camas de solteiro, dois guarda roupas, mesa grande para estudos e um banheiro próprio.",
		about: "A República Baby Doll é uma república feminina localizada no centro da cidade de Franca.",
	}
];
