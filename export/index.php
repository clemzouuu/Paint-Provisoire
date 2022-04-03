<?php 

	// Include the main TCPDF library (search for installation path).
	require_once('TCPDF-main/examples/tcpdf_include.php');

	// create new PDF document
	$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

	 

	// add a page
	$pdf->AddPage();

	$html = '<svg viewBox="0 0 500 500" width="200" height="200" style="position: absolute; transition: transform 0.5s ease 0s; outline: none; left: 586px; top: 413px;"><polygon y="0" x="0" points="170,50 50,300 300,300" data-scale="1.4000000000000004" style="fill: red; stroke: black; transform: scale(1.4);"></polygon></svg><svg viewBox="0 0 50 50" width="150" height="50" style="position: absolute; transition: transform 0.5s ease 0s; background-color: yellow; outline: none; left: 413px; top: 333px;"><text y="25" x="0" width="30" height="30" Font-family="Arial" data-scale="1" style="fill: red; background-color: yellow;">eaezaeaz</text></svg>';
	 
	$pdf->writeHTML($html, true, false, true, false, '');
	

	// reset pointer to the last page
	$pdf->lastPage();
	//Close and output PDF document
	$pdf->Output('example.pdf', 'I');

?>

