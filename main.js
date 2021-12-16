
function setup()
{
    canvas = createcanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseRealeased(classifyCanvas);
    synth = window.speechSynthesis;
}
function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}