import Project from '#@/modules/project/model/index.js';



export const ProjectService = {
async create(data) {
return Project.create(data);
},
async findById(id) {
return Project.findById(id);
},
async findAll(filter = {}) {
return Project.find(filter);
},
async update(id, data) {
return Project.findByIdAndUpdate(id, data, { new: true });
},
async remove(id) {
return Project.findByIdAndDelete(id);
}
};