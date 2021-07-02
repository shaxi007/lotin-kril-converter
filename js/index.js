
let lKh={"g'":'ғ','g`':'ғ',"O'":'Ў','O`':'Ў',"G'":'Ғ',"G`":'Ғ','a':'а','b':'б','v':'в','g':'г','d':'д','e':'е',"yo":'ё','j':'ж','z':'з','i':'и','y':'й','k':'к','l':'л','m':'м','n':'н',"o":'о','p':'п',"r":'р','t':'т','u':'у','f':'ф','x':'х','ts':'ц','ch':'ч','sh':'ш',"'":'ъ','`':'ъ','e':'э','yu':'ю','ya':'я',"o'":'ў',"o`":'ў','q':'қ','h':'ҳ','Yo':'Ё','Ts':'Ц','Ch':'Ч','Sh':'Ш','Yu':'Ю','Ya':'Я','s':'с',"\n":"\n"," ":' '}

let krilH={
	а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'yo',ж:'j',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',т:'t',у:'u',ф:'f',х:'x',ц:'ts',ч:'ch',с:'s',ш:'sh','ъ':'`',э:'e',ю:'yu',я:'ya','ў':'o\'',қ:'q',ғ:"g'",ҳ:'h'
}

kril.onclick= ()=>{
	let sum='',text=textLotin.value
	for(let i=0;i<text.length;++i){
		if(lKh[text[i-1]+text[i]]) {
			sum+=lKh[text[i-1]+text[i]]
			i=i+1
		}
		else if(undefined!==lKh[text[i]]) sum+= lKh[text[i]]
		else if(undefined==lKh[text[i]]) sum+=text[i]
		else sum+= lKh[text[i]]
		if(typeof +text[i]!=='number'&& text[i]!==undefined && text[i]==text[i].toUpperCase() && text[i]!=="'"&&text[i]!=='`') sum+= lKh[text[i].toLowerCase()].toUpperCase()
	}
	textKril.value=sum
}

lotin.onclick=()=>{
	let sum='',text=textKril.value
	for(let i=0;i<text.length;++i){
		if(text[i]==text[i].toUpperCase()){ 
			sum+= krilH[text[i].toLowerCase()][0].toUpperCase()
			if(krilH[text[i].toLowerCase()][1]) sum+=krilH[text[i].toLowerCase()][1]
		}
		if(undefined==krilH[text[i]]) sum+=''
		else  sum+=krilH[text[i]]
	}
	textLotin.value=sum
}

tozala.onclick=()=>{
	textKril.value=''
	textLotin.value=''
}