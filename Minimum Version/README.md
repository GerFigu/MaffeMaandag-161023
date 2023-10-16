# Prerequisits
## Install Node
https://nodejs.org/en/download/current

## install angular client
npm install –g @angular/cli
# create angular project
```node
ng new
```

# install typescript grcp-web packages:
npm i -S @ngx-grpc/common @ngx-grpc/core @ngx-grpc/grpc-web-client @ngx-grpc/well-known-types google-protobuf grpc-web
npm i -D @ngx-grpc/protoc-gen-ng @types/google-protobuf

commands copied from <https://github.com/smnbbrv/ngx-grpc> 

# install GRPC-TOOLS (do not use under windows)
The grpc-tools npm package allows you to generate the grpc client using the executable protocas a node command. 

npm i grpc-tools

For the latest version of the grpc-tools to work under windows you have to also install the right c++ build tools and or c++ sdk (using visual studio installer).

From <https://www.npmjs.com/package/grpc-tools> 

# install angular material
npm i @angular/material  

# copy proto file to angular app
copy the proto file and paste it into the 'proto' folder of the angular app. Make sure to this everytime you make changes to the proto file. The back-end server and the front-end must use the same proto file.

# install protoc.exe when using windows
Download and copy protoc.exe copy it to c:\devtools
https://github.com/protocolbuffers/protobuf/releases/download/v24.4/protoc-24.4-win64.zip
Execute powershell command
$env:Path += ";c:\devtools"
Or edit path variable permanently using environmental settings under windows

# configuring npm run script to generate client code. 
first make sure you have the following folder structure in place
Make sure you have the following file and folders structure in place with the actual proto files inside the proto folder and an empty generated folder for the output files.
\---src
    +---app
    |   \---generated
    +---assets
    \---proto
    |   \---greet.proto

package json:
```
scripts:{
	…
	"proto:generate:win": "for /f %G in ('dir /b .\\src\\proto\\*.proto') do grpc_tools_node_protoc --plugin=protoc-gen-ng=.\\node_modules\\.bin\\protoc-gen-ng.cmd --ng_out=.\\src\\app\\generated -I .\\src\\proto .\\src\\proto\\%G"
 }
```

".\\src\\proto" is the path (relative to root of project) to the proto folder containing the relevant greet.proto file
".\\src\\app\\generated" is the path (relative to root of project)  where you want the generated code files need to be created.

then run the nodejs script
```powershell
npm run proto:generate:win
```

the output files should appear under generated:

+---app
|   \---generated
|           greet.pb.ts
|           greet.pbconf.ts
|           greet.pbsc.ts

# paste the following code in "app.module.ts":
export function GrpcWebClientSettingsFactory() {
  return { host: 'http://localhost:5000' } as GrpcWebClientSettings;
}

# paste the following code in "app.module.ts":
```
provide: [
  HttpClientModule,
  { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
  {
      provide: GRPC_STUDENT_SERVICE_CLIENT_SETTINGS,
      useFactory: GrpcWebClientSettingsFactory
  },
  { provide: GrpcHandler, useClass: GrpcHandler },
]
```