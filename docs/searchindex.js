Object.assign(window.search, {"doc_urls":["goals/index.html#goals","features/index.html#features","features/index.html#general-features","features/index.html#other-specific-features","features/frontend.html#frontend","features/backend.html#backend","features/backend.html#easy-deployment","api/index.html#api","api/index.html#stage","api/index.html#production","db/index.html#database","db/index.html#model","db/index.html#sql"],"index":{"documentStore":{"docInfo":{"0":{"body":20,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":0,"breadcrumbs":2,"title":1},"11":{"body":137,"breadcrumbs":2,"title":1},"12":{"body":4,"breadcrumbs":2,"title":1},"2":{"body":16,"breadcrumbs":3,"title":2},"3":{"body":12,"breadcrumbs":3,"title":2},"4":{"body":10,"breadcrumbs":3,"title":1},"5":{"body":13,"breadcrumbs":3,"title":1},"6":{"body":20,"breadcrumbs":4,"title":2},"7":{"body":0,"breadcrumbs":2,"title":1},"8":{"body":10,"breadcrumbs":2,"title":1},"9":{"body":3,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"The basic idea and goals of this project. feature-rich and simple to use App (Desktop, Mobile, Web) easy to use and understand API easy to self-host => you own your data","breadcrumbs":"Goals » Goals","id":"0","title":"Goals"},"1":{"body":"","breadcrumbs":"Features » Features","id":"1","title":"Features"},"10":{"body":"","breadcrumbs":"Database » Database","id":"10","title":"Database"},"11":{"body":"erDiagram User { int id PK string username UK string email UK \"Nullable\" string password UK \"Hashed and salted Password\" timestamp created_at bool is_admin } Currency { int id PK string name string symbol string iso_code int decimal_places User user FK \"Nullable\" } Currency }|--|| User: \"many to one\" Account { int id PK string name string description \"Nullable\" string iban UK \"Nullable\" int balance Currency currency FK timestamp created_at } UserAccount { User user PK \"References User.id\" Account account PK \"References Account.id\" } UserAccount ||--|{ User: \"one to many\" UserAccount ||--|{ Account: \"one to many\" Transaction { int id PK Account source FK \"Nullable\" Account destination FK \"Nullable\" int amount Currency currency FK string description \"Nullable\" Budget budget FK \"Nullable\" timestamp created_at timestamp executed_at } Transaction ||--|| Account: \"one to one\" Transaction ||--|| Budget: \"one to one\" Budget { int id PK User user FK int amount string name string description \"Nullable\" timestamp created_at } Budget ||--|| User: \"one to one\"","breadcrumbs":"Database » Model","id":"11","title":"Model"},"12":{"body":"You can find the SQL script here .","breadcrumbs":"Database » SQL","id":"12","title":"SQL"},"2":{"body":"Budgets Categories Accounts Transactions Reports custom currencies Import/Export Family (or multiple users) Accounts scan bills and add to transaction","breadcrumbs":"Features » General Features","id":"2","title":"General Features"},"3":{"body":"For frontend specific features see Frontend Features For backend specific features see Backend Features","breadcrumbs":"Features » Other specific features","id":"3","title":"Other specific features"},"4":{"body":"Features that are specific to the frontend. (MAYBE) fully offline support without any backend Localization","breadcrumbs":"Features » Frontend » Frontend","id":"4","title":"Frontend"},"5":{"body":"Features that are specific to the backend. API compression (brotli, zstd, gzip => in this order!) handling of trailing slashes for the API","breadcrumbs":"Features » Backend » Backend","id":"5","title":"Backend"},"6":{"body":"provide docker image provide good installation instructions reduce external dependencies we only need our databases PostgreSQL & redis integrated rate limiter -> no need for an external one","breadcrumbs":"Features » Backend » Easy Deployment","id":"6","title":"Easy Deployment"},"7":{"body":"","breadcrumbs":"API » API","id":"7","title":"API"},"8":{"body":"The stage gets wiped on every deploy!!! For development use only!!! Url: https://api-stage.financrr.app/swagger-ui/","breadcrumbs":"API » Stage","id":"8","title":"Stage"},"9":{"body":"Url: https://api.financrr.app/swagger-ui/","breadcrumbs":"API » Production","id":"9","title":"Production"}},"length":13,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"11":{"tf":2.6457513110645907},"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"i":{"df":3,"docs":{"0":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"11":{"tf":2.23606797749979},"2":{"tf":1.0}}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"11":{"tf":2.449489742783178},"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"10":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"6":{"tf":1.0},"8":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}},"r":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":6,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":2.23606797749979},"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"d":{"df":1,"docs":{"11":{"tf":2.23606797749979}},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":1,"docs":{"11":{"tf":3.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"s":{"_":{"a":{"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}},"y":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":3.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":2,"docs":{"11":{"tf":3.0},"6":{"tf":1.0}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"k":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}},"u":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":3,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"11":{"tf":3.4641016151377544}}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":2.23606797749979}}}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"k":{"df":1,"docs":{"11":{"tf":2.0}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"l":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"11":{"tf":3.1622776601683795},"2":{"tf":1.0}},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"z":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"11":{"tf":2.6457513110645907},"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"i":{"df":5,"docs":{"0":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772},"8":{"tf":1.0},"9":{"tf":1.0}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":2.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"11":{"tf":2.23606797749979},"2":{"tf":1.0}}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"11":{"tf":2.449489742783178},"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":4,"docs":{"10":{"tf":1.7320508075688772},"11":{"tf":1.0},"12":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}},"r":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":7,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.7320508075688772},"3":{"tf":2.6457513110645907},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":2.0}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":2.0}}}},"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"d":{"df":1,"docs":{"11":{"tf":2.23606797749979}},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":1,"docs":{"11":{"tf":3.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"s":{"_":{"a":{"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}},"y":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":3.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":2,"docs":{"11":{"tf":3.0},"6":{"tf":1.0}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"k":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}},"u":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":3,"docs":{"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"11":{"tf":3.4641016151377544}}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":2.23606797749979}}}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"k":{"df":1,"docs":{"11":{"tf":2.0}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"l":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"11":{"tf":3.1622776601683795},"2":{"tf":1.0}},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"z":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});