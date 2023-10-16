#! /bin/bash

sourceFile="./MaffeMaandag.GrpcWeb/Protos/maffeMaandag.proto"
targetLocations=( "./MaffeMaandag.Client/Protos/" "../MaffeMaandag-app/proto/" )

for folder in "${targetLocations[@]}"
do
   : 
   cp $sourceFile $folder
done