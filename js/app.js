

// creates an html script for the new project card
function createprojHTML(project) {
    const projHTML = `
    			<div class="col-md-3 col-md-push-1 project-imgs">
    				<img class="img-responsive" src="images/report${project.projnum}.jpg" alt="Report${project.projnum} Image" data-toggle="modal" data-target="#project${project.projnum}">
					<h3 class="text-uppercase">Report ${project.projnum}</h3>
					<p class="text-image">Click the above image for details</p>
				</div>
	`

	const modalHTML = 
	
	`
    <!-- Modal -->
    
    <div class="modal fade" id="project${project.projnum}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel${project.projnum}" aria-hidden="true">
        <div class="modal-dialog" style="width:800px; height:500px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel${project.projnum}">Report Presentation ${project.projnum}</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <iframe src="pdfs/ThesisReport-${project.projnum}.pdf#view=fit" style="width:700px; height:450px;" frameborder="0"></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="javascript:window.open('https://stdyildizedu-my.sharepoint.com/:b:/g/personal/sbedir_fbe_yildiz_edu_tr/EfmKKK7L_yRNkRqHCyEKMwgBoGIJbVatWmoTuwpoo3fyMg?e=fMCDDY');">View Report</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
    return [projHTML, modalHTML];
}

function addproject() {
	const newproject = {
    projnum: prompt("Type the number of the new report"),
    
};

	document.getElementById("projectsmaindiv").innerHTML += createprojHTML(newproject)[0];

	document.body.innerHTML += createprojHTML(newproject)[1];

};



function saveproject() {	
	const state = "<pre>" + document.documentElement.outerHTML.replace(/</g,"&lt;") + "</pre>"
	document.getElementById("finallysave").innerHTML += state;
};

