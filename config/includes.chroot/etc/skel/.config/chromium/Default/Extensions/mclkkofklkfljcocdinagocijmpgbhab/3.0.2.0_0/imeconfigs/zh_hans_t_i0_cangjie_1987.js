(function() { var e="*",g="\u4e00",h="\u4e2d",k="\u4eba",l="\u5341",m="\u535c",n="\u53e3",p="\u571f",q="\u5927",r="\u5973",s="\u5c38",t="\u5c71",u="\u5eff",v="\u5f13",w="\u5fc3",x="\u6208",y="\u624b",z="\u65e5",A="\u6708",B="\u6728",C="\u6c34",D="\u706b",E="\u7530",F="\u7af9",G="\u7b26",H="\u91d1",I="\u96e3";
function J(f,d){if(0==d)return null;var b={back:0},c=!!(d&1);if(d&4&&c){var a=K[f];if(a)return 1<a.length&&(f=a[0].charAt(a[1]),a[1]^=1,a=f),b.text=a,b}return d&2&&(!c||!/[a-z]/i.test(f))&&(c=L[f])?(b.text=c,b):null};for(var K={"~":"\uff5e","!":"\uff01","@":"\uff20","#":"\uff03",$:"\uffe5","^":"\u2026\u2026","&":"\uff06","*":"\u00d7","(":"\uff08",")":"\uff09","-":"\uff0d",_:"\u2014\u2014","[":"\u3010","]":"\u3011","{":"\uff5b","}":"\uff5d","\\":"\u3001",";":"\uff1b",":":"\uff1a","'":["\u2018\u2019",0],'"':["\u201c\u201d",0],",":"\uff0c",".":"\u3002","<":"\u300a",">":"\u300b","/":"\uff0f","?":"\uff1f"},L={"~":"\uff5e","!":"\uff01","@":"\uff20","#":"\uff03",$:"\uff04","^":"\uff3e","&":"\uff06","*":"\uff0a","(":"\uff08",
")":"\uff09","-":"\uff0d",_:"\uff3f","[":"\uff3b","]":"\uff3d","{":"\uff5b","}":"\uff5d","\\":"\uff3c","|":"\uff5c",";":"\uff1b",":":"\uff1a","'":"\uff07",'"':"\uff02",",":"\uff0c",".":"\uff0e","<":"\uff1c",">":"\uff1e","/":"\uff0f","?":"\uff1f"},M=0;62>M;++M){var N="\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[M];
10>M?L[String(M)]=N:36>M?L[String.fromCharCode(M+87)]=N:L[String.fromCharCode(M+29)]=N};google.elements.ime.loadConfig("zh-hans-t-i0-cangjie-1987",function(){var f={a:z,b:A,c:H,d:B,e:C,f:D,g:p,h:F,i:x,j:l,k:q,l:h,m:g,n:v,o:k,p:w,q:y,r:n,s:s,t:u,u:t,v:r,w:E,x:I,y:m,z:G};return{0:0,1:2,2:!0,3:!1,4:!0,5:!1,6:!0,7:!0,8:!1,9:!0,10:!1,28:!1,30:!1,11:!1,12:!0,31:!0,13:5,14:5,15:5,16:null,19:function(d,b,c){return c&1&&b==e?null:J(b,c)},21:function(d,b){if(d&&!b){var c=d.replace(/[a-z]/g,function(a){return f[a]}),a={};a.text=c;a.back=0;return a}return null},22:/[a-z\'.*]/i,24:/[=.]/,25:/[\-,]/,
26:/[^a-z\'.* \r]/i}}()); })()
