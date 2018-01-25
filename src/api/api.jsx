const UsersAPI = {
	users: [
		{
			id: 1,
			nickname: "samburskaya",
			title: "НАСТАСЬЯ СамбурскАя",
			desc: "Светская Илита. Сотрудничество +7(495)6423022",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/6858da136f5534d98ad8bb8a9496e181/5AEB7821/t51.2885-19/s150x150/26222770_2098374907063995_1280005532446359552_n.jpg",
			link: "https://www.instagram.com/samburskaya/"
		},
		{
			id: 2,
			nickname: "borodylia",
			title: "Ксения Бородина",
			desc: "Сотрудничество: ведение мероприятий - Табриз: +79852267676, pr@tabriz.ru; Реклама 🦁- Лев: +79263224344, borodina.pr@gmail.com; TV HOST, blogger ❤",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/2bb9da584eee059b7804ef0ef97731bd/5B2461EB/t51.2885-19/s150x150/25036406_134060023940474_5620353272507269120_n.jpg",
			link: "https://www.instagram.com/borodylia/"
		},
		{
			id: 3,
			nickname: "victoriassecret",
			title: "Victoria's Secret",
			desc: "The official account for Victoria's Secret.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/68821e50b5c20e6282e7f8306ef378b4/5AE478A1/t51.2885-19/11373751_810224469095258_1164651624_a.jpg",
			link: "https://www.instagram.com/victoriassecret/"
		},
		{
			id: 4,
			nickname: "kourtneykardash",
			title: "Kourtney Kardashian",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/a40cf4501b8c34955f5d340683975356/5B06CCBE/t51.2885-19/s150x150/17662225_236384403500667_2148968091776712704_a.jpg",
			link: "https://www.instagram.com/kourtneykardash/"
		},
		{
			id: 5,
			nickname: "instagram",
			title: "Instagram",
			desc: "Discovering — and telling — stories from around the world. Curated by Instagram’s community team.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/77b28f9baf682fad4965464924ee7157/5B002F5B/t51.2885-19/s150x150/14719833_310540259320655_1605122788543168512_a.jpg",
			link: "https://www.instagram.com/instagram/"
		},
		{
			id: 6,
			nickname: "theellenshow",
			title: "Ellen",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/6d89021efcc365ff4d825a4c667731ca/5B1E8C92/t51.2885-19/s150x150/24845855_807839982735833_7481075328681508864_n.jpg",
			link: "https://www.instagram.com/theellenshow/"
		},
		{
			id: 7,
			nickname: "marvel",
			title: "Marvel Entertainment",
			desc: "The official Instagram for Marvel comics, movies, games, and more.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/4649cb5f4c6c01c16d8618ab04086838/5AF45F29/t51.2885-19/11007912_807640775983280_1278253375_a.jpg",
			link: "https://www.instagram.com/marvel/"
		},
		{
			id: 8,
			nickname: "katyperry",
			title: "KATY PERRY",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/c8a71f6e7f9f81c6b42bfba19aadc291/5B2504A6/t51.2885-19/s150x150/21107657_1953700014876535_7007316203727224832_a.jpg",
			link: "https://www.instagram.com/katyperry/"
		},
		{
			id: 9,
			nickname: "lesia_nikituk",
			title: "Леся Никитюк",
			desc: "Official page Any questions: +380(98) 46 306 48 Pr. Диана lesianikitiuk@gmail.com",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/a32e78b311421a28e4f6bae1ad6d249f/5AE28A78/t51.2885-19/s150x150/24845134_1787546507984144_2641009835948113920_n.jpg",
			link: "https://www.instagram.com/lesia_nikituk/"
		},
		{
			id: 10,
			nickname: "kateclapp",
			title: "Kate Clapp / Катя Клэп",
			desc: "Epic Russian🗿 http://www.youtube.com/user/FoggyDisaster http://www.youtube.com/user/TheKateClapp kateclappmail@gmail.com",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/e553b76e01ac3476b7ab84eed6cc83a3/5AED6C01/t51.2885-19/s150x150/16790128_1642993126007004_5915586945022427136_a.jpg",
			link: "https://www.instagram.com/kateclapp/"
		}										
	],
	all: function() { return this.users},
	get: function(id) {
		const isUser = u => u.id === id;
		return this.users.find(isUser);
	}
};

const ProfileAPI = {
	profilePics: [
		{
			id: 6,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/b48e071b4ab55e0a41718bdf85a04f81/5B026C20/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/24845213_1478190562300196_1277547406698741760_n.jpg',
			link: 'https://www.instagram.com/p/Bcc0hnmgsqS/?taken-by=kevin',
			desc: '',
			likes: '5,591',
			comments: '196'
		},	
		{
			id: 5,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/ce053b69cc6a61c192d84c4244e5df73/5B078C0D/t51.2885-15/s640x640/sh0.08/e35/c0.124.1080.1080/19533540_1990764704480206_118407231828918272_n.jpg',
			link: 'https://www.instagram.com/p/BVv55XSAeiG/?taken-by=kevin',
			desc: '',
			likes: '4,323',
			comments: '120'		
		},
		{
			id: 1,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/19546bc3e57993895a9d38e8f474915c/5AEFCF47/t51.2885-15/s640x640/sh0.08/e35/21107495_115210579144394_4771526615077224448_n.jpg',
			link: 'https://www.instagram.com/p/BYJ9F4rACF5/?taken-by=kevin',
			likes: '2.912',
			comments: '103'			
		}	
	],
	all: function() { return this.profilePics },
	get: function(id) {
		const isPic = p => p.id === id;
		return this.profilePics.find(isPic);
	}	
}

export { UsersAPI, ProfileAPI };