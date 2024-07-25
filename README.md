# vman

vman -l en -f YYYYMMDD -o info.json -t template

	-l	locale	en,fa,hr,ar
	-f	format	YYYYMMDDHHmmss
	-o	output	info.json
	-t	template    ./a/b/template.json

{
	version: '',
	ts: '',
	refs: [
		{ name: "", url: 'https://.../a', ts: '', version: '', type: guthub', branch: 'master' },
		{ name: "", url: 'https://.../b', ts: '', version: '', type: 'gitlab', branch: 'main' },
		{ name: "", url: 'https://.../c', ts: '', version: '', type: 'azuredevops' }
	]
}

git describe --exact-match <commit-id>

GitLab Online
https://gitlab.com/puya-projects/Tap.ERP/-/raw/main/info.json

GitLab Local
http://192.168.10.110/puya-projects/database/puyahandyapp.db/-/raw/main/azure-pipelines.yml

GitHub Online
https://raw.githubusercontent.com/puyacodes/PuyaHandyApp.Front/main/config.json?token=GHSAT0AAAAAACTQ4DV5UW5IWF6X4JNAXDWYZVB7XVA

AzureDevOps
https://dev.azure.com/puyasoft/Tap.ERP/_apis/sourceProviders/TfsGit/filecontents?repository=Tap.ERP&path=/info.json&commitOrBranch=main&api-version=7.0