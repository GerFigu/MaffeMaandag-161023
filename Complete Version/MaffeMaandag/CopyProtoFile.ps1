$sourceFile = ".\MaffeMaandag.GrpcWeb\Protos\maffeMaandag.proto"
$targetLocations = @( 
    ".\MaffeMaandag.Client\Protos\maffeMaandag.proto",
    "..\MaffeMaandag-app\proto\maffeMaandag.proto" )


$targetLocations | ForEach-Object { Write-Host "Copying to $_ ..."; Copy-Item $sourceFile $_ }