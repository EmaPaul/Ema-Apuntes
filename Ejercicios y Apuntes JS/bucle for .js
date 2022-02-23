for(var i=0;i<=100;i++){
	// bloque de codigo
}
//------------------------------
for(var i=1;i<=100;i=i+1){
	console.log(i);
}

function imprime_1_al_n(n){
	for(var i=1;i<=n;i=i+1){
	console.log(i);
}
}

function imprime_1_al_n(n){
	for(var i=1;i<=n;i=i+1){
	if(i%2===0){
		console.log(i);
	}
	if(i>200){
		for (var j=0; j<10; j=j+1){
			console.log(j);
		}
		return; 
	}
}
}


imprime_1_al_n(201);

function matriz(n,m){
	for(var i=0;i<n;i=i+1){
		for(var j=0;j<m;j=j+1){
			console.log(i+' '+j);
		}
	}
}

while(condicion){
	//algun codigo que el usuario ponga
}

var count=1;
while(count<6){
	console.log("count es:"+count);
	count=count+1;
}

var i=0;
while(i<100){
	console.log(i);
	i=i+1;
}

var j=0;
while(j<100){
	console.log(j);
	j=j+1;
}


function matriz(n,m){
var i=0;
var j=0;
while(i<n){
	while(j<m){
		console.log(i,j);
		j=j+1;
		
	}
	j=0;
	i=i+1;
}
}