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
var G__34349__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34348 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34348,0,null);var body = cljs.core.nthnext.call(null,vec__34348,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34349 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34349__delegate.call(this,args);};
G__34349.cljs$lang$maxFixedArity = 0;
G__34349.cljs$lang$applyTo = (function (arglist__34350){
var args = cljs.core.seq(arglist__34350);
return G__34349__delegate(args);
});
G__34349.cljs$core$IFn$_invoke$arity$variadic = G__34349__delegate;
return G__34349;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__34355(s__34356){return (new cljs.core.LazySeq(null,(function (){var s__34356__$1 = s__34356;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34356__$1);if(temp__4092__auto__)
{var s__34356__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34356__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34356__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34358 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34357 = 0;while(true){
if((i__34357 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__34357);cljs.core.chunk_append.call(null,b__34358,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34359 = (i__34357 + 1);
i__34357 = G__34359;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34358),iter__34355.call(null,cljs.core.chunk_rest.call(null,s__34356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34358),null);
}
} else
{var args = cljs.core.first.call(null,s__34356__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34355.call(null,cljs.core.rest.call(null,s__34356__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__34364(s__34365){return (new cljs.core.LazySeq(null,(function (){var s__34365__$1 = s__34365;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34365__$1);if(temp__4092__auto__)
{var s__34365__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34365__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34365__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34367 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34366 = 0;while(true){
if((i__34366 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__34366);cljs.core.chunk_append.call(null,b__34367,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__34368 = (i__34366 + 1);
i__34366 = G__34368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34367),iter__34364.call(null,cljs.core.chunk_rest.call(null,s__34365__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34367),null);
}
} else
{var script = cljs.core.first.call(null,s__34365__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__34364.call(null,cljs.core.rest.call(null,s__34365__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__34369){
var scripts = cljs.core.seq(arglist__34369);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__34374(s__34375){return (new cljs.core.LazySeq(null,(function (){var s__34375__$1 = s__34375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34375__$1);if(temp__4092__auto__)
{var s__34375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34375__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34375__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34377 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34376 = 0;while(true){
if((i__34376 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__34376);cljs.core.chunk_append.call(null,b__34377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34378 = (i__34376 + 1);
i__34376 = G__34378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34377),iter__34374.call(null,cljs.core.chunk_rest.call(null,s__34375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34377),null);
}
} else
{var style = cljs.core.first.call(null,s__34375__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34374.call(null,cljs.core.rest.call(null,s__34375__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__34379){
var styles = cljs.core.seq(arglist__34379);
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
sablono.core.link_to34380 = (function() { 
var link_to34380__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34380 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34380__delegate.call(this,url,content);};
link_to34380.cljs$lang$maxFixedArity = 1;
link_to34380.cljs$lang$applyTo = (function (arglist__34381){
var url = cljs.core.first(arglist__34381);
var content = cljs.core.rest(arglist__34381);
return link_to34380__delegate(url,content);
});
link_to34380.cljs$core$IFn$_invoke$arity$variadic = link_to34380__delegate;
return link_to34380;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34380);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34382 = (function() { 
var mail_to34382__delegate = function (e_mail,p__34383){var vec__34385 = p__34383;var content = cljs.core.nth.call(null,vec__34385,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34382 = function (e_mail,var_args){
var p__34383 = null;if (arguments.length > 1) {
  p__34383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34382__delegate.call(this,e_mail,p__34383);};
mail_to34382.cljs$lang$maxFixedArity = 1;
mail_to34382.cljs$lang$applyTo = (function (arglist__34386){
var e_mail = cljs.core.first(arglist__34386);
var p__34383 = cljs.core.rest(arglist__34386);
return mail_to34382__delegate(e_mail,p__34383);
});
mail_to34382.cljs$core$IFn$_invoke$arity$variadic = mail_to34382__delegate;
return mail_to34382;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34382);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34387 = (function unordered_list34387(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__34392(s__34393){return (new cljs.core.LazySeq(null,(function (){var s__34393__$1 = s__34393;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34393__$1);if(temp__4092__auto__)
{var s__34393__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34393__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34393__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34395 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34394 = 0;while(true){
if((i__34394 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34394);cljs.core.chunk_append.call(null,b__34395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34396 = (i__34394 + 1);
i__34394 = G__34396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34395),iter__34392.call(null,cljs.core.chunk_rest.call(null,s__34393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34395),null);
}
} else
{var x = cljs.core.first.call(null,s__34393__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34392.call(null,cljs.core.rest.call(null,s__34393__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34387);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34397 = (function ordered_list34397(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__34402(s__34403){return (new cljs.core.LazySeq(null,(function (){var s__34403__$1 = s__34403;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34403__$1);if(temp__4092__auto__)
{var s__34403__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34403__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34403__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34405 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34404 = 0;while(true){
if((i__34404 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34404);cljs.core.chunk_append.call(null,b__34405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34406 = (i__34404 + 1);
i__34404 = G__34406;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),iter__34402.call(null,cljs.core.chunk_rest.call(null,s__34403__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),null);
}
} else
{var x = cljs.core.first.call(null,s__34403__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34402.call(null,cljs.core.rest.call(null,s__34403__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34397);
/**
* Create an image element.
*/
sablono.core.image34407 = (function() {
var image34407 = null;
var image34407__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34407__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34407 = function(src,alt){
switch(arguments.length){
case 1:
return image34407__1.call(this,src);
case 2:
return image34407__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34407.cljs$core$IFn$_invoke$arity$1 = image34407__1;
image34407.cljs$core$IFn$_invoke$arity$2 = image34407__2;
return image34407;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34407);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34408_SHARP_,p2__34409_SHARP_){return [cljs.core.str(p1__34408_SHARP_),cljs.core.str("["),cljs.core.str(p2__34409_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34410_SHARP_,p2__34411_SHARP_){return [cljs.core.str(p1__34410_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34411_SHARP_)].join('');
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
sablono.core.hidden_field34412 = (function() {
var hidden_field34412 = null;
var hidden_field34412__1 = (function (name){return hidden_field34412.call(null,name,null);
});
var hidden_field34412__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34412 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34412__1.call(this,name);
case 2:
return hidden_field34412__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34412.cljs$core$IFn$_invoke$arity$1 = hidden_field34412__1;
hidden_field34412.cljs$core$IFn$_invoke$arity$2 = hidden_field34412__2;
return hidden_field34412;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34412);
/**
* Creates a new text input field.
*/
sablono.core.text_field34413 = (function() {
var text_field34413 = null;
var text_field34413__1 = (function (name){return text_field34413.call(null,name,null);
});
var text_field34413__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field34413 = function(name,value){
switch(arguments.length){
case 1:
return text_field34413__1.call(this,name);
case 2:
return text_field34413__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34413.cljs$core$IFn$_invoke$arity$1 = text_field34413__1;
text_field34413.cljs$core$IFn$_invoke$arity$2 = text_field34413__2;
return text_field34413;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34413);
/**
* Creates a new password field.
*/
sablono.core.password_field34414 = (function() {
var password_field34414 = null;
var password_field34414__1 = (function (name){return password_field34414.call(null,name,null);
});
var password_field34414__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field34414 = function(name,value){
switch(arguments.length){
case 1:
return password_field34414__1.call(this,name);
case 2:
return password_field34414__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34414.cljs$core$IFn$_invoke$arity$1 = password_field34414__1;
password_field34414.cljs$core$IFn$_invoke$arity$2 = password_field34414__2;
return password_field34414;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34414);
/**
* Creates a new email input field.
*/
sablono.core.email_field34415 = (function() {
var email_field34415 = null;
var email_field34415__1 = (function (name){return email_field34415.call(null,name,null);
});
var email_field34415__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field34415 = function(name,value){
switch(arguments.length){
case 1:
return email_field34415__1.call(this,name);
case 2:
return email_field34415__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34415.cljs$core$IFn$_invoke$arity$1 = email_field34415__1;
email_field34415.cljs$core$IFn$_invoke$arity$2 = email_field34415__2;
return email_field34415;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34415);
/**
* Creates a check box.
*/
sablono.core.check_box34416 = (function() {
var check_box34416 = null;
var check_box34416__1 = (function (name){return check_box34416.call(null,name,null);
});
var check_box34416__2 = (function (name,checked_QMARK_){return check_box34416.call(null,name,checked_QMARK_,"true");
});
var check_box34416__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34416 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34416__1.call(this,name);
case 2:
return check_box34416__2.call(this,name,checked_QMARK_);
case 3:
return check_box34416__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34416.cljs$core$IFn$_invoke$arity$1 = check_box34416__1;
check_box34416.cljs$core$IFn$_invoke$arity$2 = check_box34416__2;
check_box34416.cljs$core$IFn$_invoke$arity$3 = check_box34416__3;
return check_box34416;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34416);
/**
* Creates a radio button.
*/
sablono.core.radio_button34417 = (function() {
var radio_button34417 = null;
var radio_button34417__1 = (function (group){return radio_button34417.call(null,group,null);
});
var radio_button34417__2 = (function (group,checked_QMARK_){return radio_button34417.call(null,group,checked_QMARK_,"true");
});
var radio_button34417__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34417 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34417__1.call(this,group);
case 2:
return radio_button34417__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34417__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34417.cljs$core$IFn$_invoke$arity$1 = radio_button34417__1;
radio_button34417.cljs$core$IFn$_invoke$arity$2 = radio_button34417__2;
radio_button34417.cljs$core$IFn$_invoke$arity$3 = radio_button34417__3;
return radio_button34417;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34417);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34418 = (function() {
var select_options34418 = null;
var select_options34418__1 = (function (coll){return select_options34418.call(null,coll,null);
});
var select_options34418__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__34427(s__34428){return (new cljs.core.LazySeq(null,(function (){var s__34428__$1 = s__34428;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34428__$1);if(temp__4092__auto__)
{var s__34428__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34428__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34428__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34430 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34429 = 0;while(true){
if((i__34429 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34429);cljs.core.chunk_append.call(null,b__34430,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34433 = x;var text = cljs.core.nth.call(null,vec__34433,0,null);var val = cljs.core.nth.call(null,vec__34433,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34418.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34435 = (i__34429 + 1);
i__34429 = G__34435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34430),iter__34427.call(null,cljs.core.chunk_rest.call(null,s__34428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34430),null);
}
} else
{var x = cljs.core.first.call(null,s__34428__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34434 = x;var text = cljs.core.nth.call(null,vec__34434,0,null);var val = cljs.core.nth.call(null,vec__34434,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34418.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34427.call(null,cljs.core.rest.call(null,s__34428__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options34418 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34418__1.call(this,coll);
case 2:
return select_options34418__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34418.cljs$core$IFn$_invoke$arity$1 = select_options34418__1;
select_options34418.cljs$core$IFn$_invoke$arity$2 = select_options34418__2;
return select_options34418;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34418);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34436 = (function() {
var drop_down34436 = null;
var drop_down34436__2 = (function (name,options){return drop_down34436.call(null,name,options,null);
});
var drop_down34436__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34436 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34436__2.call(this,name,options);
case 3:
return drop_down34436__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34436.cljs$core$IFn$_invoke$arity$2 = drop_down34436__2;
drop_down34436.cljs$core$IFn$_invoke$arity$3 = drop_down34436__3;
return drop_down34436;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34436);
/**
* Creates a text area element.
*/
sablono.core.text_area34437 = (function() {
var text_area34437 = null;
var text_area34437__1 = (function (name){return text_area34437.call(null,name,null);
});
var text_area34437__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area34437 = function(name,value){
switch(arguments.length){
case 1:
return text_area34437__1.call(this,name);
case 2:
return text_area34437__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34437.cljs$core$IFn$_invoke$arity$1 = text_area34437__1;
text_area34437.cljs$core$IFn$_invoke$arity$2 = text_area34437__2;
return text_area34437;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34437);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34438 = (function file_upload34438(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34438);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34439 = (function label34439(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34439);
/**
* Creates a submit button.
*/
sablono.core.submit_button34440 = (function submit_button34440(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34440);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34441 = (function reset_button34441(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34441);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34442 = (function() { 
var form_to34442__delegate = function (p__34443,body){var vec__34445 = p__34443;var method = cljs.core.nth.call(null,vec__34445,0,null);var action = cljs.core.nth.call(null,vec__34445,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34442 = function (p__34443,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34442__delegate.call(this,p__34443,body);};
form_to34442.cljs$lang$maxFixedArity = 1;
form_to34442.cljs$lang$applyTo = (function (arglist__34446){
var p__34443 = cljs.core.first(arglist__34446);
var body = cljs.core.rest(arglist__34446);
return form_to34442__delegate(p__34443,body);
});
form_to34442.cljs$core$IFn$_invoke$arity$variadic = form_to34442__delegate;
return form_to34442;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34442);
