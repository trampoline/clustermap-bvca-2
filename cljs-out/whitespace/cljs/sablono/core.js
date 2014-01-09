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
var G__33357__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__33356 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__33356,0,null);var body = cljs.core.nthnext.call(null,vec__33356,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__33357 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33357__delegate.call(this,args);};
G__33357.cljs$lang$maxFixedArity = 0;
G__33357.cljs$lang$applyTo = (function (arglist__33358){
var args = cljs.core.seq(arglist__33358);
return G__33357__delegate(args);
});
G__33357.cljs$core$IFn$_invoke$arity$variadic = G__33357__delegate;
return G__33357;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__33363(s__33364){return (new cljs.core.LazySeq(null,(function (){var s__33364__$1 = s__33364;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33364__$1);if(temp__4092__auto__)
{var s__33364__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33364__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33364__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33366 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33365 = 0;while(true){
if((i__33365 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__33365);cljs.core.chunk_append.call(null,b__33366,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__33367 = (i__33365 + 1);
i__33365 = G__33367;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33366),iter__33363.call(null,cljs.core.chunk_rest.call(null,s__33364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33366),null);
}
} else
{var args = cljs.core.first.call(null,s__33364__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__33363.call(null,cljs.core.rest.call(null,s__33364__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__33372(s__33373){return (new cljs.core.LazySeq(null,(function (){var s__33373__$1 = s__33373;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33373__$1);if(temp__4092__auto__)
{var s__33373__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33373__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33373__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33375 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33374 = 0;while(true){
if((i__33374 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__33374);cljs.core.chunk_append.call(null,b__33375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__33376 = (i__33374 + 1);
i__33374 = G__33376;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33375),iter__33372.call(null,cljs.core.chunk_rest.call(null,s__33373__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33375),null);
}
} else
{var script = cljs.core.first.call(null,s__33373__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__33372.call(null,cljs.core.rest.call(null,s__33373__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__33377){
var scripts = cljs.core.seq(arglist__33377);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__33382(s__33383){return (new cljs.core.LazySeq(null,(function (){var s__33383__$1 = s__33383;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33383__$1);if(temp__4092__auto__)
{var s__33383__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33383__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33383__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33385 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33384 = 0;while(true){
if((i__33384 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__33384);cljs.core.chunk_append.call(null,b__33385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__33386 = (i__33384 + 1);
i__33384 = G__33386;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33385),iter__33382.call(null,cljs.core.chunk_rest.call(null,s__33383__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33385),null);
}
} else
{var style = cljs.core.first.call(null,s__33383__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__33382.call(null,cljs.core.rest.call(null,s__33383__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__33387){
var styles = cljs.core.seq(arglist__33387);
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
sablono.core.link_to33388 = (function() { 
var link_to33388__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to33388 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to33388__delegate.call(this,url,content);};
link_to33388.cljs$lang$maxFixedArity = 1;
link_to33388.cljs$lang$applyTo = (function (arglist__33389){
var url = cljs.core.first(arglist__33389);
var content = cljs.core.rest(arglist__33389);
return link_to33388__delegate(url,content);
});
link_to33388.cljs$core$IFn$_invoke$arity$variadic = link_to33388__delegate;
return link_to33388;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33388);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33390 = (function() { 
var mail_to33390__delegate = function (e_mail,p__33391){var vec__33393 = p__33391;var content = cljs.core.nth.call(null,vec__33393,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to33390 = function (e_mail,var_args){
var p__33391 = null;if (arguments.length > 1) {
  p__33391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to33390__delegate.call(this,e_mail,p__33391);};
mail_to33390.cljs$lang$maxFixedArity = 1;
mail_to33390.cljs$lang$applyTo = (function (arglist__33394){
var e_mail = cljs.core.first(arglist__33394);
var p__33391 = cljs.core.rest(arglist__33394);
return mail_to33390__delegate(e_mail,p__33391);
});
mail_to33390.cljs$core$IFn$_invoke$arity$variadic = mail_to33390__delegate;
return mail_to33390;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33390);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33395 = (function unordered_list33395(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__33400(s__33401){return (new cljs.core.LazySeq(null,(function (){var s__33401__$1 = s__33401;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33401__$1);if(temp__4092__auto__)
{var s__33401__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33401__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33401__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33403 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33402 = 0;while(true){
if((i__33402 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33402);cljs.core.chunk_append.call(null,b__33403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33404 = (i__33402 + 1);
i__33402 = G__33404;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33403),iter__33400.call(null,cljs.core.chunk_rest.call(null,s__33401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33403),null);
}
} else
{var x = cljs.core.first.call(null,s__33401__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33400.call(null,cljs.core.rest.call(null,s__33401__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33395);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33405 = (function ordered_list33405(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__33410(s__33411){return (new cljs.core.LazySeq(null,(function (){var s__33411__$1 = s__33411;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33411__$1);if(temp__4092__auto__)
{var s__33411__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33411__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33411__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33413 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33412 = 0;while(true){
if((i__33412 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33412);cljs.core.chunk_append.call(null,b__33413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33414 = (i__33412 + 1);
i__33412 = G__33414;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33413),iter__33410.call(null,cljs.core.chunk_rest.call(null,s__33411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33413),null);
}
} else
{var x = cljs.core.first.call(null,s__33411__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33410.call(null,cljs.core.rest.call(null,s__33411__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33405);
/**
* Create an image element.
*/
sablono.core.image33415 = (function() {
var image33415 = null;
var image33415__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image33415__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image33415 = function(src,alt){
switch(arguments.length){
case 1:
return image33415__1.call(this,src);
case 2:
return image33415__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33415.cljs$core$IFn$_invoke$arity$1 = image33415__1;
image33415.cljs$core$IFn$_invoke$arity$2 = image33415__2;
return image33415;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33415);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__33416_SHARP_,p2__33417_SHARP_){return [cljs.core.str(p1__33416_SHARP_),cljs.core.str("["),cljs.core.str(p2__33417_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__33418_SHARP_,p2__33419_SHARP_){return [cljs.core.str(p1__33418_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33419_SHARP_)].join('');
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
sablono.core.hidden_field33420 = (function() {
var hidden_field33420 = null;
var hidden_field33420__1 = (function (name){return hidden_field33420.call(null,name,null);
});
var hidden_field33420__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field33420 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field33420__1.call(this,name);
case 2:
return hidden_field33420__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33420.cljs$core$IFn$_invoke$arity$1 = hidden_field33420__1;
hidden_field33420.cljs$core$IFn$_invoke$arity$2 = hidden_field33420__2;
return hidden_field33420;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33420);
/**
* Creates a new text input field.
*/
sablono.core.text_field33421 = (function() {
var text_field33421 = null;
var text_field33421__1 = (function (name){return text_field33421.call(null,name,null);
});
var text_field33421__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field33421 = function(name,value){
switch(arguments.length){
case 1:
return text_field33421__1.call(this,name);
case 2:
return text_field33421__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33421.cljs$core$IFn$_invoke$arity$1 = text_field33421__1;
text_field33421.cljs$core$IFn$_invoke$arity$2 = text_field33421__2;
return text_field33421;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33421);
/**
* Creates a new password field.
*/
sablono.core.password_field33422 = (function() {
var password_field33422 = null;
var password_field33422__1 = (function (name){return password_field33422.call(null,name,null);
});
var password_field33422__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field33422 = function(name,value){
switch(arguments.length){
case 1:
return password_field33422__1.call(this,name);
case 2:
return password_field33422__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33422.cljs$core$IFn$_invoke$arity$1 = password_field33422__1;
password_field33422.cljs$core$IFn$_invoke$arity$2 = password_field33422__2;
return password_field33422;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33422);
/**
* Creates a new email input field.
*/
sablono.core.email_field33423 = (function() {
var email_field33423 = null;
var email_field33423__1 = (function (name){return email_field33423.call(null,name,null);
});
var email_field33423__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field33423 = function(name,value){
switch(arguments.length){
case 1:
return email_field33423__1.call(this,name);
case 2:
return email_field33423__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33423.cljs$core$IFn$_invoke$arity$1 = email_field33423__1;
email_field33423.cljs$core$IFn$_invoke$arity$2 = email_field33423__2;
return email_field33423;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33423);
/**
* Creates a check box.
*/
sablono.core.check_box33424 = (function() {
var check_box33424 = null;
var check_box33424__1 = (function (name){return check_box33424.call(null,name,null);
});
var check_box33424__2 = (function (name,checked_QMARK_){return check_box33424.call(null,name,checked_QMARK_,"true");
});
var check_box33424__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box33424 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33424__1.call(this,name);
case 2:
return check_box33424__2.call(this,name,checked_QMARK_);
case 3:
return check_box33424__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33424.cljs$core$IFn$_invoke$arity$1 = check_box33424__1;
check_box33424.cljs$core$IFn$_invoke$arity$2 = check_box33424__2;
check_box33424.cljs$core$IFn$_invoke$arity$3 = check_box33424__3;
return check_box33424;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33424);
/**
* Creates a radio button.
*/
sablono.core.radio_button33425 = (function() {
var radio_button33425 = null;
var radio_button33425__1 = (function (group){return radio_button33425.call(null,group,null);
});
var radio_button33425__2 = (function (group,checked_QMARK_){return radio_button33425.call(null,group,checked_QMARK_,"true");
});
var radio_button33425__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button33425 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33425__1.call(this,group);
case 2:
return radio_button33425__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33425__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33425.cljs$core$IFn$_invoke$arity$1 = radio_button33425__1;
radio_button33425.cljs$core$IFn$_invoke$arity$2 = radio_button33425__2;
radio_button33425.cljs$core$IFn$_invoke$arity$3 = radio_button33425__3;
return radio_button33425;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33425);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33426 = (function() {
var select_options33426 = null;
var select_options33426__1 = (function (coll){return select_options33426.call(null,coll,null);
});
var select_options33426__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__33435(s__33436){return (new cljs.core.LazySeq(null,(function (){var s__33436__$1 = s__33436;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33436__$1);if(temp__4092__auto__)
{var s__33436__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33436__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33436__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33438 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33437 = 0;while(true){
if((i__33437 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33437);cljs.core.chunk_append.call(null,b__33438,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33441 = x;var text = cljs.core.nth.call(null,vec__33441,0,null);var val = cljs.core.nth.call(null,vec__33441,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33426.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__33443 = (i__33437 + 1);
i__33437 = G__33443;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33438),iter__33435.call(null,cljs.core.chunk_rest.call(null,s__33436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33438),null);
}
} else
{var x = cljs.core.first.call(null,s__33436__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33442 = x;var text = cljs.core.nth.call(null,vec__33442,0,null);var val = cljs.core.nth.call(null,vec__33442,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33426.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33435.call(null,cljs.core.rest.call(null,s__33436__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options33426 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33426__1.call(this,coll);
case 2:
return select_options33426__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33426.cljs$core$IFn$_invoke$arity$1 = select_options33426__1;
select_options33426.cljs$core$IFn$_invoke$arity$2 = select_options33426__2;
return select_options33426;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33426);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33444 = (function() {
var drop_down33444 = null;
var drop_down33444__2 = (function (name,options){return drop_down33444.call(null,name,options,null);
});
var drop_down33444__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33444 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33444__2.call(this,name,options);
case 3:
return drop_down33444__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33444.cljs$core$IFn$_invoke$arity$2 = drop_down33444__2;
drop_down33444.cljs$core$IFn$_invoke$arity$3 = drop_down33444__3;
return drop_down33444;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33444);
/**
* Creates a text area element.
*/
sablono.core.text_area33445 = (function() {
var text_area33445 = null;
var text_area33445__1 = (function (name){return text_area33445.call(null,name,null);
});
var text_area33445__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area33445 = function(name,value){
switch(arguments.length){
case 1:
return text_area33445__1.call(this,name);
case 2:
return text_area33445__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33445.cljs$core$IFn$_invoke$arity$1 = text_area33445__1;
text_area33445.cljs$core$IFn$_invoke$arity$2 = text_area33445__2;
return text_area33445;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33445);
/**
* Creates a file upload input.
*/
sablono.core.file_upload33446 = (function file_upload33446(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload33446);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33447 = (function label33447(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33447);
/**
* Creates a submit button.
*/
sablono.core.submit_button33448 = (function submit_button33448(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33448);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33449 = (function reset_button33449(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33449);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33450 = (function() { 
var form_to33450__delegate = function (p__33451,body){var vec__33453 = p__33451;var method = cljs.core.nth.call(null,vec__33453,0,null);var action = cljs.core.nth.call(null,vec__33453,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33450 = function (p__33451,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to33450__delegate.call(this,p__33451,body);};
form_to33450.cljs$lang$maxFixedArity = 1;
form_to33450.cljs$lang$applyTo = (function (arglist__33454){
var p__33451 = cljs.core.first(arglist__33454);
var body = cljs.core.rest(arglist__33454);
return form_to33450__delegate(p__33451,body);
});
form_to33450.cljs$core$IFn$_invoke$arity$variadic = form_to33450__delegate;
return form_to33450;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33450);
