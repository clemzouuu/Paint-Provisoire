<?php 

	// Include the main TCPDF library (search for installation path).
	require_once('tcpdf_include.php');

	// create new PDF document
	$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

	// set document information
	$pdf->SetCreator(PDF_CREATOR);
	$pdf->SetAuthor('Your Blog Coach');
	$pdf->SetTitle('Heading');

	// set default header data
	$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 006', PDF_HEADER_STRING);

	// set header and footer fonts
	$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
	$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

	// set default monospaced font
	$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

	// set margins
	$pdf->SetMargins(20, 20, 20);
	$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
	$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

	// set auto page breaks
	$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

	// set image scale factor
	$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

	// add a page
	$pdf->AddPage();

	$html = '<h4>HTML to PDF Using TCPDF</h4><br><p>by yourblogcoach</p>';
	 
	$pdf->writeHTML($html, true, false, true, false, '');
	
        // add a page
	$pdf->AddPage();

	$html = '<h4>Second page</h4>';
	
	$pdf->writeHTML($html, true, false, true, false, '');

	// reset pointer to the last page
	$pdf->lastPage();
	//Close and output PDF document
	$pdf->Output('example.pdf', 'I');

?>