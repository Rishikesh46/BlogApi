// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array

const data=[
	{
		"id": "2rvqp5egka5psgc9",
		"firstName": "Baby",
		"lastName": "Connelly",
		"company": "Surfboard",
		"email": "Baby.Connelly@surfboard.com",
		"position": "Lead Interactions Manager",
		"skills": [
			"Metrics",
			"Markets"
		],
		"hobbies": "Facere qui et et autem. Harum ex et. A suscipit officia velit atque iure. Autem sapiente error molestias. Id architecto delectus nostrum fuga rerum.\n \rMollitia quidem sit voluptas id omnis quam cupiditate consequatur rerum. Reiciendis ab ut. Aut repudiandae repudiandae est nostrum ipsam. Delectus ex quidem commodi veritatis hic eius.\n \rDelectus accusamus modi dolores distinctio qui quia. Nostrum distinctio quaerat beatae necessitatibus laboriosam animi. Recusandae rem exercitationem autem enim. Non consequatur reprehenderit id aut aut facilis quia molestias nam. Dignissimos id dolore porro. Est iure consequatur rem officiis. Voluptatem est sed voluptatem reprehenderit consequatur. Officiis molestiae quis sed illo ducimus cupiditate optio itaque. Magni facilis amet necessitatibus.\n \rHarum eos quis fugiat magnam. Et fuga voluptas libero architecto enim eos exercitationem. Deserunt voluptatem hic laborum quo.\n \rQuae soluta corrupti quis. Ea quia voluptas in facere qui. Velit voluptate voluptas. Aspernatur rerum quae odit vitae eos sed aut consectetur. Laboriosam odit nemo neque dolorum aperiam. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/a6DEs4C1QYimUn8iONck"
	},
	{
		"id": "2rvqp5egka5psgca",
		"firstName": "Retha",
		"lastName": "Schuster",
		"company": "Contentstack",
		"email": "Retha.Schuster@contentstack.com",
		"position": "Legacy Accounts Officer",
		"skills": [
			"Infrastructure",
			"Accounts"
		],
		"hobbies": "Eos et officia architecto voluptatem. Et omnis consequatur perspiciatis non. Autem nobis eius consequuntur nostrum. Sunt eaque corrupti. A quia soluta dignissimos odio. Occaecati repudiandae quos accusamus.\n \rRerum tenetur incidunt neque dolore eligendi consequatur sunt consectetur. Consequatur eos ut. Eos et veniam consequatur ab et quae totam temporibus dolores. Aut quo non reiciendis.\n \rConsequatur quas cupiditate asperiores omnis minus tenetur eos. Eligendi quia molestiae non occaecati ea voluptate omnis. Sed fugit quia mollitia suscipit quod sunt maxime. Ipsam ducimus impedit earum. Numquam deleniti inventore molestiae. Nostrum hic rerum. Ipsam rerum impedit eum error harum repellat. Quos sit velit accusantium dolore odio occaecati quos voluptates blanditiis. Expedita sit sequi laboriosam tempora consequatur. Id et dignissimos dolor ut id qui aliquid voluptatem ab. Animi voluptatum ipsum velit totam nulla nobis pariatur ad voluptatem. Ullam similique dolore quibusdam in incidunt dicta totam repudiandae quia.\n \rMinus commodi laudantium architecto similique qui est non. Ipsum expedita incidunt labore soluta eum inventore illum eaque. Consequatur sint aspernatur dolor odio commodi sint. Provident sed dolorem ex.\n \rQuisquam vel distinctio doloribus ut. Eveniet corrupti ea saepe omnis qui ipsum voluptas. Doloremque consequatur omnis iusto ex quas. Tempore non quo ipsa eum et tenetur quasi maiores occaecati. Sunt error voluptas. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/ZezhawQfSMKJd7jmSePA"
	},
	{
		"id": "2rvqp5egka5psgcb",
		"firstName": "Berta",
		"lastName": "Beatty",
		"company": "Surfboard",
		"email": "Berta.Beatty@surfboard.com",
		"position": "National Metrics Supervisor",
		"skills": [
			"Integration",
			"Division"
		],
		"hobbies": "Velit voluptatibus facere et maiores dignissimos. Unde rerum alias. Consequuntur ea pariatur sed omnis consequatur reiciendis. Omnis enim modi id occaecati et iusto magnam ipsam perferendis.\n \rQuisquam tempore odio. Aliquid repellendus culpa eius cum occaecati et officia maiores sint. Quod debitis quia tempore non error qui consequuntur unde. Sequi ut pariatur voluptatum omnis. Et nam aut rem voluptatem sunt eligendi enim.\n \rExpedita vel omnis hic. Nulla expedita eos. Ut recusandae mollitia quasi dolore qui quaerat. Aut et eum eos adipisci dignissimos doloribus. Repellat natus iusto in. Ut praesentium voluptas nesciunt qui. Sunt voluptas fuga ducimus nisi accusantium facere dignissimos porro aperiam. Dolores neque maxime porro cumque sit quo quas. Veniam et est. Totam ab rerum et at pariatur neque.\n \rOdio veritatis sunt vitae. Deserunt laborum dicta maiores reiciendis. Velit aut exercitationem quis. Unde quae provident deleniti adipisci fugit atque aperiam voluptatem laudantium. Qui quidem illum quia id voluptas. Neque adipisci excepturi id modi rerum qui minima.\n \rOmnis in quas recusandae ipsum non omnis. Perspiciatis explicabo aut inventore. Eos et temporibus id. Voluptatibus neque voluptatibus possimus eum quisquam odit consequatur. Molestiae unde minima quos. Quia illo molestias autem aspernatur dolor consequatur illo impedit. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/a6DEs4C1QYimUn8iONck"
	},
	{
		"id": "2rvqp5egka5psgcc",
		"firstName": "Retta",
		"lastName": "Bernier",
		"company": "Contentstack",
		"email": "Retta.Bernier@contentstack.com",
		"position": "Customer Implementation Producer",
		"skills": [
			"Tactics",
			"Research"
		],
		"hobbies": "Sed corrupti similique nesciunt in accusantium recusandae cupiditate consequatur. Sapiente et ut sed. Aperiam culpa a quisquam quidem consectetur necessitatibus.\n \rAdipisci molestiae consectetur. Qui ut ducimus enim cupiditate magnam minima ut. Ullam nam aliquid odit blanditiis earum soluta temporibus sint quia. Molestias hic ut id qui esse reprehenderit impedit. Qui autem qui atque laudantium nesciunt ad.\n \rQuis sequi consectetur est rerum cumque aut dolor omnis. Ducimus nemo ut. Ullam quam sapiente quos aut quidem mollitia esse rerum. Occaecati occaecati qui earum soluta rem. Laboriosam nam temporibus aut molestias dolorem. Rerum eum iste aliquam aut optio quidem qui. Voluptatem magnam eum sit sint nihil tempore. Et pariatur sunt qui molestiae tempora eos voluptatum voluptatibus. Qui maiores odit hic doloribus accusantium. Perferendis consequatur dicta voluptatum at tempora enim. Saepe hic omnis consequuntur blanditiis totam facere qui nostrum expedita. Quia sint illum.\n \rOmnis dolorum quis rerum perspiciatis quis laborum ut aut tempora. Qui maiores pariatur accusantium magnam ratione voluptas iure. Amet quidem est nulla debitis est aperiam. Deserunt minus alias praesentium qui.\n \rSapiente voluptates reiciendis voluptas excepturi. Atque ex iure voluptas dolor atque libero ullam. Sed recusandae molestiae dolor sapiente atque omnis. Nisi voluptatem consequatur. Temporibus minima sit sapiente doloribus quos est. Pariatur reiciendis in illum nihil dolorem. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/YysSnU7YQfeNVfhvoaxz"
	},
	{
		"id": "2rvqp5egka5psgcd",
		"firstName": "Genevieve",
		"lastName": "Maggio",
		"company": "RawEngineering",
		"email": "Genevieve.Maggio@rawengineering.com",
		"position": "Product Accountability Representative",
		"skills": [
			"Identity",
			"Infrastructure"
		],
		"hobbies": "Ut magnam id sint suscipit deserunt quod commodi vero assumenda. Neque et molestiae sint perspiciatis ut eos. Sunt accusantium qui quas deleniti voluptate ea impedit. Voluptatem et provident. Sed soluta architecto qui doloremque labore voluptatem est molestias. Alias dolorem voluptas omnis porro.\n \rAt mollitia facere quo velit at qui et. Debitis eos cumque. Modi quia pariatur consequuntur totam sit est magnam. Voluptas voluptatem doloribus nesciunt accusantium et ex. Necessitatibus inventore beatae aut sed nulla non voluptatum mollitia.\n \rNeque facere totam aspernatur delectus. Enim velit error qui architecto et debitis eum optio. At aliquam consequuntur voluptas nihil et sequi nesciunt eveniet. Commodi accusamus corrupti. Omnis sit soluta doloremque soluta magni excepturi. Explicabo sed quis. Mollitia et adipisci nisi sunt id accusantium. Nihil recusandae dicta sequi qui nihil qui voluptatem.\n \rAut dolore expedita corrupti culpa consectetur minima minima. Voluptas eum quam blanditiis ducimus. Nihil dolor est fuga corporis vel. Ex mollitia ea rerum similique nihil ea sunt veritatis. Vel ut autem corporis laboriosam. Aut ipsum qui.\n \rEx sequi quis sed ipsa sint rerum vitae eveniet. Est nemo odit sed qui. Enim nostrum eos similique aperiam ab ut. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/pE4eFe46SMm3MnpsqbM2"
	},
	{
		"id": "2rvqp5egka5psgce",
		"firstName": "Alicia",
		"lastName": "Schuster",
		"company": "RawEngineering",
		"email": "Alicia.Schuster@rawengineering.com",
		"position": "Internal Infrastructure Developer",
		"skills": [
			"Accountability",
			"Applications"
		],
		"hobbies": "Sunt numquam est iusto sequi magni enim quis ad. Itaque sunt animi quia in reprehenderit. Ut non vel reiciendis qui porro nulla natus dolor ratione.\n \rPerspiciatis et dolor quasi aut cum. Sint blanditiis officiis sit. Itaque reprehenderit minima. Perferendis dolorem commodi.\n \rEt adipisci dicta sequi amet. Eos consequuntur libero ut. Est iusto ipsam. Esse voluptatum tempore quod autem. Natus repellendus vitae. Ad recusandae quia ea qui commodi reiciendis. Ad earum saepe non expedita autem numquam eaque ipsa.\n \rPerspiciatis et voluptate repellat accusantium est sit dolorum tempore assumenda. Ut id quo illo minus praesentium commodi soluta. Ratione rerum ratione voluptatum omnis non. Fugiat vero provident aut totam facilis voluptate eveniet. Consequatur ab nostrum ea nisi soluta quis expedita. Laboriosam consequuntur officia.\n \rEius minima ducimus. Voluptatem vel modi qui perspiciatis repellat non nulla sapiente. Id iste natus maxime alias sed. Dolores magni alias fugit. Aut excepturi ea dolor nesciunt et iusto eius. Cupiditate iste ut voluptatibus qui vero culpa. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/mRGSBsRoSKy89WZjgBr5"
	},
	{
		"id": "2rvqp5egka5psgcf",
		"firstName": "Raheem",
		"lastName": "Kunde",
		"company": "Contentstack",
		"email": "Raheem.Kunde@contentstack.com",
		"position": "District Infrastructure Engineer",
		"skills": [
			"Interactions",
			"Directives"
		],
		"hobbies": "Dolorem et autem recusandae. Sint dolor est id assumenda placeat. Non repellat totam. Sit explicabo quia optio quisquam.\n \rVelit quo est quaerat. Soluta voluptates et odio a nihil sunt. Consequatur sapiente rerum eos quasi dolorum. Cumque voluptatem facere est omnis ut similique qui. Quae animi voluptatum. Blanditiis dolorem sint.\n \rIusto consequatur ducimus quos qui. A iusto cupiditate et. Minima et amet perspiciatis amet. Qui sed deleniti occaecati natus sunt expedita maxime. Dolor voluptas dolorem est sunt cumque. Blanditiis facilis at vel. Vel ipsam doloribus quo voluptatum aliquid et voluptate vitae. Eos eligendi repellendus.\n \rEst officia mollitia sapiente earum voluptatem voluptatibus aut quam. Rerum id nam inventore et qui iusto quis labore. Reiciendis eum error.\n \rVoluptas vitae dolor est. Et voluptatibus nihil est nostrum ipsum mollitia ipsa nulla. Aut quia quae est accusantium doloribus cum libero qui. Officia maiores veritatis quo. Rerum exercitationem possimus est facere perferendis. Aspernatur minima porro consequatur et quibusdam ea distinctio expedita. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/pzHLZ1b8QgOm98MFpDam"
	},
	{
		"id": "2rvqp5egka5psgcg",
		"firstName": "Sylvester",
		"lastName": "Keeling",
		"company": "Surfboard",
		"email": "Sylvester.Keeling@surfboard.com",
		"position": "Dynamic Security Consultant",
		"skills": [
			"Optimization",
			"Markets"
		],
		"hobbies": "Sed ullam alias nam magnam quidem est inventore. Aut sed sapiente voluptas laboriosam optio quaerat aut officia culpa. Ipsa fuga voluptate consequuntur odit. Rerum commodi repudiandae. Rerum autem distinctio quia commodi voluptas.\n \rTempore ullam laudantium aut necessitatibus aliquid. Molestiae autem vitae. Consequuntur perferendis aperiam qui praesentium natus nobis hic. Autem sit sit.\n \rConsectetur dignissimos sint esse quidem officia quo incidunt. Dolorum qui nobis. Voluptatem quos beatae magnam excepturi aut vel impedit sunt. Dolores et qui sint dicta. Voluptatem debitis consequatur vel. Quas reiciendis itaque occaecati voluptatem. Cumque deserunt est quo repellendus odio molestiae exercitationem. Adipisci eum quo facilis. Molestiae est dolorem sunt debitis est sapiente non error quia.\n \rUnde rerum eaque repudiandae facere sed dolores dolorem excepturi. Quis vel eum minus accusantium voluptatibus aliquid quibusdam quibusdam. Esse debitis quis iste deleniti. Neque ullam pariatur error dolor veritatis velit. Aut ea quibusdam quod facilis atque qui architecto. Sunt repudiandae dolor et ea nemo aut consectetur.\n \rQuia quas quam ea. Et qui facilis. Consectetur quam fuga rerum quisquam architecto. Veniam sequi ipsum sapiente cum. Et expedita odio. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/pE4eFe46SMm3MnpsqbM2"
	},
	{
		"id": "2rvqp5egka5psgch",
		"firstName": "Tyrese",
		"lastName": "Rau",
		"company": "Contentstack",
		"email": "Tyrese.Rau@contentstack.com",
		"position": "Central Accounts Architect",
		"skills": [
			"Assurance",
			"Functionality"
		],
		"hobbies": "Nesciunt deleniti ipsum voluptas molestias ut voluptatem repellendus enim ut. Non maiores quo illum voluptatem qui harum cumque est est. Deserunt quos in maxime. Sunt voluptates molestias qui harum temporibus magni. Eum officiis neque et consequatur est odio ipsum.\n \rAssumenda delectus repellat nisi error quasi repellendus aliquam voluptatem ut. Adipisci enim et fugit eius aut sint officiis et quam. Ab veritatis sunt. Veritatis ad incidunt eveniet sit.\n \rQui suscipit dolor est quod quo. Inventore debitis totam. Nihil sint exercitationem non. Sit deserunt non distinctio numquam voluptatibus eius ut velit culpa. Sunt facere ut aut nihil voluptatem. Odit laborum non consequuntur eius. Sed soluta sunt officia reiciendis placeat veniam sunt totam aliquid. Et sit repellendus aspernatur inventore recusandae laborum doloribus iure reprehenderit.\n \rEt iure facere doloribus sint expedita molestiae sint quod dolorum. Iusto sapiente eligendi quaerat quam. Ut qui sit beatae provident error in possimus voluptas porro.\n \rEst temporibus eveniet. Esse et eum et amet et enim. Dicta dolore adipisci. Voluptatibus fuga facere qui voluptatem. Voluptates officia est. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/mRGSBsRoSKy89WZjgBr5"
	},
	{
		"id": "2rvqp5egka5psgci",
		"firstName": "Jena",
		"lastName": "Lueilwitz",
		"company": "Surfboard",
		"email": "Jena.Lueilwitz@surfboard.com",
		"position": "Product Operations Analyst",
		"skills": [
			"Interactions",
			"Response"
		],
		"hobbies": "Natus esse eaque ut vel voluptates aut illum sint similique. Deserunt commodi dignissimos est sit sint tempora eos sunt. Maiores nam quo. Sint aliquid cumque qui aspernatur ullam aliquid. Molestiae error alias dolorem est quam at nesciunt magni. Aperiam impedit error.\n \rSit autem velit maxime voluptas maiores nesciunt. Placeat unde doloremque repudiandae assumenda repellat. Modi amet sit. Ipsam natus praesentium veritatis ducimus minus et aliquam.\n \rEa ea sunt vitae quos voluptatem veniam molestiae. Laborum quos voluptas. Sed architecto possimus ipsa. Aspernatur ut explicabo at ut provident exercitationem. Dicta est autem. Maxime ut totam. Distinctio cupiditate voluptas error non sed eaque et officiis.\n \rMolestiae id voluptas fuga veritatis. Ut debitis doloremque est. Quis et consequatur consequatur saepe. Rem repudiandae libero deleniti. In delectus amet.\n \rCumque beatae omnis nostrum. Et sed inventore. Ducimus nobis quis quasi et ipsa quae et consequatur. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/yMzPKK2sSJ2FVXfLX4KI"
	},
	{
		"id": "2rvqp5egka5psgcj",
		"firstName": "Marta",
		"lastName": "Konopelski",
		"company": "RawEngineering",
		"email": "Marta.Konopelski@rawengineering.com",
		"position": "Global Marketing Developer",
		"skills": [
			"Markets",
			"Accountability"
		],
		"hobbies": "Itaque similique illum facilis ad. Illum consequatur dignissimos nostrum nisi. Ipsam qui qui asperiores. Quis eos qui. Sed eaque autem neque mollitia dolores ex. In molestiae doloremque.\n \rEt enim commodi sed. Corporis non aut velit ut consequatur qui nulla quo quo. Dignissimos provident minus et nam placeat quibusdam.\n \rOptio fugiat id. Quasi qui quis deserunt ut illo quas. Est ad error debitis placeat magni eaque. Accusamus qui nulla. Eaque praesentium voluptatem atque repellendus. Ducimus laborum earum aspernatur modi quam nostrum ipsum aliquid suscipit. Quam suscipit fuga sed. Nobis rem qui vel minus accusamus rerum voluptatibus placeat repudiandae. Et voluptatem expedita repellat libero.\n \rEt aut repellat rerum unde qui necessitatibus laboriosam illum. Ut est doloribus aspernatur eos animi esse autem. Quaerat harum eaque non hic rerum harum debitis. Sunt et facilis. Deserunt deleniti ut nostrum. Ea similique beatae qui quam quia.\n \rEa incidunt harum fuga sapiente iure iure aspernatur eos. Libero et voluptatum sint explicabo soluta et omnis. Nisi assumenda voluptate omnis recusandae tempora vel alias. Ut dolor quod commodi sed quaerat odit. Nesciunt hic eum animi recusandae sapiente. Dolorem optio inventore. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/yMzPKK2sSJ2FVXfLX4KI"
	},
	{
		"id": "2rvqp5egka5psgck",
		"firstName": "Naomi",
		"lastName": "Ledner",
		"company": "RawEngineering",
		"email": "Naomi.Ledner@rawengineering.com",
		"position": "Internal Accountability Administrator",
		"skills": [
			"Security",
			"Solutions"
		],
		"hobbies": "Ut corrupti beatae cupiditate quia. Quo voluptas reiciendis nesciunt minima ipsum. Eligendi similique sunt eligendi. Et fuga similique qui sunt est sed dolores non incidunt. Et laborum illum similique id tempore quidem et.\n \rEius voluptatem ea ut et. Quae vel qui repellendus. Consequatur et commodi amet sed ullam iusto distinctio sint distinctio. Et molestiae optio vel est quia enim. Ipsam ipsa impedit minima.\n \rOccaecati nobis doloremque quia vitae nemo vero esse similique est. Omnis aut fugit sed. Velit rerum perferendis natus aut. Ex atque ab consequatur. Atque vero quasi autem eum. Unde est et soluta velit ullam porro et laborum qui. Iusto a qui dolor voluptas reprehenderit praesentium ut nobis. Ut architecto tempora voluptas dolorum libero nostrum numquam. Repellat optio voluptatum nesciunt enim dolorem aliquid.\n \rMagni corrupti ipsam rem voluptatem eos corrupti. Dicta quam ea eum voluptatem veniam autem adipisci. Amet sint ut enim rerum ipsum rerum.\n \rSit ullam qui molestias ducimus amet non aliquid eos. Illum culpa optio incidunt. Impedit molestiae dolores. Quisquam quia ratione est atque sit nisi at quo officiis. Cum adipisci ducimus sunt aut et aut repellat id. Et est libero voluptatibus sit sequi ipsa aut inventore alias. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/a6DEs4C1QYimUn8iONck"
	},
	{
		"id": "2rvqp5egka5psgcl",
		"firstName": "Ludwig",
		"lastName": "Rau",
		"company": "Contentstack",
		"email": "Ludwig.Rau@contentstack.com",
		"position": "Forward Implementation Consultant",
		"skills": [
			"Infrastructure",
			"Response"
		],
		"hobbies": "Dicta sit incidunt rerum molestiae non. Et libero et optio sint assumenda saepe expedita ullam at. Eos esse sint doloribus odio. Natus enim quam id accusantium deleniti aut animi accusamus. Accusantium est quo sequi iste ab non sit. Corporis nam incidunt ab quae ut dolorum soluta.\n \rIncidunt non eveniet asperiores ipsa officiis est rem quia. Recusandae non ut fugiat sit deleniti. Aliquam dolorem vel repudiandae sunt dicta possimus eligendi et. Aperiam blanditiis similique unde odit error. Maiores ullam reiciendis distinctio iure ut veritatis. Sit tenetur omnis.\n \rSimilique at distinctio tempora dignissimos laudantium officiis reprehenderit vitae autem. Animi quisquam quia illo sequi. Modi autem voluptatibus nobis cupiditate officiis est. Enim qui officiis facere et. Fugit accusamus nulla minus voluptas. Iure in qui voluptatem provident itaque velit. Sint quidem voluptas quasi omnis est repellat. Unde nemo sit est at quo quia.\n \rDoloribus animi nihil dolor est ipsam harum soluta hic. Vero accusantium quam omnis. Voluptas est officiis quaerat a neque. Sed excepturi ducimus tempora delectus rem veritatis dolorum aliquam.\n \rOmnis eum doloribus iure est sed qui perspiciatis odio. Ducimus qui nostrum eum dolor qui iste quasi ipsum illum. Necessitatibus iste mollitia ut. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/xSBqzHGnQmSmuNONq90C"
	},
	{
		"id": "2rvqp5egka5psgcm",
		"firstName": "Tina",
		"lastName": "Tremblay",
		"company": "RawEngineering",
		"email": "Tina.Tremblay@rawengineering.com",
		"position": "Human Implementation Supervisor",
		"skills": [
			"Security",
			"Infrastructure"
		],
		"hobbies": "Quis amet amet eos corrupti autem odio qui vel. Et beatae delectus. Dicta quo asperiores aut ut velit tenetur veniam.\n \rQui laborum corrupti cupiditate optio tenetur labore est sint vitae. Voluptas aut cum ut. Alias laboriosam voluptatem magni tempora sed quia. Harum pariatur et consectetur aut vel cum non.\n \rOfficia sunt sapiente unde hic et earum cupiditate provident iste. Numquam repudiandae dolor libero qui dolore tenetur mollitia et. Porro qui fuga. Quod dolorem molestiae aliquid fugiat omnis consequatur velit aliquam. Quia est magni ut voluptate illo error sed et sed. Iure est natus dolore quisquam et quia hic soluta tenetur.\n \rDolor sunt nihil et tenetur accusantium omnis culpa. Provident et maxime esse et voluptatem quis cumque. Ipsam quas illo maiores minima dicta minima accusamus. Nulla porro non in nesciunt earum. Et dicta quia perspiciatis nostrum in. Consequatur necessitatibus sint nemo distinctio aut est quia veritatis dignissimos.\n \rAssumenda ipsum voluptates rerum eaque in minus. Quam eaque officia modi qui. Alias optio qui consectetur repellendus in reprehenderit. Eveniet ea est facilis dicta. Dolores est explicabo laborum. Aut enim sed et hic in ullam ut. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/T88vXgCQPeI2t7DJxhQR"
	},
	{
		"id": "2rvqp5egka5psgcn",
		"firstName": "Therese",
		"lastName": "Kirlin",
		"company": "Surfboard",
		"email": "Therese.Kirlin@surfboard.com",
		"position": "International Web Technician",
		"skills": [
			"Response",
			"Markets"
		],
		"hobbies": "Enim quae cupiditate non nobis consequatur vel sapiente aut aut. Nihil rerum corrupti excepturi. Et incidunt unde et tempora. Error totam in et nostrum porro non repudiandae. Atque consectetur quis vero eaque deserunt.\n \rDolorem fugiat commodi iusto quasi ipsam quod. Ea ut illum non voluptatem temporibus quidem assumenda nesciunt sunt. Autem in rerum veritatis assumenda quis earum tempora et atque. Ut molestias consequuntur consequatur error rerum repellat possimus neque neque. Laboriosam impedit labore nostrum quasi provident ipsam perspiciatis enim.\n \rMinus dolorem voluptatum deleniti. Illo doloremque magnam est illo est. Dolor dolor ex assumenda et sit consequatur enim dolor molestias. Inventore quis saepe est. Eos non iste quis laudantium. Natus voluptatem natus nulla aut. Aut voluptas aut officiis repellat dolor neque velit.\n \rDeleniti in explicabo ipsa aliquam nobis. Vel tempora reiciendis nisi et sed quia voluptatum vel. Sint ut et aliquam. Aut exercitationem laudantium est saepe accusantium.\n \rRatione doloremque voluptate quia occaecati. Minima exercitationem consequuntur aut libero rem magnam quisquam. Et vel eligendi. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/KrmsjEXbSMeMVBd5PVQI"
	},
	{
		"id": "2rvqp5egka5psgco",
		"firstName": "Rosario",
		"lastName": "Cremin",
		"company": "Contentstack",
		"email": "Rosario.Cremin@contentstack.com",
		"position": "Forward Mobility Manager",
		"skills": [
			"Identity",
			"Communications"
		],
		"hobbies": "Nobis qui eveniet quasi maiores et provident quam. Quae a consequatur ipsum. Repellendus sed dolorem asperiores. Itaque velit voluptatem sunt deserunt magnam sed qui. Ut laboriosam quaerat quos rem nisi dicta temporibus officia dolores.\n \rVoluptatem recusandae iste. Quasi aut totam aut repellat vel velit. Vitae deserunt delectus. Expedita aut vel rem sit velit illo aut architecto perferendis. Aliquid quisquam vitae magni. Aspernatur cupiditate dolorem rerum deserunt quas.\n \rExercitationem iure possimus ex porro. Doloribus harum numquam illo saepe. Facilis harum laudantium optio qui. Libero nulla tempora aut id laborum et. Dicta natus odit voluptatibus harum quasi et libero omnis. Laboriosam cum blanditiis soluta aut. Inventore numquam omnis nam quis facere deserunt iusto. Et et odit a voluptatum. Quis cupiditate quia.\n \rLaudantium debitis maiores fugiat similique doloribus quia a. Quisquam optio est. Vel voluptas dolor in eligendi enim et eius. Non repellendus veritatis tempora. Et in cum enim. Quam dolorem id officiis ea adipisci quasi ratione.\n \rNon exercitationem aliquam. Magni repellat eaque vel sit dolores consequatur quo alias. Non asperiores laudantium alias et quis nam veniam nesciunt est. Officiis architecto numquam. Asperiores sit et mollitia iste. Ut corrupti aspernatur aut accusantium sint quidem aliquid atque voluptas. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/xSBqzHGnQmSmuNONq90C"
	},
	{
		"id": "2rvqp5egka5psgcp",
		"firstName": "Lucienne",
		"lastName": "Lakin",
		"company": "Contentstack",
		"email": "Lucienne.Lakin@contentstack.com",
		"position": "International Accountability Specialist",
		"skills": [
			"Implementation",
			"Paradigm"
		],
		"hobbies": "Iure voluptate porro corporis. Est eum voluptatem necessitatibus. Ab assumenda sit molestiae et possimus perferendis. Consequatur nam corporis assumenda nisi ullam ut at odio. Quaerat voluptas unde repellat aliquam libero accusantium. Qui dolore sit omnis voluptatibus doloribus quam qui.\n \rSit dolores autem ex. Et eum mollitia ut fuga corporis eos praesentium. Deserunt fugit dolor quia totam asperiores asperiores est. Eum dolorem modi error veritatis delectus qui. Fugiat magni veritatis aut.\n \rAliquid voluptatem eum in. Mollitia et ullam molestias ea aperiam vel temporibus et. Quidem ut accusantium. Accusantium qui sit consequatur esse. Fugiat molestiae labore mollitia quidem necessitatibus iure. Facilis doloribus praesentium vel. Aut modi ea vitae aut ut at rem ut. Temporibus sapiente quo optio facilis quidem voluptas magnam voluptas omnis. Consectetur maiores numquam beatae excepturi ut doloremque itaque.\n \rIncidunt cumque mollitia earum. Voluptatem adipisci provident voluptatem laudantium aliquam distinctio velit. Aut facilis voluptatem tempora. Facere sed doloribus at rerum nisi nobis ut.\n \rEt corporis et molestiae nisi delectus aut. Sed molestias ea ea. Quisquam distinctio nulla et sed quisquam quo. Accusamus et omnis quasi rerum a est. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/Htt4DbyITZm4oEYjRnqs"
	},
	{
		"id": "2rvqp5egka5psgcq",
		"firstName": "Breanne",
		"lastName": "Lehner",
		"company": "Surfboard",
		"email": "Breanne.Lehner@surfboard.com",
		"position": "Senior Tactics Architect",
		"skills": [
			"Web",
			"Group"
		],
		"hobbies": "Accusantium quas itaque ullam. Ut labore repellat aliquid nesciunt adipisci iusto ipsa. Culpa omnis repellat ea voluptas recusandae tenetur.\n \rQuis illo quas. Optio rem dicta qui itaque ut deserunt ipsa. At est rerum nam. Ipsa et debitis a soluta adipisci accusantium distinctio sint quidem.\n \rQuia nam quod eum doloremque sit temporibus corrupti dicta eos. Beatae nisi voluptas tempora laudantium et. Dignissimos id voluptatem amet in vero nobis beatae officiis eligendi. Veritatis vero quia repudiandae beatae mollitia neque vel earum ea. Ex occaecati similique ut eos repellendus. Dolores animi quasi. Voluptatem provident sint voluptate quae consectetur doloribus doloremque aut aliquam. Aperiam atque illum sint natus minus voluptatibus hic iste eaque. Sequi quo ab voluptate non a itaque.\n \rRerum voluptas sint hic occaecati culpa quo. In enim quam animi reprehenderit enim dolorum a dicta et. Delectus esse ut animi ut laboriosam.\n \rTempore sint cupiditate qui. Voluptatem ullam nihil dicta ab praesentium voluptates. Perferendis error et. Sed quam dicta adipisci molestias et perferendis non. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/Htt4DbyITZm4oEYjRnqs"
	},
	{
		"id": "2rvqp5egka5psgcr",
		"firstName": "Dee",
		"lastName": "Dicki",
		"company": "Surfboard",
		"email": "Dee.Dicki@surfboard.com",
		"position": "Internal Group Producer",
		"skills": [
			"Configuration",
			"Functionality"
		],
		"hobbies": "Nemo impedit eius saepe quod dolorem omnis suscipit. Atque ea optio adipisci. Corporis earum cum amet laborum beatae. Repudiandae officiis itaque dolor accusamus cumque qui. Et qui aut non distinctio accusantium natus.\n \rOptio aut accusamus voluptas necessitatibus. Culpa deserunt numquam nostrum sed dolorum deleniti et. Omnis maxime ut dicta laudantium hic architecto consectetur et. Eaque molestiae nemo vel alias pariatur cupiditate. Maiores eum earum non ipsam quas quia possimus animi suscipit.\n \rAutem dignissimos voluptas iusto distinctio eum maiores. At asperiores ipsam laudantium quo. Consectetur earum debitis dignissimos. Ipsam eligendi non corporis magnam eum asperiores ut eaque voluptatum. Commodi deserunt atque aliquid. Ut expedita libero commodi atque possimus reprehenderit nesciunt ipsum. Reprehenderit et animi sed. Ducimus architecto omnis ea quaerat.\n \rQuia cumque maxime in repellat amet eaque quis sunt. Quae ut eos deserunt libero explicabo id ipsum. Quod possimus voluptas reiciendis qui est ea. Beatae iste quos illum ratione earum.\n \rNon atque ullam possimus exercitationem voluptatum delectus et dicta itaque. Sequi eaque ratione voluptas amet labore voluptatem voluptatem. Ea architecto consequatur ducimus quia. Aspernatur sed alias quos. Voluptatem repudiandae repellat assumenda. Corrupti aut consequatur et. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/Key246xRgqo8Yj3i6HcF"
	},
	{
		"id": "2rvqp5egka5psgct",
		"firstName": "Alford",
		"lastName": "Davis",
		"company": "Surfboard",
		"email": "Alford.Davis@surfboard.com",
		"position": "Direct Intranet Agent",
		"skills": [
			"Creative",
			"Security"
		],
		"hobbies": "Impedit eius repellendus fuga. Porro blanditiis consequuntur aperiam nam id temporibus. Rerum dolores omnis et est rem.\n \rVoluptatem dicta blanditiis ut reprehenderit ratione repellat qui quibusdam. Id sed fugit tempora labore necessitatibus illo eum officiis eum. Omnis et dicta ea minima est. Esse repellendus ut iusto dolores. Eum sint optio.\n \rAb quo odit doloremque error amet iste. Quia modi explicabo sit sed ut. Illum non sequi ipsum et non corporis eum ipsam. Beatae et sed porro in suscipit reiciendis. Et officiis et. Qui esse et accusamus. Nam officia aliquid ex. Non et qui dolorum et expedita commodi. Facere aut voluptas delectus aspernatur odit a. Eaque enim quo laborum quo consequuntur blanditiis. Placeat tenetur illo itaque magnam facilis sint.\n \rIn eaque et minus sit id. Magnam ex sit qui reiciendis non sunt aut quibusdam repellat. Sed labore dolorem omnis aperiam ut quae cumque similique. Commodi nam quia nobis.\n \rDebitis qui incidunt. Dolores ullam vitae at esse impedit occaecati. Consequuntur optio aperiam qui qui nihil dolores sed amet ut. Rem quas modi suscipit et sit necessitatibus et autem. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/Htt4DbyITZm4oEYjRnqs"
	},
	{
		"id": "2rvqp5egka5psgcu",
		"firstName": "Jewell",
		"lastName": "Erdman",
		"company": "Surfboard",
		"email": "Jewell.Erdman@surfboard.com",
		"position": "Dynamic Group Planner",
		"skills": [
			"Quality",
			"Intranet"
		],
		"hobbies": "Est ipsam id ipsum qui voluptas laboriosam et quod. Autem sint dolore. Vitae qui reprehenderit veritatis. Qui et omnis quia nemo. Aut id similique eos atque quo est quis sit eveniet. Sunt ea explicabo voluptas minus.\n \rIpsum non rem et velit minima voluptas quae accusantium itaque. Dignissimos recusandae consequatur dignissimos sint voluptatem consequatur id. Qui sapiente nostrum voluptatem ea alias beatae dolore minima. Distinctio quae neque. Eaque fugit architecto saepe.\n \rAccusantium possimus quod. Sed odit placeat beatae deserunt veritatis aliquid voluptatem. Non alias qui eius quas molestias rerum ut quo. Expedita consequatur amet nemo aliquam. Est quos ex officiis et. Deserunt vel quod iste ut et maiores tempore enim. Nisi nisi aut et deleniti. Debitis rerum neque in possimus saepe harum velit eaque autem. Voluptatibus earum optio voluptatibus.\n \rEius et voluptatibus doloremque nihil velit vero. Vitae et accusamus similique aut. Autem odit aut nulla eveniet. Deleniti quia sint vitae. Ex debitis ex sunt et aut et eum architecto. Qui sed dolores et optio voluptatem sunt vitae.\n \rItaque quo dignissimos. Eum mollitia qui neque quam rerum alias delectus ea quo. Ipsam quidem quo. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/tctMQndNTXWDUoAGvlQB"
	},
	{
		"id": "2rvqp5egka5psgcv",
		"firstName": "Guido",
		"lastName": "Trantow",
		"company": "Surfboard",
		"email": "Guido.Trantow@surfboard.com",
		"position": "Principal Functionality Agent",
		"skills": [
			"Data",
			"Research"
		],
		"hobbies": "Culpa sit culpa in accusantium. Quo consequatur quaerat. Dolor esse fuga minus nesciunt repudiandae et rerum provident rerum. Veritatis iure officiis aut et iusto nisi quia.\n \rDolores odit enim aut illo aliquid id. Iure et consequatur exercitationem. Veniam quas minus tempora atque. Officiis aut impedit totam consequatur aut eveniet commodi aut temporibus. Laudantium necessitatibus consequatur explicabo corporis eos non aut labore deserunt.\n \rEt earum animi labore non omnis possimus nobis tenetur illo. Iure et minima dolores possimus iusto atque accusamus quae omnis. Eum eos molestiae repellat id. Dignissimos placeat molestiae omnis nesciunt. Rerum delectus quae est minima dignissimos odit. Corrupti aut voluptas expedita quibusdam dolorem velit quas aspernatur. Velit molestiae quibusdam nemo incidunt ut. Explicabo et amet laudantium consequatur.\n \rQui aut laboriosam nesciunt quas. Et enim quam. Ab ut error culpa labore quae tenetur aut consectetur. Et et aut nesciunt doloribus. Facilis est mollitia quod laboriosam vitae. Et eum consequatur.\n \rIste iste qui aliquam aut reprehenderit quam sed. Beatae sint illum ut sapiente illum iure et. Perferendis eligendi voluptas eligendi doloremque. Et aliquam consequatur quibusdam porro iusto voluptate itaque id. Magnam corrupti ut quidem vel nostrum voluptas deleniti necessitatibus. Et aliquam illo deleniti. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/YysSnU7YQfeNVfhvoaxz"
	},
	{
		"id": "2rvqp5egka5psgcw",
		"firstName": "Haley",
		"lastName": "Jacobi",
		"company": "RawEngineering",
		"email": "Haley.Jacobi@rawengineering.com",
		"position": "Regional Configuration Executive",
		"skills": [
			"Intranet",
			"Accountability"
		],
		"hobbies": "Ex quo cum. Laudantium voluptatum neque tempore quae quaerat tempore. Enim itaque et rerum aut. Aperiam non quasi.\n \rRerum laboriosam qui voluptas unde eum eos. Perspiciatis nihil et ea animi hic alias quod mollitia dolores. Unde ut nisi cum doloremque eligendi minus sapiente consequatur. Et aliquam et ullam.\n \rEsse quia consequuntur quibusdam voluptatem animi odio itaque porro. Est rerum voluptatem odio explicabo autem esse ab iure. Sed deleniti enim omnis explicabo necessitatibus qui. Saepe ad quae id et odio error temporibus provident quas. Et eaque aut consequatur magnam. Voluptatem harum iure. Ut quia ut quisquam perferendis rerum voluptas eius. Quibusdam provident at impedit rerum minima amet. Totam ut illo ipsa quia qui saepe. Voluptate quis temporibus et placeat consequatur cum. Et est velit maiores.\n \rQuis tempore fugiat animi fuga consequatur qui exercitationem. Quia rerum et est corrupti. Et fugiat perferendis. Non blanditiis sed error facere dolor hic et totam.\n \rAliquid sit voluptatem laudantium nemo voluptas voluptas quod doloremque. Illo perspiciatis voluptatem nisi a dolorum recusandae sequi deserunt. Velit commodi incidunt ut ut voluptate ipsam. Id amet distinctio eos sunt eos ipsum dolores. Recusandae distinctio assumenda. Est modi totam nesciunt repellendus laboriosam officiis unde. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/KrmsjEXbSMeMVBd5PVQI"
	},
	{
		"id": "2rvqp5egka5psgcx",
		"firstName": "Ashton",
		"lastName": "Borer",
		"company": "Contentstack",
		"email": "Ashton.Borer@contentstack.com",
		"position": "Human Program Architect",
		"skills": [
			"Infrastructure",
			"Marketing"
		],
		"hobbies": "Eaque optio et deserunt libero aliquam quis est ea qui. Sint saepe exercitationem. Fuga iusto praesentium aliquid asperiores sequi ipsum consequatur.\n \rQuod laudantium molestias tenetur consectetur. Eveniet eveniet et nesciunt. Ex culpa ab incidunt iste ipsa harum rem fuga aut. Possimus dolores beatae ratione cum. Voluptatem quis et veritatis porro natus quia reprehenderit quod. Sint labore tempora consequuntur qui dolor est nisi iusto tempore.\n \rConsectetur libero assumenda non omnis sequi. Necessitatibus commodi quod placeat a fuga in architecto. Quasi rem nihil ut cumque ut illum. Eum ipsum corporis assumenda nihil nostrum temporibus similique laboriosam. Inventore doloremque numquam facere voluptas vel libero aut vero placeat. Qui placeat amet voluptatem ut rerum. Veniam eum et sunt est vero inventore dolorum. Vitae exercitationem et voluptates earum et quisquam qui. Enim et veritatis rerum ullam soluta in blanditiis.\n \rAut aut quia accusamus voluptates. Dicta dolorum voluptas. Laborum dolores sed. Rerum voluptas quis architecto commodi fuga cum sit voluptatem dolorem.\n \rReprehenderit et aut in. Iste corporis ab unde et aliquid nulla iste aperiam. Dolores nobis reprehenderit dolores aperiam aut animi laudantium hic. Sed aperiam maiores ab esse quis blanditiis. Sunt tenetur et quisquam nam velit non dolore facilis. Sit vel ut quasi omnis dolores tempora voluptatem fugiat est. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/T88vXgCQPeI2t7DJxhQR"
	},
	{
		"id": "2rvqp5egka5psgcy",
		"firstName": "Janae",
		"lastName": "Bergstrom",
		"company": "Surfboard",
		"email": "Janae.Bergstrom@surfboard.com",
		"position": "Dynamic Assurance Coordinator",
		"skills": [
			"Integration",
			"Markets"
		],
		"hobbies": "Quod ipsum dolores. Error temporibus autem saepe labore. Molestiae sed voluptate consequatur ad reprehenderit consequatur vel quia explicabo.\n \rUt distinctio incidunt optio quis illo. Ipsam quod harum molestias quasi. Cupiditate inventore illo vel ab voluptatibus non. Incidunt totam qui odit modi cupiditate rem. Dignissimos delectus ab provident repellendus eveniet in doloremque.\n \rAut dolore totam. Aut qui non unde ipsa eligendi. Sed quod cupiditate tempore nihil vel dolorem tempore. Voluptatem corporis quo. Quia fugit esse sint sapiente ad eaque itaque doloremque. Saepe omnis dolores. Quas non ex odio id labore. Perspiciatis maiores labore voluptatem fugit aut fugit. Omnis voluptatem quis deleniti nulla quae ipsum modi. Ea aut eum ratione cupiditate molestias exercitationem voluptates aut illum.\n \rCulpa aut consectetur quo ratione vel laborum est tempora iste. Laudantium odio alias ut. Unde incidunt aliquid vel nobis atque. Repellat iusto eaque qui. At consequatur magni repellendus a quod voluptatum beatae ut deserunt.\n \rDucimus ut et temporibus praesentium ad et sunt. Officiis harum vel. Labore et esse est consectetur quo. Earum quia sint voluptate consequatur doloremque provident. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/hYFI5dHRLmCQCGMfR5Qw"
	},
	{
		"id": "2rvqp5egka5psgcz",
		"firstName": "Lonnie",
		"lastName": "Cremin",
		"company": "RawEngineering",
		"email": "Lonnie.Cremin@rawengineering.com",
		"position": "Senior Accounts Administrator",
		"skills": [
			"Program",
			"Applications"
		],
		"hobbies": "Sit eveniet molestiae sint earum sapiente illo commodi quaerat. Eveniet eos a quasi alias nihil. Nihil culpa voluptatem et adipisci hic doloremque.\n \rUllam sunt nesciunt quas officiis. Officia consequatur repellat modi aspernatur accusamus quia iure necessitatibus. Ducimus laboriosam minima at facere rem inventore cum. Sit ipsum natus voluptas odit autem quis aut et hic. Tenetur eaque dolore asperiores et fugiat. Sint dolor doloremque optio in iste.\n \rQuisquam ut laudantium quae. Dolor quas est fugit quae culpa et ut neque. Nihil laboriosam expedita odio iusto quaerat nihil eos atque tenetur. Unde aperiam temporibus perspiciatis dicta. Nostrum eum sit ipsa eligendi. Nisi quisquam laboriosam officia.\n \rId et quae dolorum aspernatur sint omnis necessitatibus possimus quia. Aut et aliquid consequatur perspiciatis. Omnis itaque fugit. Corporis expedita sint suscipit repellat quas molestiae et distinctio natus. Cumque magnam enim doloribus dolor. Vero facilis occaecati ut.\n \rRepellendus debitis id quia. Rerum ut sapiente maiores perferendis quam consequatur eos. Id accusamus pariatur earum odio ad. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/YysSnU7YQfeNVfhvoaxz"
	},
	{
		"id": "2rvqp5egka5psgd0",
		"firstName": "Felton",
		"lastName": "Lindgren",
		"company": "Surfboard",
		"email": "Felton.Lindgren@surfboard.com",
		"position": "Investor Usability Producer",
		"skills": [
			"Usability",
			"Group"
		],
		"hobbies": "Quo aut facere voluptatibus laborum. Est expedita vero sed ullam omnis officia maiores. Sit est enim quos dolor.\n \rSit aut odit neque consequatur. Ipsam rerum accusantium deserunt optio. Aut voluptates et voluptate qui eius qui sed dolorem et. Eos itaque recusandae sint. Delectus a odio consequuntur sit delectus eveniet eius recusandae repellendus. A rem voluptatem officia.\n \rSunt nobis dolorem. Dolor voluptas dolore officiis voluptatem adipisci. In facilis similique. Culpa qui eos nesciunt. Velit eius sapiente fuga molestiae aliquid recusandae qui iure. Quia magnam excepturi quaerat. Est aut consequatur. Est sunt quia et illum eius unde rerum quidem. Totam est quis pariatur est beatae sed fuga dolorem.\n \rLibero quia beatae dolores dolores sit quia ipsum est. Aperiam deserunt et. Suscipit veritatis temporibus laudantium pariatur et iste.\n \rMinima praesentium vel consequatur repudiandae. Quas iste qui animi quidem autem sint saepe ipsum. Temporibus et nam sint eaque dicta soluta quia consectetur quia. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/CvQU9DzRHqTdE9HN9E7E"
	},
	{
		"id": "2rvqp5egka5psgd1",
		"firstName": "Jaron",
		"lastName": "Koepp",
		"company": "Surfboard",
		"email": "Jaron.Koepp@surfboard.com",
		"position": "Lead Branding Orchestrator",
		"skills": [
			"Branding",
			"Functionality"
		],
		"hobbies": "Quos ut aut laudantium maiores itaque numquam possimus qui. Itaque consectetur quisquam voluptatibus maxime sed officia cum aut et. Et ipsam quasi sed.\n \rMagni rerum ex quia possimus et qui et. Et architecto enim. Error officia perspiciatis dolore ut voluptates ut quam at.\n \rQui doloribus soluta consequuntur dolorem omnis. Atque rerum cum et quam voluptates vel amet. Et voluptas iusto reprehenderit qui. Quisquam nostrum at tempore aut ea qui. In maiores autem molestiae. Aut id deleniti necessitatibus ea tempora eos cupiditate doloremque. Incidunt animi debitis eaque. Fugit molestiae aut minus similique iusto voluptatem magnam omnis. Error qui eligendi et rerum cum ea dolore voluptatem et.\n \rEst doloremque architecto quia error sit quia. Quia qui temporibus. Voluptatibus earum et cupiditate tenetur ducimus autem. Occaecati quibusdam unde dignissimos accusantium voluptatem illum voluptatum.\n \rCum labore itaque nam qui et facere aut et sit. Pariatur ducimus impedit nesciunt dolorem eius laudantium consequuntur. Hic rerum quia debitis. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/Htt4DbyITZm4oEYjRnqs"
	},
	{
		"id": "2rvqp5egka5psgd2",
		"firstName": "Aimee",
		"lastName": "Rau",
		"company": "RawEngineering",
		"email": "Aimee.Rau@rawengineering.com",
		"position": "Dynamic Operations Representative",
		"skills": [
			"Operations",
			"Accountability"
		],
		"hobbies": "Animi architecto qui quo voluptas tenetur. Nulla molestiae necessitatibus voluptas consequatur id dolorem quos eum non. Quia at officiis aspernatur vel sit placeat quidem molestiae sunt. Eos dolorum quam et et et explicabo sequi accusamus culpa. Dolorem voluptas provident.\n \rEt quo nihil ut ea voluptates odit deserunt quasi nisi. Unde quae numquam aut inventore quisquam. Suscipit quibusdam quis. Laudantium non commodi labore eligendi eligendi quasi. Sint beatae aut eum et. Magni labore est magnam voluptatem voluptatem sed error iste qui.\n \rDeserunt iusto eveniet accusamus dolor soluta culpa labore. Corporis consectetur aut dolores accusamus dicta. Cum vitae aut sit sunt nostrum ratione quod eligendi et. Quae vel dignissimos sit quod aut. Doloribus excepturi sunt. Facilis et omnis dignissimos excepturi tempore voluptate. Odio quam asperiores quae corrupti animi aut nesciunt earum. Rerum nemo laudantium animi reiciendis exercitationem. Et facere id asperiores non voluptatibus ut perspiciatis repellat facilis.\n \rAb similique dolores expedita. Cupiditate aliquid voluptas voluptatem vitae a. In ut mollitia dolorem molestiae aut eius est. Expedita quam libero voluptatum voluptas enim modi unde. Sit ad similique adipisci neque. Maiores distinctio aliquam nobis delectus aut excepturi vel sed.\n \rLaboriosam animi maxime est asperiores maiores dolor laborum aut. Sed accusamus ea. Non ut tempore perferendis omnis eveniet enim. Illum quaerat laborum est ratione explicabo. Cupiditate quos soluta beatae. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/YysSnU7YQfeNVfhvoaxz"
	},
	{
		"id": "2rvqp5egka5psgd3",
		"firstName": "Malachi",
		"lastName": "Jakubowski",
		"company": "Surfboard",
		"email": "Malachi.Jakubowski@surfboard.com",
		"position": "Customer Group Supervisor",
		"skills": [
			"Quality",
			"Directives"
		],
		"hobbies": "Quia inventore quis nulla accusantium at similique ipsam consequuntur. Est ipsum doloremque assumenda perspiciatis. Rerum id harum sit praesentium ut ut. Mollitia mollitia doloremque dolor veritatis necessitatibus perspiciatis praesentium occaecati.\n \rOfficiis consequatur velit nam rem illum. Modi qui dolore nostrum. Quasi molestiae dolorem natus est consequatur.\n \rExcepturi in doloremque voluptatibus odio. Modi rerum odit labore. Tempora excepturi nemo dolorum aperiam voluptates facere aspernatur et sit. Ad velit voluptatem iste ipsa harum. Rerum commodi excepturi incidunt quia autem commodi nihil et repellendus. Dolore ut doloribus. Iure reiciendis enim dolorem delectus non. Omnis natus et adipisci aut consequatur voluptas ratione quisquam est. In consequatur quod itaque qui rerum temporibus cupiditate. Ut non quam porro nihil.\n \rInventore unde rerum. Dolor cumque architecto minus qui. At explicabo architecto ut voluptatem voluptatem rem assumenda sed atque.\n \rQuis ut asperiores quia adipisci ad molestiae atque ea et. Quia ratione libero quo nesciunt quo molestias est nostrum. Inventore consequuntur minima eos aut officia in magnam consequuntur repellat. ",
		"imageUrl": "https://cdn.fs.teachablecdn.com/KrmsjEXbSMeMVBd5PVQI"
	}
];







// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});


// this api end-point returns an object from a data array find by id

router.get('/:id', function (req, res) {
   
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);

    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    
    // create an object of new Item
    let newItem = {
        id: newId, // generated in above step
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        company: req.body.company, 
        
    };

    // push new item object to data array of items
    data.push(newItem);

    
    res.status(201).json(newItem);
});




// array of data, match by `id` find item and then delete
router.delete('/:id', function (req, res) {
    // find item from array of data
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        
        let targetIndex = data.indexOf(found);

        // splice means delete item from `data` array using index
        data.splice(targetIndex, 1);
    }

   
    res.sendStatus(204);
});


module.exports = router;
