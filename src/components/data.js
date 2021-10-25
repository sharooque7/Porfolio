import aa from "../Assets/ProductManager.PNG";
import bb from "../Assets/WhatsAppClone.PNG";
import cc from "../Assets/zaberi.PNG";
const project = [
  {
    id: 1,
    title: "ProductManager",
    Description:
      "Full Stack Application which is used to manage the product of the sellers ,Where sellers will upload their product and will manage their products",
    ToolsUsed: "React ,Node(Epxress), MongoDB",
    image: aa,
    deployedURL: "https://productmanagercrud.netlify.app/",
    GithubBackend: "https://github.com/sharooque7/ProductManagerBackend.git",
    GithubFrontend: "https://github.com/sharooque7/ProductManager-FrontEnd.git",
  },

  {
    id: 2,
    title: "WhatsAppClone",
    Description:
      "Cloned popular messaging platform whatsapp with firebase acting as backend for storing the messages and rooms and chats",
    ToolsUsed: "React ,FireBase",
    image: bb,
    deployedURL: "https://whatsapp-clone-a8525.web.app/",
    GithubFrontend: "https://github.com/sharooque7/whatsapp-clone.git",
  },

  {
    id: 3,
    title: "ZaberiEcommerce",
    Description:
      "Full stack Eccommerce application with paypal payment gateway integrated where people can buy their product . Used redux as state Management",
    ToolsUsed: "React ,Node(Express),MongoDb,Paypal API",
    image: cc,
    deployedURL: "https://zaberi.netlify.app/",
    GithubFrontend: "https://github.com/sharooque7/ZaberiFront.git",
    GithubBackend: "https://github.com/sharooque7/ZaberiBackend.git",
  },
];

export default project;
