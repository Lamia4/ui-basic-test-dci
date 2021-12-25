<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="React" FOLDED="false" ID="ID_532864800" CREATED="1620197944985" MODIFIED="1620206066180" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false" show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="4" RULE="ON_BRANCH_CREATION"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Javascript-Bibliothek f&#252;r Frontendentwicklung
    </p>
    <p>
      Modularisierung eines Frontends in &quot;Components&quot;.
    </p>
  </body>
</html>

</richcontent>
<node TEXT="Alternativen" POSITION="right" ID="ID_348559506" CREATED="1620205557085" MODIFIED="1620205561221">
<edge COLOR="#ff0000"/>
<node TEXT="Vue" ID="ID_1244311727" CREATED="1620205564949" MODIFIED="1620205569285"/>
<node TEXT="Angular" ID="ID_948567637" CREATED="1620205569688" MODIFIED="1620205574120"/>
</node>
<node TEXT="Benefit" POSITION="right" ID="ID_1001526223" CREATED="1620205577220" MODIFIED="1620205601022">
<edge COLOR="#0000ff"/>
<node TEXT="Deklarativ" ID="ID_1659053429" CREATED="1620205621690" MODIFIED="1620205627718"/>
<node TEXT="Kombinieren von JS und HTML" ID="ID_1732854730" CREATED="1620205627998" MODIFIED="1620205754098">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1813639383" STARTINCLINATION="258;0;" ENDINCLINATION="258;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Erstellen/Rendern von HTML via Javascript
    </p>
  </body>
</html>

</richcontent>
</node>
</node>
<node TEXT="JSX" POSITION="right" ID="ID_1813639383" CREATED="1620205713576" MODIFIED="1620205958183">
<edge COLOR="#00ff00"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      STRINGS/HTML { JS-Statement} STRING...
    </p>
  </body>
</html>

</richcontent>
</node>
<node TEXT="Components" POSITION="right" ID="ID_937020475" CREATED="1620206017206" MODIFIED="1620206022853">
<edge COLOR="#ff00ff"/>
<node TEXT="Props" ID="ID_1153356238" CREATED="1620206378026" MODIFIED="1620206577847"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Apps( props ) {
    </p>
    <p>
      &#160;&#160;&#160;&#160;return (
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{ props.X }
    </p>
    <p>
      &#160;&#160;&#160;&#160;);
    </p>
    <p>
      }
    </p>
    <p>
      
    </p>
    <p>
      Apps( {X} ) {
    </p>
    <p>
      &#160;&#160;&#160;&#160;return (
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{ X }
    </p>
    <p>
      &#160;&#160;&#160;&#160;);
    </p>
    <p>
      }
    </p>
  </body>
</html>

</richcontent>
</node>
<node TEXT="State" ID="ID_1602818592" CREATED="1620206402394" MODIFIED="1620206637860"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      State kann einen initialen Wert haben.
    </p>
  </body>
</html>

</richcontent>
</node>
</node>
</node>
</map>
