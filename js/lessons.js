/* Читанка curriculum: 40 lessons. Stress is marked with + before the stressed vowel. */
window.LESSONS=[

{ua:`Це дім`,en:`This is a house`,g:`No “to be”, no articles`,
gram:`<p>Ukrainian has no articles and, in the present tense, drops the verb “to be”. <b>Це дім</b> means “This is a house” or “It's the house”. Context decides.</p>
<p>Ask <b>Що це?</b> (What is this?) about things and <b>Хто це?</b> (Who is this?) about people <i>and animals</i>.</p>
<p>A yes/no question uses the same words as a statement. Only the rising tone and the question mark change: <i>Кіт тут.</i> → <i>Кіт тут?</i></p>`,
p:[[`Що це? Це дім.`,`What is this? This is a house.`],[`Хто це? Це мама.`,`Who is this? This is Mum.`],[`А це тато.`,`And this is Dad.`],[`Це кіт.`,`This is a cat.`],[`Кіт тут. Мама теж тут.`,`The cat is here. Mum is here too.`],[`А тато там.`,`And Dad is there.`]],
v:[[`це`,`this (is), it (is)`],[`що`,`what`],[`хто`,`who (people and animals)`],[`дім`,`house, home`],[`м+ама`,`mum`],[`т+ато`,`dad`],[`кіт`,`cat`],[`тут`,`here`],[`там`,`there`],[`а`,`and, whereas (contrast)`],[`теж`,`also, too`]],
r:[],
q:[{q:`Where is Dad?`,o:[`Here`,`There`,`At home`],a:1},{q:`Who else is here with the cat?`,o:[`Dad`,`Nobody`,`Mum`],a:2},{q:`Хто це? is used for…`,o:[`people and animals`,`things only`,`people only`],a:0}]},

{ua:`Він, вона, воно`,en:`He, she, it`,g:`Noun gender`,
gram:`<p>Every noun is masculine, feminine or neuter. The ending usually tells you which.</p>
<div class="gt"><table><tr><th>gender</th><th>ending</th><th>examples</th><th>pronoun</th></tr>
<tr><td>masculine</td><td>consonant</td><td>дім, кіт, стіл</td><td>він</td></tr>
<tr><td>feminine</td><td>-а / -я</td><td>хата, книжка</td><td>вона</td></tr>
<tr><td>neuter</td><td>-о / -е</td><td>вікно, море</td><td>воно</td></tr></table></div>
<p><b>він / вона / воно</b> also mean “it”: a book is <i>вона</i>. Meaning beats ending: <i>тато</i> ends in -о but is masculine.</p>`,
p:[[`Це хата. Вона тут.`,`This is a cottage. It is here.`],[`Це вікно. Воно там.`,`This is a window. It is there.`],[`Де стіл? Він тут.`,`Where is the table? It's here.`],[`Де книжка? Вона там.`,`Where is the book? It's there.`],[`Де кіт? Він теж там.`,`Where is the cat? It's there too.`],[`А де тато? Він тут.`,`And where is Dad? He is here.`],[`Кіт — він. Книжка — вона. Вікно — воно.`,`Cat is “he”. Book is “she”. Window is “it”.`]],
v:[[`х+ата`,`cottage, house (f)`],[`вікн+о`,`window (n)`],[`кн+ижка`,`book (f)`],[`стіл`,`table (m)`],[`де`,`where`],[`він`,`he, it`],[`вон+а`,`she, it`],[`вон+о`,`it (neuter)`]],
r:[`це`,`кіт`,`тут`,`там`,`тато`,`теж`,`а`],
q:[{q:`What gender is вікно?`,o:[`masculine`,`feminine`,`neuter`],a:2},{q:`Which pronoun replaces книжка?`,o:[`вона`,`він`,`воно`],a:0},{q:`Where is the cat?`,o:[`Here`,`There`,`Under the table`],a:1}]},

{ua:`Я не вчитель`,en:`I'm not a teacher`,g:`Personal pronouns and не`,
gram:`<div class="gt"><table><tr><th>singular</th><th></th><th>plural</th><th></th></tr>
<tr><td>я</td><td>I</td><td>ми</td><td>we</td></tr>
<tr><td>ти</td><td>you (a friend)</td><td>ви</td><td>you (polite, or several)</td></tr>
<tr><td>він / вона / воно</td><td>he / she / it</td><td>вони</td><td>they</td></tr></table></div>
<p>To negate, put <b>не</b> right before the word: <i>Я не вчитель.</i> Yes is <b>так</b>, no is <b>ні</b>.</p>
<p>When both sides are nouns, writing often puts a dash where English says “is”: <i>Мурко — кіт.</i> Many jobs have a female form: <i>вчитель / вчителька</i>.</p>`,
p:[[`Привіт! Я Олена.`,`Hi! I'm Olena.`],[`Я вчителька.`,`I'm a teacher.`],[`А хто ти?`,`And who are you?`],[`Я Тарас.`,`I'm Taras.`],[`Ти студент?`,`Are you a student?`],[`Так, я студент. Я не вчитель.`,`Yes, I'm a student. I'm not a teacher.`],[`А це Мурко. Мурко — кіт.`,`And this is Murko. Murko is a cat.`],[`Він не студент. Він кіт!`,`He isn't a student. He's a cat!`]],
v:[[`прив+іт`,`hi`],[`я`,`I`],[`ти`,`you (informal)`],[`вч+ителька`,`teacher (f)`],[`вч+итель`,`teacher (m)`],[`студ+ент`,`student (m); студ+ентка (f)`],[`так`,`yes`],[`ні`,`no`],[`не`,`not`]],
r:[`це`,`хто`,`кіт`,`він`,`а`],
q:[{q:`What does Olena do?`,o:[`She's a student`,`She's a teacher`,`She's a doctor`],a:1},{q:`Is Taras a teacher?`,o:[`Yes`,`No`],a:1},{q:`Politely, “you” to a stranger is…`,o:[`ти`,`вони`,`ви`],a:2}]},

{ua:`Великий і новий`,en:`Big and new`,g:`Adjective agreement`,
gram:`<p>Adjectives take the gender of their noun.</p>
<div class="gt"><table><tr><th>masculine -ий</th><th>feminine -а</th><th>neuter -е</th></tr>
<tr><td>великий дім</td><td>велика хата</td><td>велике вікно</td></tr>
<tr><td>новий стіл</td><td>нова книжка</td><td>нове вікно</td></tr></table></div>
<p>Before the noun it describes: <i>чорний кіт</i>. After it, it works like “is”: <i>Кіт чорний</i> = The cat is black.</p>
<p>A smaller “soft” group ends in <b>-ій / -я / -є</b> (синій, синя, синє = blue). You'll meet it later.</p>`,
p:[[`Це дім. Дім великий і новий.`,`This is a house. The house is big and new.`],[`Вікно теж велике.`,`The window is big too.`],[`А тут хата. Хата мала і стара.`,`And here is a cottage. The cottage is small and old.`],[`Але вона гарна.`,`But it is beautiful.`],[`Мурко — чорний кіт.`,`Murko is a black cat.`],[`Він малий, але розумний.`,`He is small but clever.`]],
v:[[`вел+икий`,`big`],[`мал+ий`,`small`],[`нов+ий`,`new`],[`стар+ий`,`old`],[`г+арний`,`beautiful, nice`],[`ч+орний`,`black`],[`роз+умний`,`clever`],[`і`,`and`],[`ал+е`,`but`]],
r:[`дім`,`вікно`,`хата`,`кіт`,`теж`,`тут`,`вона`],
q:[{q:`The feminine form of новий is…`,o:[`нове`,`нова`,`новий`],a:1},{q:`What is the cottage like?`,o:[`Small and old`,`Big and new`,`Black and clever`],a:0},{q:`Why велике with вікно?`,o:[`It's plural`,`It's masculine`,`It's neuter`],a:2}]},

{ua:`Мій дім`,en:`My house`,g:`Possessives`,
gram:`<div class="gt"><table><tr><th></th><th>m</th><th>f</th><th>n</th></tr>
<tr><td>my</td><td>мій</td><td>моя</td><td>моє</td></tr>
<tr><td>your (ти)</td><td>твій</td><td>твоя</td><td>твоє</td></tr>
<tr><td>our</td><td>наш</td><td>наша</td><td>наше</td></tr></table></div>
<p>Like adjectives, they match the noun: <i>мій кіт, моя книжка, моє вікно</i>.</p>
<p><b>його</b> (his) and <b>її</b> (her) never change: <i>його мама, його кіт, її книжка</i>.</p>`,
p:[[`Це мій дім.`,`This is my house.`],[`Мій дім старий, але гарний.`,`My house is old but nice.`],[`Це моя мама. Вона лікарка.`,`This is my mum. She is a doctor.`],[`А це мій тато. Він інженер.`,`And this is my dad. He is an engineer.`],[`Це наш кіт Мурко.`,`This is our cat Murko.`],[`А це книжка. Це його книжка?`,`And this is a book. Is it his book?`],[`Ні, не його. Це її книжка. Вона нова.`,`No, not his. It's her book. It's new.`]],
v:[[`мій · м+оя · мо+є`,`my (m · f · n)`],[`твій · тво+я · тво+є`,`your (m · f · n)`],[`наш · н+аша · н+аше`,`our (m · f · n)`],[`йог+о`,`his`],[`ї+ї`,`her`],[`л+ікарка`,`doctor (f); л+ікар (m)`],[`інжен+ер`,`engineer`]],
r:[`дім`,`старий`,`гарний`,`мама`,`тато`,`кіт`,`книжка`,`нова`,`але`,`ні`],
q:[{q:`What is Mum's job?`,o:[`Engineer`,`Teacher`,`Doctor`],a:2},{q:`Whose book is it?`,o:[`Mum's`,`Dad's`,`Murko's`],a:0},{q:`моє goes with…`,o:[`дім`,`вікно`,`книжка`],a:1}]},

{ua:`Я читаю`,en:`I read`,g:`Present tense, 1st conjugation`,
gram:`<p>Verbs ending in <b>-ати / -яти</b> mostly follow one pattern. Drop <i>-ти</i> and add the endings.</p>
<div class="gt"><table><tr><th>читати</th><th>to read</th></tr>
<tr><td>я</td><td>читаю</td></tr><tr><td>ти</td><td>читаєш</td></tr><tr><td>він / вона</td><td>читає</td></tr>
<tr><td>ми</td><td>читаємо</td></tr><tr><td>ви</td><td>читаєте</td></tr><tr><td>вони</td><td>читають</td></tr></table></div>
<p>One form covers both “I read” and “I am reading”. Negate with <b>не</b> before the verb: <i>Тато не читає.</i></p>`,
p:[[`Я Тарас. Я читаю.`,`I'm Taras. I'm reading.`],[`Мама теж читає.`,`Mum is reading too.`],[`Тато не читає. Він слухає радіо.`,`Dad isn't reading. He's listening to the radio.`],[`Мурко не читає і не слухає.`,`Murko doesn't read and doesn't listen.`],[`Він гуляє.`,`He goes for a walk.`],[`Мама і тато знають: Мурко — розумний кіт.`,`Mum and Dad know: Murko is a clever cat.`],[`Ми всі це знаємо.`,`We all know it.`]],
v:[[`чит+ати`,`to read`],[`зн+ати`,`to know`],[`сл+ухати`,`to listen (to)`],[`гул+яти`,`to walk, stroll`],[`р+адіо`,`radio (never changes)`],[`ми`,`we`],[`вон+и`,`they`],[`всі`,`all, everyone`]],
r:[`мама`,`тато`,`теж`,`не`,`розумний`,`кіт`,`це`],
q:[{q:`What is Dad doing?`,o:[`Reading`,`Listening to the radio`,`Walking`],a:1},{q:`вони ___ (читати)`,o:[`читаємо`,`читаєте`,`читають`],a:2},{q:`Who goes for a walk?`,o:[`Murko`,`Mum`,`Taras`],a:0}]},

{ua:`Старі вулиці`,en:`Old streets`,g:`Nominative plural`,
gram:`<div class="gt"><table><tr><th>singular</th><th>plural</th><th>rule</th></tr>
<tr><td>студент, книжка</td><td>студенти, книжки</td><td>m / f hard → -и</td></tr>
<tr><td>вчитель, вулиця</td><td>вчителі, вулиці</td><td>m / f soft → -і</td></tr>
<tr><td>вікно, місто</td><td>вікна, міста</td><td>n -о → -а</td></tr>
<tr><td>великий, нова, старе</td><td>великі, нові, старі</td><td>adjectives → -і</td></tr></table></div>
<p>Watch the vowel: <b>кіт → коти</b>, <b>стіл → столи</b>. The <i>і</i> of a closed syllable turns back into <i>о</i> once an ending is added.</p>`,
p:[[`Це Львів. Львів — старе місто.`,`This is Lviv. Lviv is an old city.`],[`Тут старі будинки і гарні вулиці.`,`There are old buildings and beautiful streets here.`],[`Вулиці вузькі, а вікна великі.`,`The streets are narrow and the windows are big.`],[`Тут студенти і вчителі.`,`Students and teachers are here.`],[`Вони гуляють і читають.`,`They walk and read.`],[`Коти теж гуляють.`,`Cats walk too.`],[`Вони чорні, білі і руді.`,`They are black, white and ginger.`]],
v:[[`Льв+ів`,`Lviv`],[`м+істо`,`city, town (n)`],[`буд+инок`,`building; буд+инки (pl)`],[`в+улиця`,`street; в+улиці (pl)`],[`вузьк+ий`,`narrow`],[`б+ілий`,`white`],[`руд+ий`,`ginger, red-haired`],[`кот+и`,`cats (from кіт)`]],
r:[`старий`,`гарний`,`великий`,`вікно`,`студент`,`вчитель`,`гуляти`,`читати`,`чорний`],
q:[{q:`The plural of вікно is…`,o:[`вікни`,`вікна`,`вікно`],a:1},{q:`What are the streets like?`,o:[`Wide`,`New`,`Narrow`],a:2},{q:`The plural of кіт is…`,o:[`коти`,`кіти`,`котів`],a:0}]},

{ua:`Вона читає книжку`,en:`She reads a book`,g:`Accusative: the direct object`,
gram:`<p>The thing you act on takes the accusative case.</p>
<div class="gt"><table><tr><th>type</th><th>change</th><th>example</th></tr>
<tr><td>feminine</td><td>-а → -у, -я → -ю</td><td>книжка → книжку</td></tr>
<tr><td>masc. thing, neuter</td><td>no change</td><td>чай, молоко</td></tr>
<tr><td>masc. person / animal</td><td>+ -а</td><td>кіт → кота, Тарас → Тараса</td></tr></table></div>
<p><b>пити</b> (to drink) is irregular: <i>п'ю, п'єш, п'є, п'ємо, п'єте, п'ють</i>.</p>`,
p:[[`Олена читає книжку.`,`Olena is reading a book.`],[`Вона п'є каву.`,`She is drinking coffee.`],[`Тато читає газету, а мама слухає музику.`,`Dad reads the newspaper and Mum listens to music.`],[`Тарас має машину.`,`Taras has a car.`],[`Машина стара, але гарна.`,`The car is old but nice.`],[`Мурко має миску і молоко.`,`Murko has a bowl and milk.`],[`Олена знає Тараса. Він її студент.`,`Olena knows Taras. He is her student.`]],
v:[[`к+ава`,`coffee; к+аву (acc.)`],[`газ+ета`,`newspaper`],[`м+узика`,`music`],[`маш+ина`,`car`],[`м+иска`,`bowl`],[`молок+о`,`milk`],[`п+ити`,`to drink: п'ю, п'є`],[`м+ати`,`to have: м+аю, м+ає`]],
r:[`читати`,`слухати`,`знати`,`книжка`,`стара`,`гарна`,`її`,`студент`],
q:[{q:`What is Olena drinking?`,o:[`Tea`,`Coffee`,`Milk`],a:1},{q:`Я читаю ___ (книжка)`,o:[`книжку`,`книжка`,`книжки`],a:0},{q:`Why Тараса, not Тарас?`,o:[`It's feminine`,`It's plural`,`He's a male person: animate masculine`],a:2}]},

{ua:`Я люблю каву`,en:`I love coffee`,g:`Present tense, 2nd conjugation`,
gram:`<p>Most verbs in <b>-ити</b> (and some in -іти) use the second pattern.</p>
<div class="gt"><table><tr><th>говорити</th><th>to speak</th></tr>
<tr><td>я</td><td>говорю</td></tr><tr><td>ти</td><td>говориш</td></tr><tr><td>він / вона</td><td>говорить</td></tr>
<tr><td>ми</td><td>говоримо</td></tr><tr><td>ви</td><td>говорите</td></tr><tr><td>вони</td><td>говорять</td></tr></table></div>
<p>The <b>я</b> form often shifts its consonant: <i>любити → люблю, робити → роблю, ходити → ходжу, бачити → бачу</i>. The other forms stay regular: <i>любиш, любить</i>.</p>
<p><b>українською</b> = in Ukrainian. Learn it as a fixed phrase for now.</p>`,
p:[[`Тарас говорить українською і англійською.`,`Taras speaks Ukrainian and English.`],[`Він любить Львів.`,`He loves Lviv.`],[`«Я люблю каву», — каже Олена.`,`“I love coffee,” says Olena.`],[`«А я люблю чай», — каже Тарас.`,`“And I love tea,” says Taras.`],[`Мурко бачить молоко.`,`Murko sees the milk.`],[`Він теж любить молоко!`,`He loves milk too!`],[`«Що ти робиш?» — питає мама.`,`“What are you doing?” asks Mum.`],[`«Я читаю книжку», — каже Тарас.`,`“I'm reading a book,” says Taras.`]],
v:[[`говор+ити`,`to speak`],[`люб+ити`,`to love, like: любл+ю`],[`б+ачити`,`to see: б+ачу`],[`роб+ити`,`to do, make: робл+ю`],[`каз+ати`,`to say: каж+у, к+аже`],[`пит+ати`,`to ask`],[`чай`,`tea`],[`укра+їнською`,`in Ukrainian`],[`англ+ійською`,`in English`]],
r:[`кава`,`молоко`,`Львів`,`книжка`,`читати`,`теж`,`що`],
q:[{q:`What does Taras love to drink?`,o:[`Coffee`,`Milk`,`Tea`],a:2},{q:`я ___ (любити)`,o:[`люблю`,`любю`,`любить`],a:0},{q:`What does Murko see?`,o:[`A book`,`Milk`,`Coffee`],a:1}]},

{ua:`Вона в школі`,en:`She's at school`,g:`Locative: where something is`,
gram:`<p>After <b>в / у</b> (in) and <b>на</b> (on, at), the place takes the locative case.</p>
<div class="gt"><table><tr><th>noun</th><th>ending</th><th>where?</th></tr>
<tr><td>школа (f)</td><td>-а → -і</td><td>у школі</td></tr>
<tr><td>місто (n)</td><td>-о → -і</td><td>у місті</td></tr>
<tr><td>стіл (m)</td><td>+ -і</td><td>на столі</td></tr>
<tr><td>парк (m)</td><td>+ -у</td><td>у парку</td></tr></table></div>
<p><b>в</b> and <b>у</b> mean the same; pick whichever is easier to say. <b>на</b> is for surfaces and some places: <i>на столі, на роботі</i>. <b>вдома</b> means “at home”.</p>`,
p:[[`Де Олена? Вона в школі.`,`Where is Olena? She's at school.`],[`Вона працює в школі.`,`She works at a school.`],[`Тарас в університеті.`,`Taras is at the university.`],[`Мама в лікарні.`,`Mum is at the hospital.`],[`Тато на роботі.`,`Dad is at work.`],[`А Мурко вдома.`,`And Murko is at home.`],[`Він спить на столі.`,`He is sleeping on the table.`],[`Книжка теж на столі.`,`The book is on the table too.`]],
v:[[`шк+ола`,`school`],[`університ+ет`,`university`],[`лік+арня`,`hospital`],[`роб+ота`,`work, job`],[`працюв+ати`,`to work: працю+ю, працю+є`],[`сп+ати`,`to sleep: сплю, спить`],[`вд+ома`,`at home`],[`в / у`,`in, at (+ locative)`],[`на`,`on, at (+ locative)`]],
r:[`де`,`стіл`,`книжка`,`теж`,`лікарка`,`вчителька`],
q:[{q:`Where is Dad?`,o:[`At school`,`At work`,`At home`],a:1},{q:`“at school” is…`,o:[`у школу`,`у школа`,`у школі`],a:2},{q:`Where does Murko sleep?`,o:[`On the table`,`At the hospital`,`At the university`],a:0}]},

{ua:`Іду в школу`,en:`I'm going to school`,g:`Going: іти, їхати + where to`,
gram:`<p>Ukrainian splits “to go”: <b>іти</b> on foot, <b>їхати</b> by any transport.</p>
<div class="gt"><table><tr><th></th><th>іти</th><th>їхати</th></tr>
<tr><td>я</td><td>іду</td><td>їду</td></tr><tr><td>ти</td><td>ідеш</td><td>їдеш</td></tr><tr><td>він / вона</td><td>іде</td><td>їде</td></tr>
<tr><td>ми</td><td>ідемо</td><td>їдемо</td></tr><tr><td>вони</td><td>ідуть</td><td>їдуть</td></tr></table></div>
<p>Direction uses <b>в / на + accusative</b>; location uses the locative. <i>Я в школі</i> (I am at school) vs <i>Я іду в школу</i> (I'm going to school).</p>
<p>Negatives double up: <i>Мурко <b>нікуди не</b> іде</i> = Murko isn't going anywhere.</p>`,
p:[[`Ранок. Олена іде в школу.`,`Morning. Olena walks to school.`],[`Тарас їде в університет.`,`Taras drives to the university.`],[`Він їде на машині.`,`He goes by car.`],[`Тато іде на роботу.`,`Dad walks to work.`],[`Мама їде в лікарню.`,`Mum goes to the hospital.`],[`А Мурко нікуди не іде.`,`And Murko isn't going anywhere.`],[`Він спить вдома.`,`He sleeps at home.`],[`Увечері всі ідуть додому.`,`In the evening everyone goes home.`]],
v:[[`іт+и`,`to go on foot: ід+у, ід+е, ід+уть`],[`+їхати`,`to go by transport: +їду, +їде`],[`р+анок`,`morning`],[`ув+ечері`,`in the evening`],[`дод+ому`,`home (towards home)`],[`нік+уди`,`nowhere (with не)`]],
r:[`школа`,`університет`,`лікарня`,`робота`,`машина`,`вдома`,`спати`,`всі`],
q:[{q:`How does Taras get to the university?`,o:[`On foot`,`By car`],a:1},{q:`“I'm going to school” is…`,o:[`Я іду в школу`,`Я іду в школі`],a:0},{q:`Where does everyone go in the evening?`,o:[`To the park`,`To work`,`Home`],a:2}]},

{ua:`У мене є кіт`,en:`I have a cat`,g:`Genitive: having and not having`,
gram:`<p>“I have” is literally “at me there is”: <b>у мене є</b>.</p>
<div class="gt"><table><tr><th>у мене</th><th>у тебе</th><th>у нього</th><th>у неї</th><th>у нас</th><th>у вас</th><th>у них</th></tr>
<tr><td>I</td><td>you</td><td>he</td><td>she</td><td>we</td><td>you</td><td>they</td></tr></table></div>
<p>“Don't have” is <b>у мене немає</b> + genitive.</p>
<div class="gt"><table><tr><th>type</th><th>genitive</th><th>example</th></tr>
<tr><td>feminine</td><td>-а → -и</td><td>машина → машини</td></tr>
<tr><td>masculine</td><td>+ -а (often)</td><td>кіт → кота, Тарас → Тараса</td></tr>
<tr><td>masculine</td><td>+ -у (some)</td><td>чай → чаю</td></tr>
<tr><td>neuter</td><td>-о → -а</td><td>молоко → молока</td></tr></table></div>`,
p:[[`У Тараса є кіт.`,`Taras has a cat.`],[`У нього є машина, але немає велосипеда.`,`He has a car but no bicycle.`],[`У Олени є книжка і кава.`,`Olena has a book and coffee.`],[`Але в неї немає кота.`,`But she doesn't have a cat.`],[`Вона хоче кота.`,`She wants a cat.`],[`«У тебе є чай?» — питає Олена.`,`“Do you have any tea?” Olena asks.`],[`«Ні, у мене немає чаю. Але є кава», — каже Тарас.`,`“No, I don't have tea. But there's coffee,” says Taras.`]],
v:[[`у м+ене є`,`I have`],[`нем+ає`,`there isn't; (I) don't have`],[`у нь+ого`,`at him (he has)`],[`у н+еї`,`at her (she has)`],[`велосип+ед`,`bicycle`],[`хот+іти`,`to want: х+очу, х+оче`]],
r:[`машина`,`кава`,`чай`,`книжка`,`питати`,`казати`,`кіт`,`але`],
q:[{q:`What doesn't Taras have?`,o:[`A car`,`A bicycle`,`A cat`],a:1},{q:`“I don't have milk” is…`,o:[`У мене немає молоко`,`У мене немає молоку`,`У мене немає молока`],a:2},{q:`What does Olena want?`,o:[`A cat`,`Tea`,`A car`],a:0}]},

{ua:`Субота`,en:`Saturday`,g:`Past tense`,
gram:`<p>The past tense marks gender and number, not person. Drop <i>-ти</i> and add:</p>
<div class="gt"><table><tr><th>m</th><th>f</th><th>n</th><th>plural</th></tr>
<tr><td>читав</td><td>читала</td><td>читало</td><td>читали</td></tr>
<tr><td>був</td><td>була</td><td>було</td><td>були</td></tr></table></div>
<p>So a man says <i>я читав</i>, a woman <i>я читала</i>. The verb “to be” returns in the past: <b>бути → був, була</b>.</p>
<p>From here the questions are in Ukrainian.</p>`,
p:[[`Вчора була субота.`,`Yesterday was Saturday.`],[`Тарас не ходив в університет.`,`Taras didn't go to the university.`],[`Він довго спав.`,`He slept for a long time.`],[`Потім він пив каву і читав книжку.`,`Then he drank coffee and read a book.`],[`Олена гуляла в парку.`,`Olena was walking in the park.`],[`Там вона бачила Тараса.`,`There she saw Taras.`],[`Вони гуляли разом і довго говорили.`,`They walked together and talked for a long time.`],[`А Мурко був вдома. Він теж спав.`,`And Murko was at home. He was asleep too.`]],
v:[[`вч+ора`,`yesterday`],[`суб+ота`,`Saturday`],[`б+ути`,`to be: був, бул+а, бул+и`],[`ход+ити`,`to go (regularly): ходж+у`],[`д+овго`,`for a long time`],[`п+отім`,`then, afterwards`],[`парк`,`park; у п+арку`],[`р+азом`,`together`]],
r:[`спати`,`пити`,`кава`,`бачити`,`гуляти`,`говорити`,`університет`,`вдома`],
q:[{q:`Що робив Тарас уранці?`,o:[`Він працював у школі`,`Він довго спав`,`Він їхав на роботу`],a:1},{q:`Де гуляла Олена?`,o:[`У парку`,`Вдома`,`На роботі`],a:0},{q:`A woman says “I was reading”:`,o:[`я читав`,`я читали`,`я читала`],a:2}]},

{ua:`Неділя`,en:`Sunday`,g:`Instrumental with з`,
gram:`<p><b>з</b> (with) takes the instrumental case.</p>
<div class="gt"><table><tr><th>type</th><th>ending</th><th>example</th></tr>
<tr><td>masc. / neuter</td><td>-ом (soft -ем)</td><td>з молоком, з татом, з чаєм</td></tr>
<tr><td>feminine</td><td>-ою (soft -ею)</td><td>з мамою, з Оленою</td></tr></table></div>
<p>Pronouns: <i>зі мною, з тобою, з ним, з нею, з нами, з ними</i>.</p>
<p>Some words lose a vowel: <b>цукор → з цукром</b>.</p>`,
p:[[`Сьогодні неділя.`,`Today is Sunday.`],[`Тарас п'є чай з молоком.`,`Taras drinks tea with milk.`],[`Олена п'є каву з цукром.`,`Olena drinks coffee with sugar.`],[`Мама розмовляє з татом на кухні.`,`Mum is talking with Dad in the kitchen.`],[`Мурко сидить з ними.`,`Murko sits with them.`],[`Потім Тарас іде гуляти з Оленою.`,`Then Taras goes for a walk with Olena.`],[`Вони гуляють у парку і говорять про книжки.`,`They walk in the park and talk about books.`]],
v:[[`сьог+одні`,`today`],[`нед+іля`,`Sunday`],[`з`,`with (+ instrumental)`],[`ц+укор`,`sugar; з ц+укром`],[`к+ухня`,`kitchen; на к+ухні`],[`розмовл+яти`,`to talk, chat`],[`сид+іти`,`to sit: сидж+у, сид+ить`],[`про`,`about (+ accusative)`]],
r:[`чай`,`молоко`,`кава`,`пити`,`парк`,`потім`,`гуляти`,`говорити`],
q:[{q:`З чим Тарас п'є чай?`,o:[`З цукром`,`З молоком`,`З кавою`],a:1},{q:`Де розмовляють мама і тато?`,o:[`На кухні`,`У парку`,`У школі`],a:0},{q:`“with Olena” is…`,o:[`з Олена`,`з Олені`,`з Оленою`],a:2}]},

{ua:`Подарунок`,en:`The present`,g:`Dative: to whom`,
gram:`<p>The person you give to, call, thank or help is in the dative.</p>
<div class="gt"><table><tr><th>type</th><th>ending</th><th>example</th></tr>
<tr><td>masculine</td><td>-ові / -у</td><td>татові, Тарасові</td></tr>
<tr><td>feminine</td><td>-а → -і</td><td>мамі, Олені</td></tr></table></div>
<p>Pronouns: <i>мені, тобі, йому, їй, нам, вам, їм</i>.</p>
<p>“I like” is “it pleases me”: <b>Мені подобається книжка</b>. A plural thing makes the verb plural: <b>Мені подобаються квіти</b>.</p>`,
p:[[`Завтра в мами день народження.`,`Tomorrow is Mum's birthday.`],[`Тарас хоче дати мамі подарунок.`,`Taras wants to give Mum a present.`],[`Йому подобається ідея: нова книжка.`,`He likes the idea of a new book.`],[`Але мамі більше подобаються квіти.`,`But Mum likes flowers more.`],[`Тарас дзвонить Олені.`,`Taras phones Olena.`],[`Олена каже: «Книжка і квіти — це добра ідея!»`,`Olena says: “A book and flowers is a good idea!”`],[`Тарас дякує Олені.`,`Taras thanks Olena.`]],
v:[[`з+автра`,`tomorrow`],[`день народж+ення`,`birthday`],[`д+ати`,`to give`],[`подар+унок`,`present, gift`],[`под+обатися`,`to please: мені под+обається = I like`],[`б+ільше`,`more`],[`кв+іти`,`flowers`],[`дзвон+ити`,`to phone (+ dative)`],[`д+якувати`,`to thank (+ dative)`],[`ід+ея`,`idea`],[`д+обрий`,`good`]],
r:[`хотіти`,`книжка`,`нова`,`казати`,`але`,`у мами (genitive)`],
q:[{q:`Що більше подобається мамі?`,o:[`Кава`,`Машина`,`Квіти`],a:2},{q:`Кому дзвонить Тарас?`,o:[`Олені`,`Мамі`,`Татові`],a:0},{q:`“I like books” is…`,o:[`Я подобаюся книжки`,`Мені подобаються книжки`,`Мене подобається книжки`],a:1}]},

{ua:`Плани`,en:`Plans`,g:`Future tense`,
gram:`<p>For ongoing or general future actions use <b>буду + infinitive</b>.</p>
<div class="gt"><table><tr><th></th><th>бути</th><th>example</th></tr>
<tr><td>я</td><td>буду</td><td>буду читати</td></tr><tr><td>ти</td><td>будеш</td><td>будеш читати</td></tr>
<tr><td>він / вона</td><td>буде</td><td>буде читати</td></tr><tr><td>ми</td><td>будемо</td><td>будемо читати</td></tr>
<tr><td>вони</td><td>будуть</td><td>будуть читати</td></tr></table></div>
<p>A one-word form means the same: infinitive + <b>-му, -меш, -ме…</b> → <i>читатиму, спатиме</i>.</p>`,
p:[[`Завтра субота.`,`Tomorrow is Saturday.`],[`Тарас не буде працювати.`,`Taras won't be working.`],[`Вранці він буде відпочивати і читати.`,`In the morning he will rest and read.`],[`Олена буде гуляти в парку з подругою.`,`Olena will walk in the park with a friend.`],[`Мама буде готувати обід.`,`Mum will cook lunch.`],[`Тато буде допомагати мамі на кухні.`,`Dad will help Mum in the kitchen.`],[`А Мурко спатиме цілий день.`,`And Murko will sleep all day.`]],
v:[[`б+уду`,`I will: б+удеш, б+уде, б+удуть`],[`відпочив+ати`,`to rest`],[`вр+анці`,`in the morning`],[`п+одруга`,`friend (f); друг (m)`],[`готув+ати`,`to cook, prepare`],[`об+ід`,`lunch`],[`допомаг+ати`,`to help (+ dative)`],[`ц+ілий день`,`all day`]],
r:[`завтра`,`субота`,`працювати`,`парк`,`кухня`,`з + instr.`,`спати`],
q:[{q:`Що буде робити мама?`,o:[`Готувати обід`,`Читати`,`Гуляти`],a:0},{q:`З ким Олена буде гуляти?`,o:[`З мамою`,`З Мурком`,`З подругою`],a:2},{q:`Мурко спатиме means…`,o:[`Murko is sleeping`,`Murko will sleep`,`Murko slept`],a:1}]},

{ua:`Лист`,en:`The letter`,g:`Aspect: process or result`,
gram:`<p>Most verbs come in pairs. The <b>imperfective</b> describes a process or a habit; the <b>perfective</b> one finished result.</p>
<div class="gt"><table><tr><th>imperfective</th><th>perfective</th><th></th></tr>
<tr><td>читати</td><td>прочитати</td><td>read</td></tr><tr><td>писати</td><td>написати</td><td>write</td></tr>
<tr><td>робити</td><td>зробити</td><td>do, make</td></tr><tr><td>купувати</td><td>купити</td><td>buy</td></tr></table></div>
<p><i>Він писав лист</i> = he was writing (maybe unfinished). <i>Він написав лист</i> = he wrote it, it's done.</p>
<p>A perfective verb has no present. Its present-looking form is the future: <b>напишу</b> = I will write.</p>`,
p:[[`Увечері Тарас довго писав лист.`,`In the evening Taras spent a long time writing a letter.`],[`Нарешті він написав лист.`,`Finally he finished the letter.`],[`Потім він пив чай і читав книжку.`,`Then he drank tea and read a book.`],[`Він прочитав книжку за вечір.`,`He read the whole book in one evening.`],[`Завтра він купить мамі квіти.`,`Tomorrow he will buy Mum flowers.`],[`І він напише ще один лист.`,`And he will write one more letter.`],[`Олена каже: «Ти молодець!»`,`Olena says: “Well done!”`]],
v:[[`пис+ати / напис+ати`,`to write: пиш+у, п+ише`],[`прочит+ати`,`to read through (pf.)`],[`купув+ати / куп+ити`,`to buy: купл+ю, к+упить`],[`лист`,`letter`],[`нар+ешті`,`finally`],[`за в+ечір`,`in (the space of) an evening`],[`ще од+ин`,`one more`],[`молод+ець`,`well done!`]],
r:[`увечері`,`довго`,`потім`,`пити`,`чай`,`завтра`,`мамі (dative)`,`квіти`],
q:[{q:`Тарас прочитав книжку means…`,o:[`He was reading the book`,`He finished the book`,`He will read the book`],a:1},{q:`Що Тарас купить завтра?`,o:[`Квіти`,`Книжку`,`Машину`],a:0},{q:`“He will write” (one finished letter):`,o:[`він писав`,`він пише`,`він напише`],a:2}]},

{ua:`У магазині`,en:`At the shop`,g:`Numbers with nouns`,
gram:`<div class="gt"><table><tr><th>number</th><th>noun form</th><th>example</th></tr>
<tr><td>1</td><td>agrees, singular</td><td>один кіт, одна книжка, одне яблуко</td></tr>
<tr><td>2, 3, 4</td><td>nominative plural</td><td>два коти, дві книжки</td></tr>
<tr><td>5 and up</td><td>genitive plural</td><td>п'ять котів, п'ять книжок, сто гривень</td></tr></table></div>
<p><b>два</b> goes with masculine and neuter nouns, <b>дві</b> with feminine. <b>скільки</b> (how many / how much) also takes the genitive plural.</p>`,
p:[[`Олена іде в магазин.`,`Olena goes to the shop.`],[`Вона купує хліб, дві пляшки молока і п'ять яблук.`,`She buys bread, two bottles of milk and five apples.`],[`Тарас теж у магазині.`,`Taras is in the shop too.`],[`Він купує каву і шість бананів.`,`He buys coffee and six bananas.`],[`«Скільки коштує кава?» — питає Олена.`,`“How much is the coffee?” asks Olena.`],[`«Сто гривень», — каже продавець.`,`“A hundred hryvnias,” says the shop assistant.`],[`Вони платять і разом ідуть додому.`,`They pay and go home together.`]],
v:[[`магаз+ин`,`shop`],[`хліб`,`bread`],[`пл+яшка`,`bottle`],[`+яблуко`,`apple; п'ять +яблук`],[`бан+ан`,`banana`],[`ск+ільки`,`how much, how many`],[`к+оштувати`,`to cost: к+оштує`],[`гр+ивня`,`hryvnia; сто гр+ивень`],[`продав+ець`,`shop assistant`],[`плат+ити`,`to pay: плач+у, пл+атить`],[`од+ин · два / дві · три · чот+ири`,`1 · 2 · 3 · 4`],[`п'ять · шість · сто`,`5 · 6 · 100`]],
r:[`купувати`,`молоко`,`кава`,`іти`,`разом`,`додому`,`питати`],
q:[{q:`Скільки яблук купує Олена?`,o:[`Два`,`Шість`,`П'ять`],a:2},{q:`Скільки коштує кава?`,o:[`Сто гривень`,`П'ять гривень`,`Шість гривень`],a:0},{q:`Which is correct?`,o:[`п'ять книжки`,`п'ять книжок`,`п'ять книжка`],a:1}]},

{ua:`Ранок Тараса`,en:`Taras's morning`,g:`Reflexive verbs in -ся`,
gram:`<p>Adding <b>-ся</b> makes the action reflect back on the subject: <i>вмивати</i> (to wash someone) → <i>вмиватися</i> (to wash oneself).</p>
<div class="gt"><table><tr><th>прокидатися</th><th>to wake up</th></tr>
<tr><td>я</td><td>прокидаюся</td></tr><tr><td>ти</td><td>прокидаєшся</td></tr><tr><td>він / вона</td><td>прокидається</td></tr>
<tr><td>ми</td><td>прокидаємося</td></tr><tr><td>вони</td><td>прокидаються</td></tr></table></div>
<p>After a vowel, speech often shortens it to <b>-сь</b>: <i>прокидаюсь</i>. Some verbs only exist with -ся, like <i>подобатися</i> and <i>вчитися</i>.</p>
<p>Clock times: <b>о сьомій</b> = at seven, <b>о восьмій</b> = at eight.</p>`,
p:[[`Тарас прокидається о сьомій.`,`Taras wakes up at seven.`],[`Він вмивається і одягається.`,`He washes and gets dressed.`],[`Мурко теж прокидається. Він хоче їсти.`,`Murko wakes up too. He wants to eat.`],[`Тарас дає Муркові молоко.`,`Taras gives Murko milk.`],[`Потім Тарас снідає: хліб, яблуко і чай з молоком.`,`Then Taras has breakfast: bread, an apple and tea with milk.`],[`О восьмій він їде в університет. Там він вчиться.`,`At eight he goes to the university. He studies there.`],[`Увечері він повертається додому і відпочиває.`,`In the evening he comes home and rests.`]],
v:[[`прокид+атися`,`to wake up`],[`вмив+атися`,`to wash (face and hands)`],[`одяг+атися`,`to get dressed`],[`сн+ідати`,`to have breakfast`],[`вч+итися`,`to study: вч+уся, вч+иться`],[`поверт+атися`,`to return, come back`],[`+їсти`,`to eat: їм, їсть`],[`дав+ати`,`to give (habitually): да+ю, да+є`],[`о сьом+ій · о восьм+ій`,`at seven · at eight`]],
r:[`хотіти`,`молоко`,`хліб`,`яблуко`,`з + instr.`,`їхати`,`увечері`,`відпочивати`,`Муркові (dative)`],
q:[{q:`О котрій Тарас прокидається?`,o:[`О сьомій`,`О восьмій`,`Увечері`],a:0},{q:`Кому Тарас дає молоко?`,o:[`Олені`,`Мамі`,`Муркові`],a:2},{q:`він ___ (вчитися)`,o:[`вчить`,`вчиться`,`вчися`],a:1}]},

{ua:`Два міста`,en:`Two cities`,g:`Comparison`,
gram:`<p>Most adjectives compare with <b>-іший</b>: <i>гарний → гарніший, новий → новіший</i>.</p>
<div class="gt"><table><tr><th>adjective</th><th>comparative</th><th>superlative</th></tr>
<tr><td>великий</td><td>більший</td><td>найбільший</td></tr>
<tr><td>малий</td><td>менший</td><td>найменший</td></tr>
<tr><td>добрий</td><td>кращий</td><td>найкращий</td></tr>
<tr><td>старий</td><td>старіший (things), старший (people)</td><td>найстаріший</td></tr></table></div>
<p>“Than” is <b>ніж</b>: <i>Київ більший, ніж Львів</i>. The superlative adds <b>най-</b>.</p>
<p>“From” a place is <b>з / зі + genitive</b>: <i>з Києва, зі Львова</i>.</p>`,
p:[[`Олена з Києва, а Тарас зі Львова.`,`Olena is from Kyiv, and Taras is from Lviv.`],[`Київ більший, ніж Львів.`,`Kyiv is bigger than Lviv.`],[`Але Тарас каже, що Львів гарніший.`,`But Taras says that Lviv is more beautiful.`],[`«У Львові старіші вулиці і краща кава», — каже він.`,`“Lviv has older streets and better coffee,” he says.`],[`Олена не згодна.`,`Olena doesn't agree.`],[`«Київ — найкраще місто!» — каже вона.`,`“Kyiv is the best city!” she says.`],[`Мурко не знає, яке місто краще.`,`Murko doesn't know which city is better.`],[`Для нього найкраще місце — вдома, на столі.`,`For him the best place is at home, on the table.`]],
v:[[`К+иїв`,`Kyiv; з К+иєва`],[`з / зі`,`from (+ genitive)`],[`б+ільший`,`bigger`],[`гарн+іший`,`more beautiful`],[`стар+іший`,`older (of things)`],[`кр+ащий`,`better`],[`найкр+ащий`,`best`],[`ніж`,`than`],[`зг+одний · зг+одна`,`agreed (m · f)`],[`як+ий · як+а · як+е`,`which, what kind of`],[`м+ісце`,`place`],[`для`,`for (+ genitive)`]],
r:[`Львів`,`місто`,`вулиці`,`кава`,`казати`,`знати`,`вдома`,`на столі`],
q:[{q:`Яке місто більше?`,o:[`Львів`,`Київ`,`Вони однакові`],a:1},{q:`Що каже Тарас?`,o:[`Львів гарніший`,`Київ гарніший`,`Львів більший`],a:0},{q:`Яке місце найкраще для Мурка?`,o:[`Київ`,`Львів`,`Вдома, на столі`],a:2}]},

{ua:`Привіт, Тарасе!`,en:`Hi, Taras!`,g:`Vocative: calling someone by name`,
gram:`<p>When you speak <i>to</i> someone, the name changes. This is the vocative case, and Ukrainians use it all the time. <i>Олена, привіт!</i> sounds wrong; say <b>Олено, привіт!</b></p>
<div class="gt"><table><tr><th>type</th><th>nominative</th><th>vocative</th></tr>
<tr><td>masc. hard</td><td>Тарас, друг</td><td>Тарасе, друже</td></tr>
<tr><td>masc. in -ко, soft</td><td>Мурко, Андрій</td><td>Мурку, Андрію</td></tr>
<tr><td>feminine -а</td><td>Олена, мама</td><td>Олено, мамо</td></tr>
<tr><td>dad</td><td>тато</td><td>тату</td></tr></table></div>
<p>In the plural, the vocative is the same as the nominative: <i>Діти, привіт!</i></p>`,
p:[[`Тарас і Олена в кав'ярні.`,`Taras and Olena are in a café.`],[`«Тарасе, це моя сестра Оксана», — каже Олена.`,`“Taras, this is my sister Oksana,” says Olena.`],[`«Дуже приємно, Оксано!» — каже Тарас.`,`“Very nice to meet you, Oksana!” says Taras.`],[`«Мені теж приємно. Я з Києва», — каже Оксана.`,`“Nice to meet you too. I'm from Kyiv,” says Oksana.`],[`«Як справи, Олено?» — питає Тарас.`,`“How are things, Olena?” asks Taras.`],[`«Добре, дякую! А в тебе?»`,`“Good, thanks! And you?”`],[`«Теж добре», — каже він.`,`“Good too,” he says.`],[`Увечері Тарас каже вдома: «Мамо, тату, у Олени є сестра!»`,`In the evening at home Taras says: “Mum, Dad, Olena has a sister!”`],[`«Мурку, ти чуєш?» Але Мурко спить.`,`“Murko, do you hear?” But Murko is asleep.`]],
v:[[`кав'+ярня`,`café; у кав'+ярні`],[`сестр+а`,`sister`],[`брат`,`brother`],[`д+уже`,`very`],[`при+ємно`,`pleasant; Д+уже при+ємно = Pleased to meet you`],[`як спр+ави?`,`how are things?`],[`д+обре`,`well, fine, OK`],[`ч+ути`,`to hear: ч+ую, ч+уєш`]],
r:[`з Києва`,`дякувати`,`мама`,`тато`,`Мурко`,`увечері`,`у… є`,`спати`],
q:[{q:`Хто Оксана?`,o:[`Подруга Тараса`,`Сестра Олени`,`Вчителька`],a:1},{q:`Звідки Оксана?`,o:[`З Києва`,`Зі Львова`,`З Одеси`],a:0},{q:`Calling to Olena, you say…`,o:[`Олена!`,`Олені!`,`Олено!`],a:2}]},

{ua:`Покажи нам Львів!`,en:`Show us Lviv!`,g:`Imperative: commands and requests`,
gram:`<p>Take the <b>вони</b> form of the present and drop its ending. Then add:</p>
<div class="gt"><table><tr><th>infinitive</th><th>вони</th><th>ти</th><th>ви</th><th>let's</th></tr>
<tr><td>читати</td><td>чита-ють</td><td>читай</td><td>читайте</td><td>читаймо</td></tr>
<tr><td>говорити</td><td>говор-ять</td><td>говори</td><td>говоріть</td><td>говорімо</td></tr>
<tr><td>іти</td><td>ід-уть</td><td>іди</td><td>ідіть</td><td>ідімо</td></tr>
<tr><td>показати</td><td>покаж-уть</td><td>покажи</td><td>покажіть</td><td>покажімо</td></tr></table></div>
<p>After a vowel the ending is <b>-й</b>; after a consonant it is usually <b>-и</b>. <b>ви</b> adds <b>-те</b> (or -іть) for politeness or several people. Watch <i>пити → пий</i>, and <b>Ходімо!</b> = Let's go!</p>
<p><b>цей · ця · це · ці</b> = this / these. <i>цей торт</i> (m), <i>ця кава</i> (f).</p>`,
p:[[`«Тарасе, покажи нам Львів!» — просить Олена.`,`“Taras, show us Lviv!” asks Olena.`],[`«Добре. Ходімо!» — каже Тарас.`,`“OK. Let's go!” says Taras.`],[`«Дивіться, це Ратуша», — каже він.`,`“Look, this is the Town Hall,” he says.`],[`«А тепер ідіть сюди. Тут найкраща кава у Львові.»`,`“And now come this way. The best coffee in Lviv is here.”`],[`Вони сидять у кав'ярні.`,`They sit in a café.`],[`«Оксано, спробуй цей торт!»`,`“Oksana, try this cake!”`],[`«Дуже смачно!» — каже Оксана.`,`“Very tasty!” says Oksana.`],[`«Не поспішай», — каже Олена сестрі. «Пий каву і дивися на місто.»`,`“Don't rush,” Olena tells her sister. “Drink your coffee and look at the city.”`]],
v:[[`показ+ати`,`to show: покаж+у, пок+аже`],[`прос+ити`,`to ask (for): прош+у, пр+осить`],[`ход+імо!`,`let's go!`],[`див+итися`,`to look: дивл+юся, д+ивиться`],[`Р+атуша`,`town hall`],[`теп+ер`,`now`],[`сюд+и`,`here (towards here)`],[`спр+обувати`,`to try`],[`цей · ц+я · це`,`this (m · f · n)`],[`торт`,`cake`],[`см+ачно`,`tasty`],[`поспіш+ати`,`to hurry`]],
r:[`найкращий`,`кава`,`кав'ярня`,`сестра`,`сидіти`,`пити`,`місто`,`Оксано (vocative)`],
q:[{q:`Що просить Олена?`,o:[`Купи торт`,`Покажи нам Львів`,`Іди додому`],a:1},{q:`Imperative of читати for ви:`,o:[`читайте`,`читаєте`,`читай`],a:0},{q:`Що Олена каже сестрі?`,o:[`Поспішай`,`Іди сюди`,`Пий каву`],a:2}]},

{ua:`Багато музеїв`,en:`Lots of museums`,g:`Quantity and the genitive plural`,
gram:`<p><b>багато</b> (many, much), <b>мало</b> (few, little), <b>кілька</b> (a few) and <b>скільки</b> (how many) take the genitive: plural for things you count, singular for things you don't.</p>
<div class="gt"><table><tr><th>type</th><th>genitive plural</th><th>example</th></tr>
<tr><td>masculine</td><td>-ів / -їв</td><td>парк → парків, музей → музеїв, день → днів</td></tr>
<tr><td>feminine, neuter</td><td>no ending</td><td>церква → церков, яблуко → яблук</td></tr>
<tr><td>a vowel slips in</td><td>-ок, -ень</td><td>книжка → книжок, кав'ярня → кав'ярень</td></tr>
<tr><td>irregular</td><td></td><td>люди → людей</td></tr></table></div>
<p>Uncountable: <i>багато часу, мало молока</i> (genitive singular).</p>`,
p:[[`У Львові багато кав'ярень.`,`There are lots of cafés in Lviv.`],[`Тут також багато церков, музеїв і парків.`,`There are also lots of churches, museums and parks.`],[`Оксана хоче побачити все.`,`Oksana wants to see everything.`],[`Але в неї мало часу: тільки кілька днів.`,`But she has little time: only a few days.`],[`Сьогодні вони бачили три церкви і два музеї.`,`Today they saw three churches and two museums.`],[`Скрізь було дуже багато людей.`,`There were a great many people everywhere.`],[`«Скільки тут туристів!» — каже Оксана.`,`“So many tourists here!” says Oksana.`],[`Увечері вона дуже втомилася.`,`By the evening she was very tired.`]],
v:[[`баг+ато`,`many, much (+ gen.)`],[`м+ало`,`few, little (+ gen.)`],[`к+ілька`,`a few, several (+ gen. pl.)`],[`ц+ерква`,`church; gen. pl. ц+ерков`],[`муз+ей`,`museum`],[`час`,`time; м+ало ч+асу`],[`т+ільки`,`only`],[`ск+різь`,`everywhere`],[`все`,`everything`],[`л+юди`,`people; gen. pl. люд+ей`],[`тур+ист`,`tourist`],[`поб+ачити`,`to see (pf.)`],[`втом+итися`,`to get tired (pf.)`]],
r:[`кав'ярня`,`парк`,`хотіти`,`скільки`,`два / три`,`увечері`,`дуже`],
q:[{q:`Скільки часу в Оксани?`,o:[`Багато`,`Мало`],a:1},{q:`Що вони бачили сьогодні?`,o:[`Три церкви і два музеї`,`П'ять парків`,`Один музей`],a:0},{q:`“many students” is…`,o:[`багато студенти`,`багато студентам`,`багато студентів`],a:2}]},

{ua:`Після сніданку`,en:`After breakfast`,g:`Prepositions with the genitive`,
gram:`<p>Many common prepositions always take the genitive.</p>
<div class="gt"><table><tr><th>preposition</th><th>meaning</th><th>example</th></tr>
<tr><td>до</td><td>to (someone's), until</td><td>до Тараса, до обіду</td></tr>
<tr><td>після</td><td>after</td><td>після сніданку</td></tr>
<tr><td>без</td><td>without</td><td>без цукру</td></tr>
<tr><td>біля</td><td>near, by</td><td>біля парку</td></tr>
<tr><td>від</td><td>from (a person)</td><td>від мами</td></tr>
<tr><td>для</td><td>for</td><td>для Оксани</td></tr></table></div>
<p><b>до Тараса</b> means “to Taras's place”. You never need a word for “house”.</p>`,
p:[[`Після сніданку Оксана і Олена ідуть до Тараса.`,`After breakfast Oksana and Olena go to Taras's.`],[`Тарас живе біля парку.`,`Taras lives near the park.`],[`Його мама готує каву без цукру для Оксани.`,`His mum makes coffee without sugar for Oksana.`],[`«Це від нас», — каже мама і дає Оксані книжку про Львів.`,`“This is from us,” says Mum, and gives Oksana a book about Lviv.`],[`Вони розмовляють до обіду.`,`They talk until lunch.`],[`Після обіду всі ідуть до центру міста.`,`After lunch everyone goes to the city centre.`],[`Мурко залишається вдома без Тараса.`,`Murko stays at home without Taras.`],[`Він не сумує: він спить.`,`He isn't sad: he's asleep.`]],
v:[[`п+ісля`,`after (+ gen.)`],[`до`,`to (someone's), until (+ gen.)`],[`без`,`without (+ gen.)`],[`б+іля`,`near (+ gen.)`],[`від`,`from (+ gen.)`],[`сн+іданок`,`breakfast; п+ісля сн+іданку`],[`ж+ити`,`to live: жив+у, жив+е`],[`центр`,`centre`],[`залиш+атися`,`to stay, remain`],[`сумув+ати`,`to be sad, to miss`]],
r:[`для`,`цукор`,`обід`,`готувати`,`розмовляти`,`давати`,`про`,`вдома`],
q:[{q:`Де живе Тарас?`,o:[`Біля школи`,`Біля парку`,`У центрі`],a:1},{q:`Яку каву готує мама?`,o:[`Без цукру`,`З цукром`,`З молоком`],a:0},{q:`Що робить Мурко?`,o:[`Сумує`,`Іде в центр`,`Спить`],a:2}]},

{ua:`Трамваєм на роботу`,en:`To work by tram`,g:`More uses of the instrumental`,
gram:`<p>The instrumental (from lesson 14) also works without any preposition:</p>
<div class="gt"><table><tr><th>use</th><th>example</th><th>meaning</th></tr>
<tr><td>transport</td><td>їхати трамваєм, поїздом</td><td>by tram, by train</td></tr>
<tr><td>job or role</td><td>працює лікаркою</td><td>works as a doctor</td></tr>
<tr><td>becoming</td><td>хоче стати вчителем</td><td>wants to become a teacher</td></tr>
<tr><td>tool</td><td>писати ручкою</td><td>to write with a pen</td></tr></table></div>
<p><i>на машині</i> and <i>машиною</i> both mean “by car”.</p>`,
p:[[`Мама Тараса працює лікаркою.`,`Taras's mum works as a doctor.`],[`Щодня вона їде на роботу трамваєм.`,`Every day she goes to work by tram.`],[`Тато їде машиною.`,`Dad goes by car.`],[`А Тарас ходить пішки: університет близько.`,`And Taras walks: the university is close.`],[`Він хоче стати вчителем, як Олена.`,`He wants to become a teacher, like Olena.`],[`Оксана працює журналісткою в Києві.`,`Oksana works as a journalist in Kyiv.`],[`Вона пише статті ручкою, а не на комп'ютері.`,`She writes articles with a pen, not on a computer.`],[`«Так краще думати», — каже вона.`,`“It's easier to think that way,” she says.`],[`Завтра вона поїде додому поїздом.`,`Tomorrow she will go home by train.`]],
v:[[`трамв+ай`,`tram; трамв+аєм`],[`по+їзд`,`train; по+їздом`],[`авт+обус`,`bus`],[`щодн+я`,`every day`],[`п+ішки`,`on foot`],[`бл+изько`,`near, close by`],[`ст+ати`,`to become (+ instr.)`],[`журнал+істка`,`journalist (f)`],[`статт+я`,`article; pl. статт+і`],[`р+учка`,`pen`],[`комп'+ютер`,`computer`],[`д+умати`,`to think`]],
r:[`працювати`,`лікарка`,`вчитель`,`писати`,`краще`,`завтра`,`ходити`],
q:[{q:`Як мама Тараса їде на роботу?`,o:[`Пішки`,`Трамваєм`,`Поїздом`],a:1},{q:`Ким хоче стати Тарас?`,o:[`Лікарем`,`Журналістом`,`Вчителем`],a:2},{q:`Ким працює Оксана?`,o:[`Журналісткою`,`Лікаркою`,`Вчителькою`],a:0}]},

{ua:`Щопонеділка`,en:`Every Monday`,g:`Going now vs going regularly`,
gram:`<p>Each “go” verb has a partner. One is for a single trip in one direction, happening now. The other is for habits and round trips.</p>
<div class="gt"><table><tr><th></th><th>one trip, now</th><th>habit, round trips</th></tr>
<tr><td>on foot</td><td>іти: іду, іде</td><td>ходити: ходжу, ходить</td></tr>
<tr><td>by transport</td><td>їхати: їду, їде</td><td>їздити: їжджу, їздить</td></tr></table></div>
<p><i>Сьогодні я іду в парк</i> (I'm on my way to the park). <i>Я часто ходжу в парк</i> (I often go to the park).</p>
<p>The past of the habit verb says “have been”: <i>я не був у Києві</i> or <i>я не їздив у Київ</i>.</p>`,
p:[[`Щопонеділка Олена ходить у басейн.`,`Every Monday Olena goes to the pool.`],[`Але сьогодні вона іде на вокзал.`,`But today she is walking to the station.`],[`Оксана їде додому, до Києва.`,`Oksana is going home, to Kyiv.`],[`Вона часто їздить до Львова: чотири рази на рік.`,`She often comes to Lviv: four times a year.`],[`«Ти теж часто їздиш у Київ?» — питає вона Тараса.`,`“Do you often go to Kyiv too?” she asks Taras.`],[`«Ні, я ніколи не був у Києві», — каже Тарас.`,`“No, I've never been to Kyiv,” says Taras.`],[`«Тоді приїжджай!»`,`“Then come and visit!”`],[`Поїзд іде о другій.`,`The train leaves at two.`],[`Олена і Тарас ідуть додому пішки.`,`Olena and Taras walk home.`]],
v:[[`ход+ити`,`to go on foot (regularly): ходж+у`],[`+їздити`,`to travel (regularly): +їжджу, +їздить`],[`щопон+еділка`,`every Monday`],[`бас+ейн`,`swimming pool`],[`вокз+ал`,`station`],[`ч+асто`,`often`],[`раз`,`time, occasion; чот+ири р+ази на рік`],[`рік`,`year`],[`нік+оли`,`never (with не)`],[`тод+і`,`then, in that case`],[`приїждж+ай!`,`come (and visit)!`]],
r:[`іти`,`їхати`,`додому`,`пішки`,`поїзд`,`чотири`,`о… (time)`,`питати`],
q:[{q:`Куди Олена ходить щопонеділка?`,o:[`У басейн`,`На вокзал`,`У школу`],a:0},{q:`Скільки разів на рік Оксана їздить до Львова?`,o:[`Два`,`Чотири`,`Сім`],a:1},{q:`Тарас був у Києві?`,o:[`Так, часто`,`Так, один раз`,`Ні, ніколи`],a:2}]},

{ua:`Оксана приїхала`,en:`Oksana has arrived`,g:`Prefixed verbs of motion`,
gram:`<p>A prefix on a “go” verb adds direction and makes it perfective: one completed trip.</p>
<div class="gt"><table><tr><th>prefix</th><th>meaning</th><th>on foot</th><th>by transport</th></tr>
<tr><td>при-</td><td>arrive</td><td>прийти</td><td>приїхати</td></tr>
<tr><td>по-</td><td>set off</td><td>піти</td><td>поїхати</td></tr>
<tr><td>ви-</td><td>go out, leave</td><td>вийти</td><td>виїхати</td></tr>
<tr><td>за-</td><td>drop in</td><td>зайти</td><td>заїхати</td></tr></table></div>
<p>The past of <i>-йти</i> verbs is irregular: <b>прийшов, прийшла · пішов, пішла</b>. As perfectives, their present-looking form is future: <i>Я прийду завтра</i> = I'll come tomorrow.</p>`,
p:[[`Оксана приїхала в Київ увечері.`,`Oksana arrived in Kyiv in the evening.`],[`Поїзд виїхав зі Львова о другій.`,`The train left Lviv at two.`],[`На вокзалі її чекав брат Андрій.`,`Her brother Andriy was waiting for her at the station.`],[`Вони поїхали додому на таксі.`,`They went home by taxi.`],[`Вдома Оксана подзвонила Олені.`,`At home Oksana phoned Olena.`],[`«Я приїхала! Усе добре», — каже вона.`,`“I've arrived! Everything's fine,” she says.`],[`А у Львові Тарас прийшов до Олени.`,`Meanwhile in Lviv Taras came round to Olena's.`],[`Вони трохи посиділи і пішли гуляти.`,`They sat for a bit and went for a walk.`],[`«Зайдімо в кав'ярню?» — пропонує Олена.`,`“Shall we drop into a café?” Olena suggests.`]],
v:[[`при+їхати`,`to arrive (by transport): при+їду`],[`прийт+и`,`to arrive, come (on foot): past прийш+ов, прийшл+а`],[`піт+и`,`to set off, leave: past піш+ов, пішл+а`],[`по+їхати`,`to set off (by transport)`],[`в+иїхати`,`to leave, drive out`],[`зайт+и`,`to drop in`],[`чек+ати`,`to wait (for)`],[`такс+і`,`taxi (never changes)`],[`тр+охи`,`a little, a bit`],[`пропонув+ати`,`to suggest, offer`]],
r:[`вокзал`,`брат`,`зі Львова`,`подзвонити (pf. of дзвонити)`,`до Олени`,`кав'ярня`,`гуляти`],
q:[{q:`Хто чекав Оксану на вокзалі?`,o:[`Олена`,`Андрій`,`Тарас`],a:1},{q:`Як вони поїхали додому?`,o:[`На таксі`,`Трамваєм`,`Пішки`],a:0},{q:`Що пропонує Олена?`,o:[`Поїхати в Київ`,`Піти додому`,`Зайти в кав'ярню`],a:2}]},

{ua:`Іспит`,en:`The exam`,g:`Can, must, may, need`,
gram:`<div class="gt"><table><tr><th>word</th><th>meaning</th><th>example</th></tr>
<tr><td>могти</td><td>can, be able</td><td>Я можу прийти.</td></tr>
<tr><td>вміти</td><td>know how to</td><td>Я вмію плавати.</td></tr>
<tr><td>можна</td><td>it's allowed, may</td><td>Можна сісти?</td></tr>
<tr><td>треба</td><td>it's necessary</td><td>Мені треба вчитися.</td></tr>
<tr><td>мусити</td><td>must</td><td>Ти мусиш писати.</td></tr></table></div>
<p><b>могти</b>: <i>можу, можеш, може, можемо, можете, можуть</i>. <b>мусити</b>: <i>мушу, мусиш, мусить</i>.</p>
<p><b>треба</b> and <b>можна</b> never change. The person goes in the dative: <i>Тарасові треба</i>. After all of them, use the infinitive.</p>`,
p:[[`У Тараса скоро іспит.`,`Taras has an exam soon.`],[`Йому треба багато вчитися.`,`He needs to study a lot.`],[`«Можна, я буду вчитися у тебе?» — питає він Олену.`,`“Can I study at your place?” he asks Olena.`],[`«Звичайно, можна», — каже вона.`,`“Of course you can,” she says.`],[`Тарас добре вміє читати англійською, але погано пише.`,`Taras reads English well but writes it badly.`],[`«Я не можу писати без помилок», — каже він.`,`“I can't write without mistakes,” he says.`],[`«Ти мусиш писати щодня», — каже Олена.`,`“You must write every day,” says Olena.`],[`«Тоді я все зможу!»`,`“Then I'll be able to do anything!”`],[`А Мурко нічого не мусить робити.`,`And Murko doesn't have to do anything.`]],
v:[[`ск+оро`,`soon`],[`+іспит`,`exam`],[`тр+еба`,`it's necessary (+ dat.)`],[`м+ожна`,`it's allowed, one may`],[`могт+и`,`can: м+ожу, м+оже`],[`зм+огти`,`to manage, be able (pf.): зм+ожу`],[`м+усити`,`must: м+ушу, м+усить`],[`вм+іти`,`to know how to: вм+ію`],[`звич+айно`,`of course`],[`пог+ано`,`badly`],[`пом+илка`,`mistake; без пом+илок`],[`ніч+ого`,`nothing (with не)`]],
r:[`вчитися`,`англійською`,`писати`,`щодня`,`тоді`,`без`,`у тебе`,`добре`],
q:[{q:`Що треба Тарасові?`,o:[`Багато спати`,`Багато вчитися`,`Поїхати в Київ`],a:1},{q:`“I know how to swim”:`,o:[`Я вмію плавати`,`Мені можна плавати`,`Мені треба плавати`],a:0},{q:`Що Тарас робить погано?`,o:[`Читає англійською`,`Говорить українською`,`Пише англійською`],a:2}]},

{ua:`Свій кіт`,en:`A cat of one's own`,g:`свій and себе`,
gram:`<p><b>свій</b> means “one's own” and points back to the subject of the sentence. It declines like <i>мій</i>: <i>свій, своя, своє, свої</i>.</p>
<div class="gt"><table><tr><th>sentence</th><th>meaning</th></tr>
<tr><td>Тарас любить свого кота.</td><td>Taras loves his (own) cat.</td></tr>
<tr><td>Тарас любить його кота.</td><td>Taras loves his (another man's) cat.</td></tr></table></div>
<p><b>себе</b> = oneself. It has no nominative form: <i>себе</i> (acc./gen.), <i>собі</i> (dat./loc.), <i>собою</i> (instr.). It works for every person: <i>я купила собі, він любить себе</i>. <b>з собою</b> = with oneself.</p>`,
p:[[`Тарас дуже любить свого кота.`,`Taras loves his cat very much.`],[`Олена теж любить Мурка, але свого кота в неї немає.`,`Olena loves Murko too, but she has no cat of her own.`],[`Одного дня вона приходить до Тараса з подарунком.`,`One day she comes to Taras's with a present.`],[`«Це для тебе і для Мурка», — каже вона.`,`“This is for you and for Murko,” she says.`],[`«А що ти купила собі?» — питає Тарас.`,`“And what did you buy yourself?” asks Taras.`],[`«Собі я купила нову книжку.»`,`“For myself I bought a new book.”`],[`Олена завжди носить книжку з собою.`,`Olena always carries a book with her.`],[`А Мурко дивиться на себе в дзеркало.`,`And Murko looks at himself in the mirror.`],[`Він дуже любить себе.`,`He loves himself very much.`]],
v:[[`свій · сво+я · сво+є · сво+ї`,`one's own`],[`себ+е`,`oneself (acc. / gen.)`],[`соб+і`,`(to / for) oneself`],[`з соб+ою`,`with oneself`],[`завжд+и`,`always`],[`нос+ити`,`to carry (regularly): нош+у, н+осить`],[`прих+одити`,`to come (regularly): прих+оджу`],[`дз+еркало`,`mirror`],[`одн+ого дня`,`one day`]],
r:[`подарунок`,`купити`,`нова книжка`,`дивитися`,`для`,`у неї немає`,`Мурка (acc.)`],
q:[{q:`Чи є в Олени свій кіт?`,o:[`Так`,`Ні`],a:1},{q:`Що Олена купила собі?`,o:[`Нову книжку`,`Каву`,`Дзеркало`],a:0},{q:`“Taras loves his (own) mum”:`,o:[`Тарас любить його маму`,`Тарас любить їй маму`,`Тарас любить свою маму`],a:2}]},

{ua:`Урок у школі`,en:`A lesson at school`,g:`Plural: dative, locative, instrumental`,
gram:`<p>In the plural these three cases have one set of endings for all genders.</p>
<div class="gt"><table><tr><th>case</th><th>ending</th><th>examples</th></tr>
<tr><td>dative</td><td>-ам / -ям</td><td>студентам, колегам, друзям</td></tr>
<tr><td>locative</td><td>-ах / -ях</td><td>у містах, на вулицях</td></tr>
<tr><td>instrumental</td><td>-ами / -ями</td><td>з колегами, за партами</td></tr></table></div>
<p>Two common irregulars: <b>діти</b> → <i>дітям, у дітях, з дітьми</i>; <b>люди</b> → <i>людям, у людях, з людьми</i>. <b>друг</b> has the plural <b>друзі</b>.</p>`,
p:[[`Олена працює в школі. Вона дає уроки дітям.`,`Olena works at a school. She teaches children.`],[`Діти сидять за партами.`,`The children sit at their desks.`],[`Вона розповідає їм про міста України.`,`She tells them about the cities of Ukraine.`],[`«У яких містах ви були?» — питає вона.`,`“Which cities have you been to?” she asks.`],[`Одні діти були в Києві, інші — в Одесі.`,`Some children had been to Kyiv, others to Odesa.`],[`Після уроків Олена іде додому з колегами.`,`After lessons Olena goes home with colleagues.`],[`Вони говорять про своїх учнів.`,`They talk about their pupils.`],[`Увечері Олена пише листи друзям.`,`In the evening Olena writes letters to friends.`]],
v:[[`дит+ина`,`child; д+іти children`],[`ур+ок`,`lesson`],[`п+арта`,`school desk`],[`розповід+ати`,`to tell (about)`],[`одн+і · +інші`,`some · others`],[`кол+ега`,`colleague`],[`+учень`,`pupil; pl. +учні`],[`др+узі`,`friends (pl. of друг)`],[`Укра+їна`,`Ukraine`],[`Од+еса`,`Odesa`]],
r:[`школа`,`давати`,`сидіти`,`про`,`після`,`свій`,`лист`,`Київ`],
q:[{q:`Кому Олена дає уроки?`,o:[`Студентам`,`Колегам`,`Дітям`],a:2},{q:`З ким Олена іде додому?`,o:[`З колегами`,`З дітьми`,`З Тарасом`],a:0},{q:`“in the cities” is…`,o:[`у містам`,`у містах`,`у містами`],a:1}]},

{ua:`Восени`,en:`In autumn`,g:`Days, months and seasons`,
gram:`<p><b>Days</b>: <i>у / в</i> + accusative. <i>у понеділок, у вівторок, у середу, у четвер, у п'ятницю, у суботу, у неділю</i>.</p>
<p><b>Months</b>: <i>у / в</i> + locative.</p>
<div class="gt"><table><tr><th>month</th><th>in…</th><th>month</th><th>in…</th></tr>
<tr><td>січень</td><td>у січні</td><td>липень</td><td>у липні</td></tr>
<tr><td>лютий</td><td>у лютому</td><td>серпень</td><td>у серпні</td></tr>
<tr><td>березень</td><td>у березні</td><td>вересень</td><td>у вересні</td></tr>
<tr><td>квітень</td><td>у квітні</td><td>жовтень</td><td>у жовтні</td></tr>
<tr><td>травень</td><td>у травні</td><td>листопад</td><td>у листопаді</td></tr>
<tr><td>червень</td><td>у червні</td><td>грудень</td><td>у грудні</td></tr></table></div>
<p><b>Seasons</b> have one-word adverbs: <i>взимку, навесні, влітку, восени</i>.</p>`,
p:[[`Зараз жовтень. Восени у Львові часто йде дощ.`,`It's October now. In autumn it often rains in Lviv.`],[`У листопаді Тарас буде писати іспит.`,`In November Taras will sit his exam.`],[`А в грудні він хоче поїхати в Київ.`,`And in December he wants to go to Kyiv.`],[`Оксана запрошує його і Олену на Новий рік.`,`Oksana invites him and Olena for New Year.`],[`«Взимку Київ дуже гарний», — пише вона.`,`“Kyiv is very beautiful in winter,” she writes.`],[`«Ми поїдемо в п'ятницю», — каже Олена.`,`“We'll go on Friday,” says Olena.`],[`«А повернемося в неділю», — каже Тарас.`,`“And we'll come back on Sunday,” says Taras.`],[`Мурко залишиться з мамою і татом.`,`Murko will stay with Mum and Dad.`],[`Він не любить подорожувати.`,`He doesn't like travelling.`]],
v:[[`з+араз`,`now, right now`],[`+осінь · вос+ени`,`autumn · in autumn`],[`зим+а · вз+имку`,`winter · in winter`],[`весн+а · навесн+і`,`spring · in spring`],[`л+іто · вл+ітку`,`summer · in summer`],[`дощ`,`rain; йде дощ = it's raining`],[`ж+овтень`,`October`],[`листоп+ад`,`November; у листоп+аді`],[`гр+удень`,`December; у гр+удні`],[`запр+ошувати`,`to invite`],[`Нов+ий рік`,`New Year`],[`у п'+ятницю`,`on Friday`],[`поверн+утися`,`to return (pf.): поверн+уся`],[`подорожув+ати`,`to travel`]],
r:[`іспит`,`поїхати`,`Київ`,`неділя`,`залишатися`,`з мамою і татом`,`часто`],
q:[{q:`Коли Тарас буде писати іспит?`,o:[`У грудні`,`У листопаді`,`У жовтні`],a:1},{q:`Куди вони поїдуть на Новий рік?`,o:[`В Одесу`,`До Львова`,`У Київ`],a:2},{q:`Хто залишиться вдома?`,o:[`Мурко`,`Олена`,`Тарас`],a:0}]},

{ua:`Котра година?`,en:`What time is it?`,g:`Ordinal numbers and clock time`,
gram:`<div class="gt"><table><tr><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th></tr>
<tr><td>перший</td><td>другий</td><td>третій</td><td>четвертий</td><td>п'ятий</td><td>шостий</td><td>сьомий</td><td>восьмий</td></tr></table></div>
<p>Ordinals are adjectives and agree with their noun: <i>перший вагон, перша година, перше місце</i>.</p>
<p>Time uses feminine forms because <b>година</b> (hour) is feminine:</p>
<div class="gt"><table><tr><th>question</th><th>answer</th></tr>
<tr><td>Котра година?</td><td>Друга (година). = It's two.</td></tr>
<tr><td>О котрій?</td><td>О третій. = At three.</td></tr>
<tr><td>7:30</td><td>пів на восьму (half towards eight)</td></tr></table></div>`,
p:[[`Сьогодні п'ятниця. Тарас прокинувся о шостій.`,`It's Friday. Taras woke up at six.`],[`Поїзд до Києва іде о восьмій.`,`The train to Kyiv leaves at eight.`],[`Їхній вагон — третій, а місця — двадцять перше і двадцять друге.`,`Their carriage is number three, and their seats are twenty-one and twenty-two.`],[`«Котра година?» — питає Олена на вокзалі.`,`“What time is it?” Olena asks at the station.`],[`«Пів на восьму», — каже Тарас. «У нас ще пів години.»`,`“Half past seven,” says Taras. “We still have half an hour.”`],[`Поїзд їде п'ять годин.`,`The journey takes five hours.`],[`О першій вони вже в Києві.`,`At one o'clock they are already in Kyiv.`],[`Це перша поїздка Тараса до Києва.`,`It's Taras's first trip to Kyiv.`]],
v:[[`п+ерший · др+угий · тр+етій`,`first · second · third`],[`ш+остий · восьм+ий`,`sixth · eighth`],[`год+ина`,`hour, o'clock; п'ять год+ин`],[`котр+а год+ина?`,`what time is it?`],[`о котр+ій?`,`at what time?`],[`пів`,`half; пів на восьм+у = 7:30`],[`ваг+он`,`(train) carriage`],[`м+ісце`,`seat, place`],[`+їхній`,`their`],[`вже`,`already`],[`по+їздка`,`trip, journey`],[`прок+инутися`,`to wake up (pf.)`]],
r:[`п'ятниця`,`поїзд`,`вокзал`,`ще`,`п'ять`,`о шостій / о восьмій`,`Київ`],
q:[{q:`О котрій іде поїзд?`,o:[`О шостій`,`О восьмій`,`О першій`],a:1},{q:`Скільки годин їде поїзд?`,o:[`П'ять`,`Вісім`,`Дві`],a:0},{q:`“at three o'clock” is…`,o:[`о трьох`,`в три`,`о третій`],a:2}]},

{ua:`Мені холодно`,en:`I'm cold`,g:`Feelings, states and aches`,
gram:`<p>Ukrainian puts the person in the <b>dative</b> and the feeling in an adverb ending in -о:</p>
<div class="gt"><table><tr><th>Ukrainian</th><th>English</th></tr>
<tr><td>Мені холодно.</td><td>I'm cold.</td></tr>
<tr><td>Тобі тепло?</td><td>Are you warm?</td></tr>
<tr><td>Йому погано / краще.</td><td>He feels unwell / better.</td></tr>
<tr><td>Нам весело.</td><td>We're having fun.</td></tr></table></div>
<p><i>Я холодний</i> would mean “I'm a cold person”.</p>
<p>Aches use <b>у мене болить</b> + the body part: <i>у мене болить голова</i>; plural <i>у мене болять ноги</i>.</p>`,
p:[[`У Києві дуже холодно.`,`It's very cold in Kyiv.`],[`Тарас не взяв шапку. Йому холодно.`,`Taras didn't bring a hat. He's cold.`],[`Наступного ранку йому погано.`,`The next morning he feels unwell.`],[`«У мене болить горло. І голова теж», — каже він.`,`“My throat hurts. And my head too,” he says.`],[`Оксана дає йому чай з медом і лимоном.`,`Oksana gives him tea with honey and lemon.`],[`«Тобі треба лежати», — каже Олена.`,`“You need to lie down,” says Olena.`],[`Увечері йому вже краще.`,`By the evening he's already better.`],[`«Мені добре з вами», — каже він.`,`“I feel good with you,” he says.`]],
v:[[`х+олодно`,`cold (мені х+олодно = I'm cold)`],[`т+епло`,`warm`],[`в+есело`,`fun, cheerful`],[`вз+яти`,`to take (pf.): візьм+у; past взяв`],[`ш+апка`,`hat`],[`наст+упного р+анку`,`the next morning`],[`бол+іти`,`to hurt: у мене бол+ить`],[`голов+а`,`head`],[`г+орло`,`throat`],[`мед`,`honey`],[`лим+он`,`lemon`],[`леж+ати`,`to lie (down): леж+у`],[`кр+аще`,`better`]],
r:[`погано`,`треба`,`чай з…`,`давати`,`увечері`,`вже`,`з вами`],
q:[{q:`Що болить у Тараса?`,o:[`Нога`,`Горло і голова`,`Нічого`],a:1},{q:`Що дає йому Оксана?`,o:[`Чай з медом і лимоном`,`Каву з цукром`,`Гарячий шоколад`],a:0},{q:`“I'm cold” is…`,o:[`Я холодний`,`Мене холодно`,`Мені холодно`],a:2}]},

{ua:`З Новим роком!`,en:`Happy New Year!`,g:`Joining ideas: бо, тому, коли, якщо`,
gram:`<div class="gt"><table><tr><th>word</th><th>meaning</th><th>example</th></tr>
<tr><td>бо, тому що</td><td>because</td><td>Вона рада, бо любить сніг.</td></tr>
<tr><td>тому</td><td>so, therefore</td><td>Він здоровий, тому ми ідемо.</td></tr>
<tr><td>коли</td><td>when</td><td>Коли ми виходимо, йде сніг.</td></tr>
<tr><td>якщо</td><td>if (real)</td><td>Якщо буде холодно, ми зайдемо.</td></tr></table></div>
<p>After <b>якщо</b> and <b>коли</b>, use the future for future events, as in <i>якщо буде холодно</i>. English uses the present here (“if it is cold”).</p>
<p>Dates: <i>тридцять перше грудня</i> = 31 December (neuter ordinal + month in the genitive).</p>`,
p:[[`Сьогодні тридцять перше грудня.`,`Today is the thirty-first of December.`],[`Тарас уже здоровий, тому всі ідуть у центр.`,`Taras is well again, so everyone goes to the centre.`],[`Коли вони виходять, на вулиці йде сніг.`,`When they go out, it's snowing.`],[`Олена рада, бо вона любить сніг.`,`Olena is glad, because she loves snow.`],[`«Якщо буде холодно, ми зайдемо в кафе», — каже Оксана.`,`“If it gets cold, we'll drop into a café,” says Oksana.`],[`На площі стоїть велика ялинка.`,`A big New Year tree stands in the square.`],[`Тарас фотографує ялинку, тому що хоче показати її мамі.`,`Taras photographs the tree because he wants to show it to his mum.`],[`О дванадцятій усі кажуть: «З Новим роком!»`,`At twelve o'clock everyone says: “Happy New Year!”`]],
v:[[`бо · том+у що`,`because`],[`том+у`,`so, therefore`],[`кол+и`,`when`],[`якщ+о`,`if`],[`здор+овий`,`healthy, well`],[`вих+одити`,`to go out`],[`сніг`,`snow; йде сніг = it's snowing`],[`р+адий · р+ада`,`glad (m · f)`],[`каф+е`,`café (never changes)`],[`пл+оща`,`square; на пл+ощі`],[`сто+яти`,`to stand: сто+ю, сто+їть`],[`ял+инка`,`New Year tree, fir tree`],[`фотографув+ати`,`to photograph`],[`З Нов+им р+оком!`,`Happy New Year!`]],
r:[`грудень`,`центр`,`зайти`,`холодно`,`показати`,`велика`,`о… (time)`,`казати`],
q:[{q:`Чому Олена рада?`,o:[`Бо вона любить сніг`,`Бо їй холодно`,`Бо вона в кафе`],a:0},{q:`Що стоїть на площі?`,o:[`Машина`,`Кафе`,`Ялинка`],a:2},{q:`Which word means “if”?`,o:[`коли`,`якщо`,`тому`],a:1}]},

{ua:`Фото з Києва`,en:`Photos from Kyiv`,g:`Relative clauses with який`,
gram:`<p><b>який · яка · яке · які</b> joins a description to a noun (“which”, “who”, “that”). It takes its gender and number from the noun and its case from its job in the new clause.</p>
<div class="gt"><table><tr><th>noun</th><th>relative</th><th>why</th></tr>
<tr><td>ялинка (f)</td><td>…ялинка, <b>яка</b> стоїть на площі</td><td>subject: nominative</td></tr>
<tr><td>фото (pl.)</td><td>…фото, <b>які</b> він зробив</td><td>object: accusative = nominative here</td></tr>
<tr><td>книжка (f)</td><td>…книжка, <b>яку</b> я читаю</td><td>object: accusative</td></tr>
<tr><td>кафе (n)</td><td>…кафе, <b>в якому</b> ми пили</td><td>place: locative</td></tr></table></div>
<p>A comma always comes before <i>який</i>.</p>`,
p:[[`Тарас повернувся до Львова.`,`Taras came back to Lviv.`],[`Він показує мамі фото, які зробив у Києві.`,`He shows Mum the photos he took in Kyiv.`],[`«Це ялинка, яка стоїть на площі», — каже він.`,`“This is the tree that stands in the square,” he says.`],[`«А це кафе, в якому ми пили гарячий шоколад.»`,`“And this is the café where we drank hot chocolate.”`],[`«А хто ця дівчина?» — питає мама.`,`“And who is this girl?” asks Mum.`],[`«Це Оксана, сестра Олени. Вона живе в Києві.»`,`“That's Oksana, Olena's sister. She lives in Kyiv.”`],[`Мама дивиться на фото, на якому Тарас і Олена стоять разом.`,`Mum looks at the photo in which Taras and Olena are standing together.`],[`Вона посміхається, але нічого не каже.`,`She smiles but says nothing.`]],
v:[[`як+ий · як+а · як+е · як+і`,`which, who, that`],[`ф+ото`,`photo (never changes)`],[`поверн+увся · поверн+улася`,`(he · she) came back`],[`гар+ячий`,`hot`],[`шокол+ад`,`chocolate`],[`д+івчина`,`girl`],[`посміх+атися`,`to smile`]],
r:[`показати`,`зробити`,`ялинка`,`площа`,`кафе`,`жити`,`разом`,`нічого не`],
q:[{q:`Що Тарас показує мамі?`,o:[`Лист`,`Фото з Києва`,`Книжку`],a:1},{q:`Що вони пили в кафе?`,o:[`Каву`,`Чай з медом`,`Гарячий шоколад`],a:2},{q:`“the book that I'm reading”:`,o:[`книжка, яку я читаю`,`книжка, який я читаю`,`книжка, які я читаю`],a:0}]},

{ua:`Де шапка?`,en:`Where's the hat?`,g:`Someone, nobody, something, nothing`,
gram:`<div class="gt"><table><tr><th>question</th><th>-сь (some-)</th><th>ні- (no-)</th></tr>
<tr><td>хто</td><td>хтось</td><td>ніхто не</td></tr>
<tr><td>що</td><td>щось</td><td>нічого не</td></tr>
<tr><td>де</td><td>десь</td><td>ніде не</td></tr>
<tr><td>куди</td><td>кудись</td><td>нікуди не</td></tr>
<tr><td>коли</td><td>колись</td><td>ніколи не</td></tr></table></div>
<p>With a <b>ні-</b> word the verb keeps its <b>не</b>, and you can stack them: <i>Ти ніколи нічого не питаєш</i> = You never ask anything.</p>
<p>Watch <b>к → ц</b> before -і: <i>шапка → на шапці</i>, <i>дошка → на дошці</i>.</p>`,
p:[[`Одного ранку Тарас не може знайти свою шапку.`,`One morning Taras can't find his hat.`],[`«Хтось бачив мою шапку?» — питає він.`,`“Has anyone seen my hat?” he asks.`],[`«Ні, ніхто не бачив», — каже тато.`,`“No, nobody has,” says Dad.`],[`«Вона десь тут», — каже мама.`,`“It's somewhere here,” says Mum.`],[`Тарас шукає скрізь, але ніде її немає.`,`Taras searches everywhere, but it isn't anywhere.`],[`Раптом він чує, як щось шарудить під ліжком.`,`Suddenly he hears something rustling under the bed.`],[`Це Мурко! Він спить на шапці.`,`It's Murko! He's sleeping on the hat.`],[`«Мурку, ти ніколи нічого не питаєш!» — каже Тарас.`,`“Murko, you never ask anyone anything!” says Taras.`]],
v:[[`хтось`,`someone, anyone`],[`щось`,`something`],[`десь`,`somewhere`],[`ніхт+о`,`nobody (with не)`],[`нід+е`,`nowhere (with не)`],[`знайт+и`,`to find (pf.): знайд+у`],[`шук+ати`,`to look for`],[`р+аптом`,`suddenly`],[`шаруд+іти`,`to rustle`],[`під`,`under (+ instr.)`],[`л+іжко`,`bed; під л+іжком`]],
r:[`шапка`,`могти`,`свій`,`скрізь`,`чути`,`ніколи`,`нічого`,`Мурку (vocative)`],
q:[{q:`Що шукає Тарас?`,o:[`Книжку`,`Шапку`,`Кота`],a:1},{q:`Де була шапка?`,o:[`Під ліжком, під Мурком`,`На столі`,`У Києві`],a:0},{q:`“Nobody knows” is…`,o:[`Ніхто знає`,`Хтось не знає`,`Ніхто не знає`],a:2}]},

{ua:`Якби…`,en:`If only…`,g:`Conditional: would, if`,
gram:`<p>“Would” is <b>би</b> (after a consonant) or <b>б</b> (after a vowel) with the past tense: <i>Я б поїхала</i> = I would go. <i>Він поїхав би</i> = He would go.</p>
<div class="gt"><table><tr><th>type</th><th>Ukrainian</th><th>English</th></tr>
<tr><td>real</td><td>Якщо буде час, я прийду.</td><td>If I have time, I'll come.</td></tr>
<tr><td>unreal</td><td>Якби був час, я б прийшов.</td><td>If I had time, I would come.</td></tr></table></div>
<p>There's no separate tense for “would have”. <i>Я б прийшов</i> also covers “I would have come”, and context decides. <b>би</b> can move around, but it usually sits after the first word.</p>`,
p:[[`«Що б ти робив, якби мав багато грошей?» — питає Олена.`,`“What would you do if you had lots of money?” asks Olena.`],[`«Я б подорожував», — каже Тарас.`,`“I'd travel,” says Taras.`],[`«Я поїхав би в Японію і в Канаду.»`,`“I'd go to Japan and to Canada.”`],[`«А я купила б великий будинок біля моря», — каже Олена.`,`“And I'd buy a big house by the sea,” says Olena.`],[`«У ньому була б велика бібліотека.»`,`“It would have a big library.”`],[`«І кіт?» — питає Тарас.`,`“And a cat?” asks Taras.`],[`«Звичайно! Якби в мене був кіт, я назвала б його Мурчик.»`,`“Of course! If I had a cat, I'd call him Murchyk.”`],[`Мурко це чує. Він був би не проти.`,`Murko hears this. He wouldn't mind.`]],
v:[[`би · б`,`would`],[`якб+и`,`if (unreal)`],[`гр+оші`,`money (pl.); gen. грош+ей`],[`Яп+онія`,`Japan`],[`Кан+ада`,`Canada`],[`м+оре`,`sea; б+іля м+оря`],[`бібліот+ека`,`library`],[`назв+ати`,`to name, call (pf.)`],[`не пр+оти`,`not against, wouldn't mind`]],
r:[`подорожувати`,`купити`,`будинок`,`біля`,`звичайно`,`чути`,`у мене був`],
q:[{q:`Що б робив Тарас?`,o:[`Купив би будинок`,`Подорожував би`,`Спав би`],a:1},{q:`Де Олена купила б будинок?`,o:[`Біля моря`,`У Києві`,`У Канаді`],a:0},{q:`“I would read” (a man speaking):`,o:[`Я буду читати`,`Я читаю би`,`Я читав би`],a:2}]},

{ua:`Щоб діти не нудьгували`,en:`So the children aren't bored`,g:`щоб: purpose and wishes`,
gram:`<div class="gt"><table><tr><th>subject</th><th>pattern</th><th>example</th></tr>
<tr><td>same person</td><td>щоб + infinitive</td><td>Я вчуся, щоб працювати.</td></tr>
<tr><td>different person</td><td>щоб + past tense</td><td>Мама хоче, щоб він відпочив.</td></tr></table></div>
<p>After <b>щоб</b> the past form is used even when the meaning is future: <i>Я хочу, щоб ти прийшов у суботу</i> = I want you to come on Saturday.</p>
<p><b>Навіщо?</b> = What for? The answer often starts with <i>Щоб…</i></p>`,
p:[[`Тарас склав іспит!`,`Taras passed his exam!`],[`Він багато вчився, щоб добре скласти іспит.`,`He studied hard in order to pass it well.`],[`Мама хоче, щоб він відпочив.`,`Mum wants him to rest.`],[`Олена каже: «Я хочу, щоб ти прийшов у суботу до школи.»`,`Olena says: “I want you to come to the school on Saturday.”`],[`«Навіщо?» — питає Тарас.`,`“What for?” asks Taras.`],[`«Щоб розповісти дітям про університет.»`,`“To tell the children about the university.”`],[`Тарас трохи нервує, але погоджується.`,`Taras is a bit nervous but agrees.`],[`Він готується цілий вечір, щоб діти не нудьгували.`,`He prepares all evening so that the children won't be bored.`]],
v:[[`щоб`,`so that, in order to`],[`скл+асти +іспит`,`to pass an exam (pf.)`],[`відпоч+ити`,`to rest (pf.)`],[`нав+іщо?`,`what for?`],[`розповіст+и`,`to tell (pf.)`],[`нервув+ати`,`to be nervous`],[`пог+оджуватися`,`to agree`],[`готув+атися`,`to prepare (oneself)`],[`нудьгув+ати`,`to be bored`]],
r:[`іспит`,`вчитися`,`прийти`,`субота`,`діти`,`університет`,`трохи`,`цілий`],
q:[{q:`Що хоче мама?`,o:[`Щоб Тарас вчився`,`Щоб Тарас відпочив`,`Щоб Тарас поїхав`],a:1},{q:`Навіщо Тарас іде до школи?`,o:[`Щоб писати іспит`,`Щоб працювати вчителем`,`Щоб розповісти дітям про університет`],a:2},{q:`“I want you to read”:`,o:[`Я хочу, щоб ти читав`,`Я хочу, що ти читаєш`,`Я хочу ти читати`],a:0}]},

{ua:`Урок закінчено`,en:`The lesson is over`,g:`Participles: written, made, closed`,
gram:`<p>A passive participle turns a perfective verb into an adjective: <b>-ний</b>, <b>-ений</b> or <b>-тий</b>.</p>
<div class="gt"><table><tr><th>verb</th><th>participle</th><th>meaning</th></tr>
<tr><td>написати</td><td>написаний</td><td>written</td></tr>
<tr><td>прочитати</td><td>прочитаний</td><td>read</td></tr>
<tr><td>зробити</td><td>зроблений</td><td>made, done</td></tr>
<tr><td>відчинити / зачинити</td><td>відчинений / зачинений</td><td>open / closed</td></tr>
<tr><td>відкрити</td><td>відкритий</td><td>opened</td></tr></table></div>
<p>They agree like adjectives: <i>написаний лист, написана книжка, написані листи</i>.</p>
<p>The impersonal form drops <i>-ий</i> and adds <b>-о</b>: <i>написано</i> (it is written), <i>зачинено</i> (closed), <i>закінчено</i> (finished). You'll see it on shop doors.</p>`,
p:[[`Субота. Двері школи відчинені.`,`Saturday. The school doors are open.`],[`На дошці написано: «Ласкаво просимо, Тарасе!»`,`On the board it says: “Welcome, Taras!”`],[`Клас прикрашений малюнками.`,`The classroom is decorated with drawings.`],[`Тарас розповідає про університет і про прочитані книжки.`,`Taras talks about the university and the books he has read.`],[`Діти слухають уважно.`,`The children listen attentively.`],[`Потім вони дарують йому малюнок, зроблений разом.`,`Then they give him a drawing they made together.`],[`На малюнку намальований чорний кіт.`,`The drawing shows a black cat.`],[`«Це Мурко!» — сміється Тарас.`,`“It's Murko!” laughs Taras.`],[`Урок закінчено.`,`The lesson is over.`]],
v:[[`дв+ері`,`door (plural only)`],[`відч+инений · зач+инений`,`open · closed`],[`д+ошка`,`board; на д+ошці`],[`нап+исано`,`(it is) written`],[`Л+аскаво пр+осимо!`,`Welcome!`],[`клас`,`classroom, class`],[`прикр+ашений`,`decorated`],[`мал+юнок`,`drawing, picture`],[`ув+ажно`,`attentively, carefully`],[`зр+облений`,`made`],[`намаль+ований`,`drawn, painted`],[`дарув+ати`,`to give (as a present)`],[`смі+ятися`,`to laugh: смі+юся, смі+ється`],[`зак+інчено`,`finished, over`]],
r:[`субота`,`школа`,`розповідати`,`прочитати`,`слухати`,`разом`,`чорний кіт`,`урок`],
q:[{q:`Що написано на дошці?`,o:[`З Новим роком!`,`Ласкаво просимо, Тарасе!`,`Урок закінчено`],a:1},{q:`Хто намальований на малюнку?`,o:[`Чорний кіт`,`Олена`,`Ялинка`],a:0},{q:`On a shop door, “Closed” is…`,o:[`Відчинено`,`Написано`,`Зачинено`],a:2}]},

{ua:`Лист Оксані`,en:`A letter to Oksana`,g:`Verbal adverbs: while doing, having done`,
gram:`<p>A verbal adverb links a second action to the same subject. It never changes form.</p>
<div class="gt"><table><tr><th>type</th><th>ending</th><th>example</th><th>meaning</th></tr>
<tr><td>imperfective</td><td>-учи, -ючи, -ачи, -ячи</td><td>читаючи, мріючи, сидячи</td><td>while reading, dreaming, sitting</td></tr>
<tr><td>perfective</td><td>-вши, -ши</td><td>прочитавши, склавши</td><td>having read, having passed</td></tr>
<tr><td>reflexive</td><td>+ -сь</td><td>повернувшись</td><td>having returned</td></tr></table></div>
<p>The imperfective form comes from the <b>вони</b> present: <i>чита-ють → читаючи</i>. You'll meet these more in writing than in speech. This is the last grammar point of the course, so now it's all reading.</p>`,
p:[[`Сидячи біля вікна, Олена пише лист Оксані.`,`Sitting by the window, Olena writes a letter to Oksana.`],[`«Привіт, Оксано! Повернувшись із Києва, ми багато працювали.»`,`“Hi, Oksana! Since we got back from Kyiv, we've been working a lot.”`],[`«Тарас, склавши іспит, розповідав дітям у моїй школі про університет.»`,`“Taras, having passed his exam, told the children at my school about the university.”`],[`«Діти слухали, відкривши рота.»`,`“The children listened open-mouthed.”`],[`«Мурко, як завжди, спить, мріючи про молоко.»`,`“Murko, as always, is asleep, dreaming of milk.”`],[`«Читаючи твої листи, я думаю про Київ.»`,`“When I read your letters, I think about Kyiv.”`],[`«Приїжджай навесні! Ми покажемо тобі Львів ще раз.»`,`“Come in spring! We'll show you Lviv again.”`],[`«Обіймаю, твоя сестра Олена.»`,`“Hugs, your sister Olena.”`]],
v:[[`сидячи`,`(while) sitting`],[`поверн+увшись`,`having returned`],[`скл+авши`,`having passed`],[`відкр+ивши р+ота`,`open-mouthed (lit. having opened the mouth)`],[`рот`,`mouth`],[`мр+іяти`,`to dream: мр+іючи (while) dreaming`],[`чит+аючи`,`(while) reading`],[`ще раз`,`once more, again`],[`із`,`from (variant of з)`],[`Обійм+аю`,`Hugs (lit. I embrace)`]],
r:[`біля вікна`,`лист`,`Оксано (vocative)`,`іспит`,`як завжди`,`приїжджай`,`навесні`,`показати`],
q:[{q:`Що робить Олена?`,o:[`Читає книжку`,`Пише лист Оксані`,`Їде в Київ`],a:1},{q:`Про що мріє Мурко?`,o:[`Про молоко`,`Про Київ`,`Про шапку`],a:0},{q:`“Having read the book, he slept”:`,o:[`Читаючи книжку, він спав`,`Читав книжку, він спав`,`Прочитавши книжку, він спав`],a:2}]}
];
