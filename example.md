
`node_modules` 配下も含めて、 PJ をまるごと別 PC にもってくれば、 `npm install` せずに実行できる。  
*** ただし、 *** `node_modules` の各 Package (Module) 配下の package.json 内には、`npm install` した時の PC 内のインストールパス(絶対パス)が "_where" プロパティとして記録されている。  
絶対パスなので、ユーザー名など個人情報が含まれる可能性があるので、消しておくのが無難。(消しても動作に影響はない)  
これを消してくれるのが [`removeNPMAbsolutePaths`](https://www.npmjs.com/package/removeNPMAbsolutePaths) という Package (Module) 。  
`npm install -g removeNPMAbsolutePaths` して使えるようにしておくといい。  
添付の `install-from-local\removeNPMAbsolutePaths-2.0.0.zip` からインストールしてもいい。