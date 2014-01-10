// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15594__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15593 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15593,0,null);var body = cljs.core.nthnext.call(null,vec__15593,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15594 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15594__delegate.call(this,args);};
G__15594.cljs$lang$maxFixedArity = 0;
G__15594.cljs$lang$applyTo = (function (arglist__15595){
var args = cljs.core.seq(arglist__15595);
return G__15594__delegate(args);
});
G__15594.cljs$core$IFn$_invoke$arity$variadic = G__15594__delegate;
return G__15594;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15600(s__15601){return (new cljs.core.LazySeq(null,(function (){var s__15601__$1 = s__15601;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15601__$1);if(temp__4092__auto__)
{var s__15601__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15601__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15601__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15603 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15602 = 0;while(true){
if((i__15602 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15602);cljs.core.chunk_append.call(null,b__15603,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15604 = (i__15602 + 1);
i__15602 = G__15604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15603),iter__15600.call(null,cljs.core.chunk_rest.call(null,s__15601__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15603),null);
}
} else
{var args = cljs.core.first.call(null,s__15601__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15600.call(null,cljs.core.rest.call(null,s__15601__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15609(s__15610){return (new cljs.core.LazySeq(null,(function (){var s__15610__$1 = s__15610;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15610__$1);if(temp__4092__auto__)
{var s__15610__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15610__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15610__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15612 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15611 = 0;while(true){
if((i__15611 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15611);cljs.core.chunk_append.call(null,b__15612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15613 = (i__15611 + 1);
i__15611 = G__15613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15612),iter__15609.call(null,cljs.core.chunk_rest.call(null,s__15610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15612),null);
}
} else
{var script = cljs.core.first.call(null,s__15610__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15609.call(null,cljs.core.rest.call(null,s__15610__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__15614){
var scripts = cljs.core.seq(arglist__15614);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15619(s__15620){return (new cljs.core.LazySeq(null,(function (){var s__15620__$1 = s__15620;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15620__$1);if(temp__4092__auto__)
{var s__15620__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15620__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15620__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15622 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15621 = 0;while(true){
if((i__15621 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15621);cljs.core.chunk_append.call(null,b__15622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15623 = (i__15621 + 1);
i__15621 = G__15623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15622),iter__15619.call(null,cljs.core.chunk_rest.call(null,s__15620__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15622),null);
}
} else
{var style = cljs.core.first.call(null,s__15620__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15619.call(null,cljs.core.rest.call(null,s__15620__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15624){
var styles = cljs.core.seq(arglist__15624);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15625 = (function() { 
var link_to15625__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15625 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15625__delegate.call(this,url,content);};
link_to15625.cljs$lang$maxFixedArity = 1;
link_to15625.cljs$lang$applyTo = (function (arglist__15626){
var url = cljs.core.first(arglist__15626);
var content = cljs.core.rest(arglist__15626);
return link_to15625__delegate(url,content);
});
link_to15625.cljs$core$IFn$_invoke$arity$variadic = link_to15625__delegate;
return link_to15625;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15625);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15627 = (function() { 
var mail_to15627__delegate = function (e_mail,p__15628){var vec__15630 = p__15628;var content = cljs.core.nth.call(null,vec__15630,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15627 = function (e_mail,var_args){
var p__15628 = null;if (arguments.length > 1) {
  p__15628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15627__delegate.call(this,e_mail,p__15628);};
mail_to15627.cljs$lang$maxFixedArity = 1;
mail_to15627.cljs$lang$applyTo = (function (arglist__15631){
var e_mail = cljs.core.first(arglist__15631);
var p__15628 = cljs.core.rest(arglist__15631);
return mail_to15627__delegate(e_mail,p__15628);
});
mail_to15627.cljs$core$IFn$_invoke$arity$variadic = mail_to15627__delegate;
return mail_to15627;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15627);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15632 = (function unordered_list15632(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15637(s__15638){return (new cljs.core.LazySeq(null,(function (){var s__15638__$1 = s__15638;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15638__$1);if(temp__4092__auto__)
{var s__15638__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15638__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15638__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15640 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15639 = 0;while(true){
if((i__15639 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15639);cljs.core.chunk_append.call(null,b__15640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15641 = (i__15639 + 1);
i__15639 = G__15641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15640),iter__15637.call(null,cljs.core.chunk_rest.call(null,s__15638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15640),null);
}
} else
{var x = cljs.core.first.call(null,s__15638__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15637.call(null,cljs.core.rest.call(null,s__15638__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15632);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15642 = (function ordered_list15642(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15647(s__15648){return (new cljs.core.LazySeq(null,(function (){var s__15648__$1 = s__15648;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15648__$1);if(temp__4092__auto__)
{var s__15648__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15648__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15648__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15650 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15649 = 0;while(true){
if((i__15649 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15649);cljs.core.chunk_append.call(null,b__15650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15651 = (i__15649 + 1);
i__15649 = G__15651;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15650),iter__15647.call(null,cljs.core.chunk_rest.call(null,s__15648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15650),null);
}
} else
{var x = cljs.core.first.call(null,s__15648__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15647.call(null,cljs.core.rest.call(null,s__15648__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15642);
/**
* Create an image element.
*/
sablono.core.image15652 = (function() {
var image15652 = null;
var image15652__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15652__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15652 = function(src,alt){
switch(arguments.length){
case 1:
return image15652__1.call(this,src);
case 2:
return image15652__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15652.cljs$core$IFn$_invoke$arity$1 = image15652__1;
image15652.cljs$core$IFn$_invoke$arity$2 = image15652__2;
return image15652;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15652);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15653_SHARP_,p2__15654_SHARP_){return [cljs.core.str(p1__15653_SHARP_),cljs.core.str("["),cljs.core.str(p2__15654_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15655_SHARP_,p2__15656_SHARP_){return [cljs.core.str(p1__15655_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15656_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15657 = (function() {
var hidden_field15657 = null;
var hidden_field15657__1 = (function (name){return hidden_field15657.call(null,name,null);
});
var hidden_field15657__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15657 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15657__1.call(this,name);
case 2:
return hidden_field15657__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15657.cljs$core$IFn$_invoke$arity$1 = hidden_field15657__1;
hidden_field15657.cljs$core$IFn$_invoke$arity$2 = hidden_field15657__2;
return hidden_field15657;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15657);
/**
* Creates a new text input field.
*/
sablono.core.text_field15658 = (function() {
var text_field15658 = null;
var text_field15658__1 = (function (name){return text_field15658.call(null,name,null);
});
var text_field15658__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15658 = function(name,value){
switch(arguments.length){
case 1:
return text_field15658__1.call(this,name);
case 2:
return text_field15658__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15658.cljs$core$IFn$_invoke$arity$1 = text_field15658__1;
text_field15658.cljs$core$IFn$_invoke$arity$2 = text_field15658__2;
return text_field15658;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15658);
/**
* Creates a new password field.
*/
sablono.core.password_field15659 = (function() {
var password_field15659 = null;
var password_field15659__1 = (function (name){return password_field15659.call(null,name,null);
});
var password_field15659__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15659 = function(name,value){
switch(arguments.length){
case 1:
return password_field15659__1.call(this,name);
case 2:
return password_field15659__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15659.cljs$core$IFn$_invoke$arity$1 = password_field15659__1;
password_field15659.cljs$core$IFn$_invoke$arity$2 = password_field15659__2;
return password_field15659;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15659);
/**
* Creates a new email input field.
*/
sablono.core.email_field15660 = (function() {
var email_field15660 = null;
var email_field15660__1 = (function (name){return email_field15660.call(null,name,null);
});
var email_field15660__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15660 = function(name,value){
switch(arguments.length){
case 1:
return email_field15660__1.call(this,name);
case 2:
return email_field15660__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15660.cljs$core$IFn$_invoke$arity$1 = email_field15660__1;
email_field15660.cljs$core$IFn$_invoke$arity$2 = email_field15660__2;
return email_field15660;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15660);
/**
* Creates a check box.
*/
sablono.core.check_box15661 = (function() {
var check_box15661 = null;
var check_box15661__1 = (function (name){return check_box15661.call(null,name,null);
});
var check_box15661__2 = (function (name,checked_QMARK_){return check_box15661.call(null,name,checked_QMARK_,"true");
});
var check_box15661__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15661 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15661__1.call(this,name);
case 2:
return check_box15661__2.call(this,name,checked_QMARK_);
case 3:
return check_box15661__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15661.cljs$core$IFn$_invoke$arity$1 = check_box15661__1;
check_box15661.cljs$core$IFn$_invoke$arity$2 = check_box15661__2;
check_box15661.cljs$core$IFn$_invoke$arity$3 = check_box15661__3;
return check_box15661;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15661);
/**
* Creates a radio button.
*/
sablono.core.radio_button15662 = (function() {
var radio_button15662 = null;
var radio_button15662__1 = (function (group){return radio_button15662.call(null,group,null);
});
var radio_button15662__2 = (function (group,checked_QMARK_){return radio_button15662.call(null,group,checked_QMARK_,"true");
});
var radio_button15662__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15662 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15662__1.call(this,group);
case 2:
return radio_button15662__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15662__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15662.cljs$core$IFn$_invoke$arity$1 = radio_button15662__1;
radio_button15662.cljs$core$IFn$_invoke$arity$2 = radio_button15662__2;
radio_button15662.cljs$core$IFn$_invoke$arity$3 = radio_button15662__3;
return radio_button15662;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15662);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15663 = (function() {
var select_options15663 = null;
var select_options15663__1 = (function (coll){return select_options15663.call(null,coll,null);
});
var select_options15663__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15672(s__15673){return (new cljs.core.LazySeq(null,(function (){var s__15673__$1 = s__15673;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15673__$1);if(temp__4092__auto__)
{var s__15673__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15673__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15673__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15675 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15674 = 0;while(true){
if((i__15674 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15674);cljs.core.chunk_append.call(null,b__15675,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15678 = x;var text = cljs.core.nth.call(null,vec__15678,0,null);var val = cljs.core.nth.call(null,vec__15678,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15663.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15680 = (i__15674 + 1);
i__15674 = G__15680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15675),iter__15672.call(null,cljs.core.chunk_rest.call(null,s__15673__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15675),null);
}
} else
{var x = cljs.core.first.call(null,s__15673__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15679 = x;var text = cljs.core.nth.call(null,vec__15679,0,null);var val = cljs.core.nth.call(null,vec__15679,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15663.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15672.call(null,cljs.core.rest.call(null,s__15673__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15663 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15663__1.call(this,coll);
case 2:
return select_options15663__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15663.cljs$core$IFn$_invoke$arity$1 = select_options15663__1;
select_options15663.cljs$core$IFn$_invoke$arity$2 = select_options15663__2;
return select_options15663;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15663);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15681 = (function() {
var drop_down15681 = null;
var drop_down15681__2 = (function (name,options){return drop_down15681.call(null,name,options,null);
});
var drop_down15681__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15681 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15681__2.call(this,name,options);
case 3:
return drop_down15681__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15681.cljs$core$IFn$_invoke$arity$2 = drop_down15681__2;
drop_down15681.cljs$core$IFn$_invoke$arity$3 = drop_down15681__3;
return drop_down15681;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15681);
/**
* Creates a text area element.
*/
sablono.core.text_area15682 = (function() {
var text_area15682 = null;
var text_area15682__1 = (function (name){return text_area15682.call(null,name,null);
});
var text_area15682__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15682 = function(name,value){
switch(arguments.length){
case 1:
return text_area15682__1.call(this,name);
case 2:
return text_area15682__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15682.cljs$core$IFn$_invoke$arity$1 = text_area15682__1;
text_area15682.cljs$core$IFn$_invoke$arity$2 = text_area15682__2;
return text_area15682;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15682);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15683 = (function file_upload15683(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15683);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15684 = (function label15684(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15684);
/**
* Creates a submit button.
*/
sablono.core.submit_button15685 = (function submit_button15685(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15685);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15686 = (function reset_button15686(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15686);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15687 = (function() { 
var form_to15687__delegate = function (p__15688,body){var vec__15690 = p__15688;var method = cljs.core.nth.call(null,vec__15690,0,null);var action = cljs.core.nth.call(null,vec__15690,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15687 = function (p__15688,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15687__delegate.call(this,p__15688,body);};
form_to15687.cljs$lang$maxFixedArity = 1;
form_to15687.cljs$lang$applyTo = (function (arglist__15691){
var p__15688 = cljs.core.first(arglist__15691);
var body = cljs.core.rest(arglist__15691);
return form_to15687__delegate(p__15688,body);
});
form_to15687.cljs$core$IFn$_invoke$arity$variadic = form_to15687__delegate;
return form_to15687;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15687);

//# sourceMappingURL=core.js.map