import bodyParser from 'body-parser';

class Routers{
    private bp: bodyParser.BodyParser;
    
    router(App){
        App.use(this.bp.json());
        App.use(this.bp.urlencoded({extended:false}));
        
    }
}

export default new Routers;