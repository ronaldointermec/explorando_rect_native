module.exports = {
    assets: ['./estudos/assets/fonts'],

    dependencies: {
            "react-native-sqlite-storage": {
          platforms: {
            android: {
              sourceDir:
                "../node_modules/react-native-sqlite-storage/platforms/android-native",
              packageImportPath: "import io.liteglue.SQLitePluginPackage;",
              packageInstance: "new SQLitePluginPackage()"
            }
          }
        }
    
      }
}