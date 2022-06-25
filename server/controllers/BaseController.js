class BaseController{
    constructor(props) {
        this.props = props
    }

    Create(entry){}
    Update(entry){}
    SearchByName(name){}
    GetByPage(page,limit){}
    GetById(id){}
}
export default BaseController;