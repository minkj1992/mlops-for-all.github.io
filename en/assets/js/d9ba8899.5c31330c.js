"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",sidebar_position:6,contributors:["Jongseob Jeon","Jaeyeon Kim"]},i=void 0,l={unversionedId:"prerequisites/docker/advanced",id:"version-1.0/prerequisites/docker/advanced",title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/advanced.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/advanced",permalink:"/en/docs/1.0/prerequisites/docker/advanced",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/advanced.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1688994187,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:6,frontMatter:{title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",sidebar_position:6,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"[Practice] Docker images",permalink:"/en/docs/1.0/prerequisites/docker/images"}},s={},c=[{value:"Making a good Docker image",id:"making-a-good-docker-image",level:2},{value:"Considerations to make Docker image:",id:"considerations-to-make-docker-image",level:3},{value:"ENTRYPOINT vs CMD",id:"entrypoint-vs-cmd",level:3},{value:"Naming docker tag",id:"naming-docker-tag",level:3},{value:"ETC",id:"etc",level:3},{value:"Several options for docker run",id:"several-options-for-docker-run",level:2},{value:"Docker volume",id:"docker-volume",level:4},{value:"Bind mount",id:"bind-mount",level:4},{value:"How to use?",id:"how-to-use",level:4},{value:"Docker run with resource limit",id:"docker-run-with-resource-limit",level:3},{value:"docker run with restart policy",id:"docker-run-with-restart-policy",level:3},{value:"Running docker run as a background process",id:"running-docker-run-as-a-background-process",level:3},{value:"First Practice",id:"first-practice",level:4},{value:"Second Practice",id:"second-practice",level:4},{value:"Third Practice",id:"third-practice",level:4},{value:"References",id:"references",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"making-a-good-docker-image"},"Making a good Docker image"),(0,r.kt)("h3",{id:"considerations-to-make-docker-image"},"Considerations to make Docker image:"),(0,r.kt)("p",null,"When creating a Docker image using a Dockerfile, the ",(0,r.kt)("strong",{parentName:"p"},"order")," of the commands is important.",(0,r.kt)("br",{parentName:"p"}),"\n","This is because Docker images are composed of many Read-Only layers and when building the image, existing layers are ",(0,r.kt)("strong",{parentName:"p"},"cached")," and reused, so if you structure your Dockerfile with this in mind, you can ",(0,r.kt)("strong",{parentName:"p"},"reduce the build time"),"."),(0,r.kt)("p",null,"Each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," commands in a Dockerfile are stored as one layer."),(0,r.kt)("p",null,"For example, if we have the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# Layer 1\nFROM ubuntu:latest\n\n# Layer 2\nRUN apt-get update && apt-get install python3 pip3 -y\n\n# Layer 3\nRUN pip3 install -U pip && pip3 install torch\n\n# Layer 4\nCOPY src/ src/\n\n# Layer 5\nCMD python src/app.py\n")),(0,r.kt)("p",null,"If you run the image built with the above ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -it app:latest /bin/bash"),", it can be represented in the following layers. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"layers.png",src:n(4446).Z,width:"1080",height:"612"})),(0,r.kt)("p",null,"The topmost R/W layer does not affect the image. In other words, any changes made inside the container are volatile."),(0,r.kt)("p",null,"When a lower layer is changed, all the layers above it need to be rebuilt. Therefore, the order of Dockerfile instructions is important. It is recommended to place the parts that are frequently changed towards the end. (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY src/ app/src/"),")"),(0,r.kt)("p",null,"Conversely, parts that are unlikely to change should be placed towards the beginning."),(0,r.kt)("p",null,"If there are parts that are rarely changed but used in multiple places, they can be consolidated. It is advisable to create a separate image for those common parts in advance and use it as a base image."),(0,r.kt)("p",null,"For example, if you want to create separate images for an environment that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"tensorflow-cpu")," and another environment that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"tensorflow-gpu"),", you can do the following:\nCreate a base image ",(0,r.kt)("a",{parentName:"p",href:"http://ghcr.io/makinarocks/python:3.8-base-cpu"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/makinarocks/python:3.8-base"))," that includes Python and other basic packages installed. Then, when creating the images with the CPU and GPU versions of TensorFlow, you can use the base image as the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," instruction and write the separate instructions for installing TensorFlow in each Dockerfile. Managing two Dockerfiles in this way improves readability and reduces build time."),(0,r.kt)("p",null,"Combining layers had performance benefits in older versions of Docker. However, since you cannot guarantee the Docker version in which your Docker containers will run, it is recommended to combine layers for readability purposes. It is best to combine layers that can be combined appropriately."),(0,r.kt)("p",null,"Here is an example of a Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# Bad Case\nRUN apt-get update\nRUN apt-get install build-essential -y\nRUN apt-get install curl -y\nRUN apt-get install jq -y\nRUN apt-get install git -y\n")),(0,r.kt)("p",null,"This can be written by combining it as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# Better Case\nRUN apt-get update && \\\n    apt-get install -y \\\n    build-essential \\\n    curl \\\n    jq \\\n    git\n")),(0,r.kt)("p",null,"For convenience, it is better to use ",(0,r.kt)("inlineCode",{parentName:"p"},".dockerignore"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},".dockerignore")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," in the sense that it can be excluded when doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," just like when doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),". "),(0,r.kt)("p",null,"More information can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},"Docker Official Documentation"),"."),(0,r.kt)("h3",{id:"entrypoint-vs-cmd"},"ENTRYPOINT vs CMD"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," are both used when you want to execute a command at the runtime of the container. One of them must be present in the Dockerfile."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Difference"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),": Easily modifiable when running ",(0,r.kt)("inlineCode",{parentName:"li"},"docker run")," command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),": Requires the use of ",(0,r.kt)("inlineCode",{parentName:"li"},"--entrypoint")," to modify")))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," are used together, ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," typically represents the arguments (parameters) for the command specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"."),(0,r.kt)("p",null,"For example, consider the following Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},'FROM ubuntu:latest\n\n# \uc544\ub798 4 \uac00\uc9c0 option \uc744 \ubc14\uafd4\uac00\uba70 \uc9c1\uc811 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc2dc\uba74 \uc774\ud574\ud558\uae30 \ud3b8\ud569\ub2c8\ub2e4.\n# \ub2e8, NO ENTRYPOINT \uc635\uc158\uc740 base image \uc778 ubuntu:latest \uc5d0 \uc774\ubbf8 \uc788\uc5b4\uc11c \ud14c\uc2a4\ud2b8\ud574\ubcfc \uc218\ub294 \uc5c6\uace0 \ub098\uba38\uc9c0 v2, 3, 5, 6, 8, 9, 11, 12 \ub97c \ud14c\uc2a4\ud2b8\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n# ENTRYPOINT echo "Hello ENTRYPOINT"\n# ENTRYPOINT ["echo", "Hello ENTRYPOINT"]\n# CMD echo "Hello CMD"\n# CMD ["echo", "Hello CMD"]\n')),(0,r.kt)("p",null,"If you build and run the above ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," with the parts marked as comments deactivated, you can get the following results: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"No ENTRYPOINT"),(0,r.kt)("th",{parentName:"tr",align:null},"ENTRYPOINT a b"),(0,r.kt)("th",{parentName:"tr",align:null},"ENTRYPOINT ",'["a", "b"]'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NO CMD")),(0,r.kt)("td",{parentName:"tr",align:null},"Error!"),(0,r.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,r.kt)("td",{parentName:"tr",align:null},"a b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CMD ",'["x", "y"]')),(0,r.kt)("td",{parentName:"tr",align:null},"x y"),(0,r.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,r.kt)("td",{parentName:"tr",align:null},"a b x y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CMD x y")),(0,r.kt)("td",{parentName:"tr",align:null},"/bin/sh -c x y"),(0,r.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,r.kt)("td",{parentName:"tr",align:null},"a b /bin/sh -c x y")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Kubernetes pod, ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," corresponds to the command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CMD")," corresponds to the arguments")))),(0,r.kt)("h3",{id:"naming-docker-tag"},"Naming docker tag"),(0,r.kt)("p",null,'Recommend not using "latest" as a tag for a Docker image, as it is the default tag name and can be easily overwritten unintentionally.'),(0,r.kt)("p",null,"It is important to ensure uniqueness of one image with one tag for the sake of collaboration and debugging in the production stage.",(0,r.kt)("br",{parentName:"p"}),"\n","Using the same tag for different contents can lead to dangling images, which are not shown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images")," but still take up storage space."),(0,r.kt)("h3",{id:"etc"},"ETC"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Logs and other information are stored separately from the container, not inside it.\nThis is because data written from within the container can be lost at any time."),(0,r.kt)("li",{parentName:"ol"},"Secrets and environment-dependent information should not be written directly into the Dockerfile but should be passed in via environment variables or a .env config file."),(0,r.kt)("li",{parentName:"ol"},"There is a ",(0,r.kt)("strong",{parentName:"li"},"linter")," for Dockerfiles, so it is useful to use it when collaborating.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hadolint/hadolint"},"https://github.com/hadolint/hadolint"))),(0,r.kt)("h2",{id:"several-options-for-docker-run"},"Several options for docker run"),(0,r.kt)("p",null,"When using Docker containers, there are some inconveniences.\nSpecifically, Docker does not store any of the work done within the Docker container by default.\nThis is because Docker containers use isolated file systems. Therefore, it is difficult to share data between multiple Docker containers."),(0,r.kt)("p",null,"To solve this problem, there are two approaches offered by Docker."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"storage.png",src:n(9288).Z,width:"501",height:"255"})),(0,r.kt)("h4",{id:"docker-volume"},"Docker volume"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the Docker CLI to directly manage a resource called ",(0,r.kt)("inlineCode",{parentName:"li"},"volume"),"."),(0,r.kt)("li",{parentName:"ul"},"Create a specific directory under the Docker area (",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/docker"),") on the host and mount that path to a Docker container.")),(0,r.kt)("h4",{id:"bind-mount"},"Bind mount"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mount a specific path on the host to a Docker container.")),(0,r.kt)("h4",{id:"how-to-use"},"How to use?"),(0,r.kt)("p",null,"The usage is through the same interface, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," option.",(0,r.kt)("br",{parentName:"p"}),"\n","However, when using volumes, you need to manage them directly by performing commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume ls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume rm"),", etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Docker volume"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v my_volume:/app \\\n    nginx:latest\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blind mount"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v /home/user/some/path:/app \\\n    nginx:latest\n")))),(0,r.kt)("p",null,"When developing locally, bind mount can be convenient, but if you want to maintain a clean environment, using Docker volume and explicitly performing create and rm operations can be another approach."),(0,r.kt)("p",null,"The way storage is provided in Kubernetes ultimately relies on Docker's bind mount as well."),(0,r.kt)("h3",{id:"docker-run-with-resource-limit"},"Docker run with resource limit"),(0,r.kt)("p",null,"Basically, docker containers can ",(0,r.kt)("strong",{parentName:"p"},"fully utilize the CPU and memory resources of the host OS"),". However, when using this, depending on the resource situation of the host OS, docker containers may abnormally terminate due to issues such as ",(0,r.kt)("strong",{parentName:"p"},"OOM"),".\nTo address this problem, docker provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"-m")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/resource_constraints/#limit-a-containers-access-to-memory"},"option")," which allows you to ",(0,r.kt)("strong",{parentName:"p"},"limit the usage of CPU and memory")," when running the docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -m 512m --memory-reservation=256m --name 512-limit ubuntu sleep 3600\ndocker run -d -m 1g --memory-reservation=256m --name 1g-limit ubuntu sleep 3600\n")),(0,r.kt)("p",null,"After running the Docker above, you can check the usage through the 'docker stats' command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   NAME        CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS\n4ea1258e2e09   1g-limit    0.00%     300KiB / 1GiB       0.03%     1kB / 0B      0B / 0B     1\n4edf94b9a3e5   512-limit   0.00%     296KiB / 512MiB     0.06%     1.11kB / 0B   0B / 0B     1\n")),(0,r.kt)("p",null,"In Kubernetes, when you limit the CPU and memory resources of a pod resource, it is provided using this technique."),(0,r.kt)("h3",{id:"docker-run-with-restart-policy"},"docker run with restart policy"),(0,r.kt)("p",null,"If there is a need to keep a particular container running continuously, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--restart=always")," option is provided to try to re-create the container immediately after it is terminated."),(0,r.kt)("p",null,"After entering the option, run the docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --restart=always ubuntu\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"watch -n1 docker ps")," to check if it is restarting.\nIf it is running normally, ",(0,r.kt)("inlineCode",{parentName:"p"},"Restarting (0)")," will be printed in STATUS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                         PORTS     NAMES\na911850276e8   ubuntu    "bash"    35 seconds ago   Restarting (0) 6 seconds ago             hungry_vaughan\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/run/#restart-policies---restart"},"https://docs.docker.com/engine/reference/commandline/run/#restart-policies---restart"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Provides options such as "on-failure with max retries" and "always"')))),(0,r.kt)("p",null,"When specifying the restart option for a job resource in Kubernetes, this approach is used."),(0,r.kt)("h3",{id:"running-docker-run-as-a-background-process"},"Running docker run as a background process"),(0,r.kt)("p",null,"By default, when running a Docker container, it is executed as a foreground process. This means that the terminal that launched the container is automatically attached to it, preventing you from running other commands."),(0,r.kt)("p",null,"Let's try an example. Open two terminals, and in one terminal, continuously monitor ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),", while in the other terminal, execute the following commands one by one and observe the behavior."),(0,r.kt)("h4",{id:"first-practice"},"First Practice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ubuntu sleep 10\n")),(0,r.kt)("p",null,"You must remain stopped for 10 seconds and you cannot perform any other commands from that container. After 10 seconds, you can check in docker ps that the container has terminated."),(0,r.kt)("h4",{id:"second-practice"},"Second Practice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ubuntu sleep 10\n")),(0,r.kt)("p",null,"After that, press ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + p")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + q"),"."),(0,r.kt)("p",null,"Now you can perform other commands in that terminal, and you can also see that the container is still alive for up to 10 seconds with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),'. This situation, where you exit from the Docker container, is called "detached". Docker provides an option to run containers in detached mode, which allows you to run the container in the background while executing the ',(0,r.kt)("inlineCode",{parentName:"p"},"run")," command."),(0,r.kt)("h4",{id:"third-practice"},"Third Practice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d ubuntu sleep 10\n")),(0,r.kt)("p",null,"In detached mode, you can perform other actions in the terminal that executed the command."),(0,r.kt)("p",null,"It is good to use detached mode appropriately according to the situation.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, when developing a backend API server that communicates with the DB, the backend API server needs to be constantly checked with hot-loading while changing the source code, but the DB does not need to be monitored, so it can be executed as follows.",(0,r.kt)("br",{parentName:"p"}),"\n","Run the DB container in detached mode, and run the backend API server in attached mode to follow the logs."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/docker-storage-598e385f4efe"},"https://towardsdatascience.com/docker-storage-598e385f4efe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vsupalov.com/docker-latest-tag/"},"https://vsupalov.com/docker-latest-tag/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/azure/container-registry/container-registry-image-tag-version"},"https://docs.microsoft.com/ko-kr/azure/container-registry/container-registry-image-tag-version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stevelasker.blog/2018/03/01/docker-tagging-best-practices-for-tagging-and-versioning-docker-images/"},"https://stevelasker.blog/2018/03/01/docker-tagging-best-practices-for-tagging-and-versioning-docker-images/"))))}u.isMDXComponent=!0},4446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/layers-d934a487c19f428867e8d460015e8747.png"},9288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage-2d2649699364f46922716d1fe9b5470a.png"}}]);