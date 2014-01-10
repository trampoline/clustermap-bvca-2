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
var G__33486__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__33485 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__33485,0,null);var body = cljs.core.nthnext.call(null,vec__33485,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__33486 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33486__delegate.call(this,args);};
G__33486.cljs$lang$maxFixedArity = 0;
G__33486.cljs$lang$applyTo = (function (arglist__33487){
var args = cljs.core.seq(arglist__33487);
return G__33486__delegate(args);
});
G__33486.cljs$core$IFn$_invoke$arity$variadic = G__33486__delegate;
return G__33486;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__33492(s__33493){return (new cljs.core.LazySeq(null,(function (){var s__33493__$1 = s__33493;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33493__$1);if(temp__4092__auto__)
{var s__33493__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33493__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33493__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33495 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33494 = 0;while(true){
if((i__33494 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__33494);cljs.core.chunk_append.call(null,b__33495,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__33496 = (i__33494 + 1);
i__33494 = G__33496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33495),iter__33492.call(null,cljs.core.chunk_rest.call(null,s__33493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33495),null);
}
} else
{var args = cljs.core.first.call(null,s__33493__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__33492.call(null,cljs.core.rest.call(null,s__33493__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__33501(s__33502){return (new cljs.core.LazySeq(null,(function (){var s__33502__$1 = s__33502;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33502__$1);if(temp__4092__auto__)
{var s__33502__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33502__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33502__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33504 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33503 = 0;while(true){
if((i__33503 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__33503);cljs.core.chunk_append.call(null,b__33504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__33505 = (i__33503 + 1);
i__33503 = G__33505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33504),iter__33501.call(null,cljs.core.chunk_rest.call(null,s__33502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33504),null);
}
} else
{var script = cljs.core.first.call(null,s__33502__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__33501.call(null,cljs.core.rest.call(null,s__33502__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__33506){
var scripts = cljs.core.seq(arglist__33506);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__33511(s__33512){return (new cljs.core.LazySeq(null,(function (){var s__33512__$1 = s__33512;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33512__$1);if(temp__4092__auto__)
{var s__33512__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33512__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33512__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33514 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33513 = 0;while(true){
if((i__33513 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__33513);cljs.core.chunk_append.call(null,b__33514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__33515 = (i__33513 + 1);
i__33513 = G__33515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33514),iter__33511.call(null,cljs.core.chunk_rest.call(null,s__33512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33514),null);
}
} else
{var style = cljs.core.first.call(null,s__33512__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__33511.call(null,cljs.core.rest.call(null,s__33512__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__33516){
var styles = cljs.core.seq(arglist__33516);
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
sablono.core.link_to33517 = (function() { 
var link_to33517__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to33517 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to33517__delegate.call(this,url,content);};
link_to33517.cljs$lang$maxFixedArity = 1;
link_to33517.cljs$lang$applyTo = (function (arglist__33518){
var url = cljs.core.first(arglist__33518);
var content = cljs.core.rest(arglist__33518);
return link_to33517__delegate(url,content);
});
link_to33517.cljs$core$IFn$_invoke$arity$variadic = link_to33517__delegate;
return link_to33517;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33517);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33519 = (function() { 
var mail_to33519__delegate = function (e_mail,p__33520){var vec__33522 = p__33520;var content = cljs.core.nth.call(null,vec__33522,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to33519 = function (e_mail,var_args){
var p__33520 = null;if (arguments.length > 1) {
  p__33520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to33519__delegate.call(this,e_mail,p__33520);};
mail_to33519.cljs$lang$maxFixedArity = 1;
mail_to33519.cljs$lang$applyTo = (function (arglist__33523){
var e_mail = cljs.core.first(arglist__33523);
var p__33520 = cljs.core.rest(arglist__33523);
return mail_to33519__delegate(e_mail,p__33520);
});
mail_to33519.cljs$core$IFn$_invoke$arity$variadic = mail_to33519__delegate;
return mail_to33519;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33519);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33524 = (function unordered_list33524(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__33529(s__33530){return (new cljs.core.LazySeq(null,(function (){var s__33530__$1 = s__33530;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33530__$1);if(temp__4092__auto__)
{var s__33530__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33530__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33530__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33532 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33531 = 0;while(true){
if((i__33531 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33531);cljs.core.chunk_append.call(null,b__33532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33533 = (i__33531 + 1);
i__33531 = G__33533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33532),iter__33529.call(null,cljs.core.chunk_rest.call(null,s__33530__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33532),null);
}
} else
{var x = cljs.core.first.call(null,s__33530__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33529.call(null,cljs.core.rest.call(null,s__33530__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33524);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33534 = (function ordered_list33534(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__33539(s__33540){return (new cljs.core.LazySeq(null,(function (){var s__33540__$1 = s__33540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33540__$1);if(temp__4092__auto__)
{var s__33540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33540__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33540__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33542 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33541 = 0;while(true){
if((i__33541 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33541);cljs.core.chunk_append.call(null,b__33542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33543 = (i__33541 + 1);
i__33541 = G__33543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33542),iter__33539.call(null,cljs.core.chunk_rest.call(null,s__33540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33542),null);
}
} else
{var x = cljs.core.first.call(null,s__33540__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33539.call(null,cljs.core.rest.call(null,s__33540__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33534);
/**
* Create an image element.
*/
sablono.core.image33544 = (function() {
var image33544 = null;
var image33544__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image33544__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image33544 = function(src,alt){
switch(arguments.length){
case 1:
return image33544__1.call(this,src);
case 2:
return image33544__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33544.cljs$core$IFn$_invoke$arity$1 = image33544__1;
image33544.cljs$core$IFn$_invoke$arity$2 = image33544__2;
return image33544;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33544);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__33545_SHARP_,p2__33546_SHARP_){return [cljs.core.str(p1__33545_SHARP_),cljs.core.str("["),cljs.core.str(p2__33546_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__33547_SHARP_,p2__33548_SHARP_){return [cljs.core.str(p1__33547_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33548_SHARP_)].join('');
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
sablono.core.hidden_field33549 = (function() {
var hidden_field33549 = null;
var hidden_field33549__1 = (function (name){return hidden_field33549.call(null,name,null);
});
var hidden_field33549__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field33549 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field33549__1.call(this,name);
case 2:
return hidden_field33549__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33549.cljs$core$IFn$_invoke$arity$1 = hidden_field33549__1;
hidden_field33549.cljs$core$IFn$_invoke$arity$2 = hidden_field33549__2;
return hidden_field33549;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33549);
/**
* Creates a new text input field.
*/
sablono.core.text_field33550 = (function() {
var text_field33550 = null;
var text_field33550__1 = (function (name){return text_field33550.call(null,name,null);
});
var text_field33550__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field33550 = function(name,value){
switch(arguments.length){
case 1:
return text_field33550__1.call(this,name);
case 2:
return text_field33550__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33550.cljs$core$IFn$_invoke$arity$1 = text_field33550__1;
text_field33550.cljs$core$IFn$_invoke$arity$2 = text_field33550__2;
return text_field33550;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33550);
/**
* Creates a new password field.
*/
sablono.core.password_field33551 = (function() {
var password_field33551 = null;
var password_field33551__1 = (function (name){return password_field33551.call(null,name,null);
});
var password_field33551__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field33551 = function(name,value){
switch(arguments.length){
case 1:
return password_field33551__1.call(this,name);
case 2:
return password_field33551__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33551.cljs$core$IFn$_invoke$arity$1 = password_field33551__1;
password_field33551.cljs$core$IFn$_invoke$arity$2 = password_field33551__2;
return password_field33551;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33551);
/**
* Creates a new email input field.
*/
sablono.core.email_field33552 = (function() {
var email_field33552 = null;
var email_field33552__1 = (function (name){return email_field33552.call(null,name,null);
});
var email_field33552__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field33552 = function(name,value){
switch(arguments.length){
case 1:
return email_field33552__1.call(this,name);
case 2:
return email_field33552__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33552.cljs$core$IFn$_invoke$arity$1 = email_field33552__1;
email_field33552.cljs$core$IFn$_invoke$arity$2 = email_field33552__2;
return email_field33552;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33552);
/**
* Creates a check box.
*/
sablono.core.check_box33553 = (function() {
var check_box33553 = null;
var check_box33553__1 = (function (name){return check_box33553.call(null,name,null);
});
var check_box33553__2 = (function (name,checked_QMARK_){return check_box33553.call(null,name,checked_QMARK_,"true");
});
var check_box33553__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box33553 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33553__1.call(this,name);
case 2:
return check_box33553__2.call(this,name,checked_QMARK_);
case 3:
return check_box33553__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33553.cljs$core$IFn$_invoke$arity$1 = check_box33553__1;
check_box33553.cljs$core$IFn$_invoke$arity$2 = check_box33553__2;
check_box33553.cljs$core$IFn$_invoke$arity$3 = check_box33553__3;
return check_box33553;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33553);
/**
* Creates a radio button.
*/
sablono.core.radio_button33554 = (function() {
var radio_button33554 = null;
var radio_button33554__1 = (function (group){return radio_button33554.call(null,group,null);
});
var radio_button33554__2 = (function (group,checked_QMARK_){return radio_button33554.call(null,group,checked_QMARK_,"true");
});
var radio_button33554__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button33554 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33554__1.call(this,group);
case 2:
return radio_button33554__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33554__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33554.cljs$core$IFn$_invoke$arity$1 = radio_button33554__1;
radio_button33554.cljs$core$IFn$_invoke$arity$2 = radio_button33554__2;
radio_button33554.cljs$core$IFn$_invoke$arity$3 = radio_button33554__3;
return radio_button33554;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33554);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33555 = (function() {
var select_options33555 = null;
var select_options33555__1 = (function (coll){return select_options33555.call(null,coll,null);
});
var select_options33555__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__33564(s__33565){return (new cljs.core.LazySeq(null,(function (){var s__33565__$1 = s__33565;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33565__$1);if(temp__4092__auto__)
{var s__33565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33565__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33565__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33567 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33566 = 0;while(true){
if((i__33566 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33566);cljs.core.chunk_append.call(null,b__33567,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33570 = x;var text = cljs.core.nth.call(null,vec__33570,0,null);var val = cljs.core.nth.call(null,vec__33570,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33555.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__33572 = (i__33566 + 1);
i__33566 = G__33572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33567),iter__33564.call(null,cljs.core.chunk_rest.call(null,s__33565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33567),null);
}
} else
{var x = cljs.core.first.call(null,s__33565__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33571 = x;var text = cljs.core.nth.call(null,vec__33571,0,null);var val = cljs.core.nth.call(null,vec__33571,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33555.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33564.call(null,cljs.core.rest.call(null,s__33565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options33555 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33555__1.call(this,coll);
case 2:
return select_options33555__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33555.cljs$core$IFn$_invoke$arity$1 = select_options33555__1;
select_options33555.cljs$core$IFn$_invoke$arity$2 = select_options33555__2;
return select_options33555;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33555);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33573 = (function() {
var drop_down33573 = null;
var drop_down33573__2 = (function (name,options){return drop_down33573.call(null,name,options,null);
});
var drop_down33573__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33573 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33573__2.call(this,name,options);
case 3:
return drop_down33573__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33573.cljs$core$IFn$_invoke$arity$2 = drop_down33573__2;
drop_down33573.cljs$core$IFn$_invoke$arity$3 = drop_down33573__3;
return drop_down33573;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33573);
/**
* Creates a text area element.
*/
sablono.core.text_area33574 = (function() {
var text_area33574 = null;
var text_area33574__1 = (function (name){return text_area33574.call(null,name,null);
});
var text_area33574__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area33574 = function(name,value){
switch(arguments.length){
case 1:
return text_area33574__1.call(this,name);
case 2:
return text_area33574__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33574.cljs$core$IFn$_invoke$arity$1 = text_area33574__1;
text_area33574.cljs$core$IFn$_invoke$arity$2 = text_area33574__2;
return text_area33574;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33574);
/**
* Creates a file upload input.
*/
sablono.core.file_upload33575 = (function file_upload33575(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload33575);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33576 = (function label33576(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33576);
/**
* Creates a submit button.
*/
sablono.core.submit_button33577 = (function submit_button33577(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33577);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33578 = (function reset_button33578(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33578);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33579 = (function() { 
var form_to33579__delegate = function (p__33580,body){var vec__33582 = p__33580;var method = cljs.core.nth.call(null,vec__33582,0,null);var action = cljs.core.nth.call(null,vec__33582,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33579 = function (p__33580,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to33579__delegate.call(this,p__33580,body);};
form_to33579.cljs$lang$maxFixedArity = 1;
form_to33579.cljs$lang$applyTo = (function (arglist__33583){
var p__33580 = cljs.core.first(arglist__33583);
var body = cljs.core.rest(arglist__33583);
return form_to33579__delegate(p__33580,body);
});
form_to33579.cljs$core$IFn$_invoke$arity$variadic = form_to33579__delegate;
return form_to33579;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33579);
