"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const a={title:"2. Levels of MLOps",description:"Levels of MLOps",sidebar_position:2,date:new Date("2021-12-03T00:00:00.000Z"),lastmod:new Date("2022-03-05T00:00:00.000Z"),contributors:["Jongseob Jeon"]},r=void 0,s={unversionedId:"introduction/levels",id:"version-1.0/introduction/levels",title:"2. Levels of MLOps",description:"Levels of MLOps",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/introduction/levels.md",sourceDirName:"introduction",slug:"/introduction/levels",permalink:"/en/docs/1.0/introduction/levels",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/introduction/levels.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1688994187,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:2,frontMatter:{title:"2. Levels of MLOps",description:"Levels of MLOps",sidebar_position:2,date:"2021-12-03T00:00:00.000Z",lastmod:"2022-03-05T00:00:00.000Z",contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"1. What is MLOps?",permalink:"/en/docs/1.0/introduction/intro"},next:{title:"3. Components of MLOps",permalink:"/en/docs/1.0/introduction/component"}},l={},d=[{value:"Hidden Technical Debt in ML System",id:"hidden-technical-debt-in-ml-system",level:2},{value:"Level 0: Manual Process",id:"level-0-manual-process",level:2},{value:"Level 1: Automated ML Pipeline",id:"level-1-automated-ml-pipeline",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"Continuous Training",id:"continuous-training",level:3},{value:"Auto Retrain",id:"auto-retrain",level:4},{value:"Auto Deploy",id:"auto-deploy",level:4},{value:"Level 2: Automating the CI/CD Pipeline",id:"level-2-automating-the-cicd-pipeline",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page will look at the steps of MLOps outlined by Google and explore what the core features of MLOps are."),(0,o.kt)("h2",{id:"hidden-technical-debt-in-ml-system"},"Hidden Technical Debt in ML System"),(0,o.kt)("p",null,"Google has been talking about the need for MLOps since as far back as 2015.  The paper Hidden Technical Debt in Machine Learning Systems encapsulates this idea from Google.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"paper",src:n(6061).Z,width:"840",height:"638"})),(0,o.kt)("p",null,"The key takeaway from this paper is that the machine learning code is only a small part of the entire system when it comes to building products with machine learning."),(0,o.kt)("p",null,"Google developed MLOps by evolving this paper and expanding the term. More details can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"},"Google Cloud homepage"),". In this post, we will try to explain what Google means by MLOps."),(0,o.kt)("p",null,"Google divided the evolution of MLOps into three (0-2) stages. Before explaining each stage, let's review some of the concepts described in the previous post."),(0,o.kt)("p",null,"In order to operate a machine learning model, there is a machine learning team responsible for developing the model and an operations team responsible for deployment and operations. MLOps is needed for the successful collaboration of these two teams. We have previously said that it can be done simply through Continuous Integration (CI) / Continuous Deployment (CD), so let us see how to do CI / CD."),(0,o.kt)("h2",{id:"level-0-manual-process"},"Level 0: Manual Process"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"level-0",src:n(8982).Z,width:"1332",height:"494"})),(0,o.kt)("p",null,'At the 0th stage, two teams communicate through a "model". The machine learning team trains the model with accumulated data and delivers the trained model to the operation team. The operation team then deploys the model delivered in this way.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"toon",src:n(9386).Z,width:"1282",height:"1746"})),(0,o.kt)("p",null,'Initial machine learning models are deployed through this "model" centered communication. However, there are several problems with this distribution method. For example, if some functions use Python 3.7 and some use Python 3.8, we often see the following situation.'),(0,o.kt)("p",null,"The reason for this situation lies in the characteristics of the machine learning model. Three things are needed for the trained machine learning model to work:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Python code"),(0,o.kt)("li",{parentName:"ol"},"Trained weights"),(0,o.kt)("li",{parentName:"ol"},"Environment (Packages, versions)")),(0,o.kt)("p",null,"If any of these three aspects is communicated incorrectly, the model may fail to function or make unexpected predictions. However, in many cases, models fail to work due to environmental mismatches. Machine learning relies on various open-source libraries, and due to the nature of open-source, even the same function can produce different results depending on the version used."),(0,o.kt)("p",null,"In the early stages of a service, when there are not many models to manage, these issues can be resolved quickly. However, as the number of managed features increases and communication becomes more challenging, it becomes difficult to deploy models with better performance quickly."),(0,o.kt)("h2",{id:"level-1-automated-ml-pipeline"},"Level 1: Automated ML Pipeline"),(0,o.kt)("h3",{id:"pipeline"},"Pipeline"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"level-1-pipeline",src:n(8463).Z,width:"1356",height:"942"})),(0,o.kt)("p",null,'So, in MLOps, "pipeline" is used to prevent such problems. The MLOps pipeline ensures that the model operates in the same environment as the one used by the machine learning engineer during model development, using containers like Docker. This helps prevent situations where the model doesn\'t work due to differences in the environment.'),(0,o.kt)("p",null,'However, the term "pipeline" is used in a broader context and in various tasks. What is the role of the pipeline that machine learning engineers create? The pipeline created by machine learning engineers produces trained models. Therefore, it would be more accurate to refer to it as a training pipeline rather than just a pipeline.'),(0,o.kt)("h3",{id:"continuous-training"},"Continuous Training"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"level-1-ct.png",src:n(2993).Z,width:"1356",height:"942"})),(0,o.kt)("p",null,"And the concept of Continuous Training (CT) is added. So why is CT necessary?"),(0,o.kt)("h4",{id:"auto-retrain"},"Auto Retrain"),(0,o.kt)("p",null,'In the real world, data exhibits a characteristic called "Data Shift," where the data distribution keeps changing over time. As a result, models trained in the past may experience performance degradation over time. The simplest and most effective solution to this problem is to retrain the model using recent data. By retraining the model according to the changed data distribution, it can regain its performance.'),(0,o.kt)("h4",{id:"auto-deploy"},"Auto Deploy"),(0,o.kt)("p",null,"However, in industries such as manufacturing, where multiple recipes are processed in a single factory, it may not always be desirable to retrain the model unconditionally. One common example is the blind spot."),(0,o.kt)("p",null,"For example, in an automotive production line, a model A was created and used for predictions. If an entirely different model B is introduced, it represents unseen data patterns, and a new model is trained for model B."),(0,o.kt)("p",null,'Now, the model will make predictions for model B. However, if the data switches back to model A, what should be done?\nIf there are only retraining rules, a new model for model A will be trained again. However, machine learning models require a sufficient amount of data to demonstrate satisfactory performance. The term "blind spot" refers to a period in which the model does not work while gathering enough data.'),(0,o.kt)("p",null,"There is a simple solution to address this blind spot. It involves checking whether there was a previous model for model A and, if so, using the previous model for prediction instead of immediately training a new model. This way, using meta-data associated with the model to automatically switch models is known as Auto Deploy."),(0,o.kt)("p",null,"To summarize, for Continuous Training (CT), both Auto Retrain and Auto Deploy are necessary. They complement each other's weaknesses and enable the model's performance to be maintained continuously."),(0,o.kt)("h2",{id:"level-2-automating-the-cicd-pipeline"},"Level 2: Automating the CI/CD Pipeline"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"level-2",src:n(601).Z,width:"1356",height:"862"})),(0,o.kt)("p",null,"The title of Step 2 is the automation of CI and CD. In DevOps, the focus of CI/CD is on source code. So what is the focus of CI/CD in MLOps?"),(0,o.kt)("p",null,"In MLOps, the focus of CI/CD is also on source code, but more specifically, it can be seen as the training pipeline."),(0,o.kt)("p",null,"Therefore, when it comes to training models, it is important to verify whether the model is trained correctly (CI) and whether the trained model functions properly (CD) in response to relevant changes that can impact the training process. Hence, CI/CD should be performed when there are direct modifications to the code used for training."),(0,o.kt)("p",null,"In addition to code, the versions of the packages used and changes in the Python version are also part of CI/CD. In many cases, machine learning utilizes open-source packages. However, open-source packages can have changes in the internal logic of functions when their versions are updated. Although notifications may be provided when there are certain version updates, significant changes in versions can go unnoticed. Therefore, when the versions of the packages used change, it is important to perform CI/CD to ensure that the model is trained and functions correctly."),(0,o.kt)("p",null,"In summary, in MLOps, CI/CD focuses on the source code, particularly the training pipeline, to verify that the model is trained correctly and functions properly. This includes checking for direct code modifications and changes in package versions or Python versions to ensure the integrity of the training and functioning processes of the model."))}h.isMDXComponent=!0},8982:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/level-0-85b288b20c458e64055199fc50b1fe86.png"},2993:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/level-1-ct-a1ac90943bd5dd8e9af840cbcf51e985.png"},8463:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/level-1-pipeline-b2979b34d4804546ef4005cdf0f6311a.png"},601:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/level-2-a4bb6a840eb99f33f3027217a5a04d8e.png"},6061:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/paper-67df32c03d5288f214c8cd189f85b2ea.png"},9386:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/toon-8ff2a8fb63a502a2b419a4cd459a7e41.png"}}]);