(function() { function g(d,f){return d.text=f}
var h="replace",k="match",l="",m=" ",n="$1",q="$1$3",r="$1$3$4",s="$1$3$4$5",t="$4$5$6",u="$5$6",v="$6",w="1qaz2wsxedcrfv5tgbyhn",x="7634 =",y="8ik,9ol.0p;\\/\\-",z="=",A="ujm",B="\u02c7",C="\u02c9",D="\u02ca",E="\u02cb",F="\u02d9",G="\u300c\u300d",H="\u300e\u300f",I="\u3105",J="\u3106",K="\u3107",L="\u3108",M="\u3109",N="\u310a",O="\u310b",P="\u310c",Q="\u310d",R="\u310e",S="\u310f",T="\u3110",U="\u3111",V="\u3112",W="\u3113",X="\u3114",aa="\u3115",ba="\u3116",ca="\u3117",da="\u3118",ea="\u3119",
fa="\u311a",ga="\u311b",ha="\u311c",ia="\u311d",ja="\u311e",ka="\u311f",la="\u3120",ma="\u3121",na="\u3122",oa="\u3123",pa="\u3124",qa="\u3125",ra="\u3126",sa="\u3127",ta="\u3128",ua="\u3129";function va(d,f,a){if(0==f)return null;var e={back:0},c=!!(f&1);if(f&4&&c){var b=wa[d];a&&void 0!=a[d]&&(b=a[d]);if(b)return 1<b.length&&(d=b[0].charAt(b[1]),b[1]^=1,b=d),g(e,b),e}return f&2&&(!c||!/[a-z]/i.test(d))&&(d=Y[d])?(g(e,d),e):null};for(var wa={"~":"\uff5e","!":"\uff01","@":"\uff20","#":"\uff03",$:"\uffe5","^":"\u2026\u2026","&":"\uff06","*":"\u00d7","(":"\uff08",")":"\uff09","-":"\uff0d",_:"\u2014\u2014","[":"\u3010","]":"\u3011","{":"\uff5b","}":"\uff5d","\\":"\u3001",";":"\uff1b",":":"\uff1a","'":["\u2018\u2019",0],'"':["\u201c\u201d",0],",":"\uff0c",".":"\u3002","<":"\u300a",">":"\u300b","/":"\uff0f","?":"\uff1f"},Y={"~":"\uff5e","!":"\uff01","@":"\uff20","#":"\uff03",$:"\uff04","^":"\uff3e","&":"\uff06","*":"\uff0a","(":"\uff08",
")":"\uff09","-":"\uff0d",_:"\uff3f","[":"\uff3b","]":"\uff3d","{":"\uff5b","}":"\uff5d","\\":"\uff3c","|":"\uff5c",";":"\uff1b",":":"\uff1a","'":"\uff07",'"':"\uff02",",":"\uff0c",".":"\uff0e","<":"\uff1c",">":"\uff1e","/":"\uff0f","?":"\uff1f"},Z=0;62>Z;++Z){var $="\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[Z];
10>Z?Y[String(Z)]=$:36>Z?Y[String.fromCharCode(Z+87)]=$:Y[String.fromCharCode(Z+29)]=$};google.elements.ime.loadConfig("zh-hant-t-i0-und",function(){var d={a:K,b:ba,c:S,d:R,e:Q,f:U,g:aa,h:da,i:ga,j:ta,k:ha,l:la,m:ua,n:ea,o:ka,p:oa,q:J,r:T,s:O,t:X,u:sa,v:V,w:N,x:P,y:ca,z:L,1:I,2:M,3:B,4:E,5:W,6:D,7:F,8:fa,9:ja,0:na,"-":ra,";":pa,",":ia,".":ma,"/":qa," ":C,"=":z},f=[w,A,y,x],a={0:2,1:2,2:!0,3:!1,4:!0,5:!0,6:!0,7:!0,8:!1,9:!0,10:!1,28:!1,30:!1,11:!1,12:!0,13:50,14:6,15:5,16:null},e={"'":[G,0],'"':[H,0],"-":l,";":l,",":l,".":l,"/":l};a[19]=function(c,b,d){return va(b,d,e)};a[21]=function(c,
b){var a=RegExp("^(([0][1]?[2][3])*)([0]?)([1]?)([2]?)([3]?)$"[h](/[0-3]/g,function(a){return f[a]})),e=/[1qaz2wsxedcrfv5tgbyhn]/,xa=/[ujm]/,ya=/[8ik,9ol.0p;\/\-]/,za=/[7634 =]/,p={};p.back=c.length;if(b)b[k](e)?c=c[h](a,n+b+t):b[k](xa)?c=c[h](a,q+b+u):b[k](ya)?c=c[h](a,r+b+v):b[k](za)&&(c=c[h](a,s+b)),g(p,c[h](m,z));else{a=l;for(e=0;e<c.length;++e)a+=d[c.charAt(e)];g(p,a)}return p};a[22]=/[a-z0-9\-;,.\/ ]/i;a[23]=RegExp("[3]"[h](/[0-3]/g,function(a){return f[a]}));a[24]=/[ ]/;a[25]=/xyz/;a[26]=/xyz/;
return a}()); })()