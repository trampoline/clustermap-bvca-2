// Compiled by ClojureScript 0.0-2268
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__18445__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18444 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18444,(0),null);var body = cljs.core.nthnext.call(null,vec__18444,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18445 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18445__delegate.call(this,args);};
G__18445.cljs$lang$maxFixedArity = 0;
G__18445.cljs$lang$applyTo = (function (arglist__18446){
var args = cljs.core.seq(arglist__18446);
return G__18445__delegate(args);
});
G__18445.cljs$core$IFn$_invoke$arity$variadic = G__18445__delegate;
return G__18445;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__18451(s__18452){return (new cljs.core.LazySeq(null,(function (){var s__18452__$1 = s__18452;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18452__$1);if(temp__4126__auto__)
{var s__18452__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18452__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18452__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18454 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18453 = (0);while(true){
if((i__18453 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__18453);cljs.core.chunk_append.call(null,b__18454,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18455 = (i__18453 + (1));
i__18453 = G__18455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18454),iter__18451.call(null,cljs.core.chunk_rest.call(null,s__18452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18454),null);
}
} else
{var args = cljs.core.first.call(null,s__18452__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18451.call(null,cljs.core.rest.call(null,s__18452__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__18460(s__18461){return (new cljs.core.LazySeq(null,(function (){var s__18461__$1 = s__18461;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18461__$1);if(temp__4126__auto__)
{var s__18461__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18461__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18461__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18463 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18462 = (0);while(true){
if((i__18462 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__18462);cljs.core.chunk_append.call(null,b__18463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18464 = (i__18462 + (1));
i__18462 = G__18464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18463),iter__18460.call(null,cljs.core.chunk_rest.call(null,s__18461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18463),null);
}
} else
{var style = cljs.core.first.call(null,s__18461__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18460.call(null,cljs.core.rest.call(null,s__18461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18465){
var styles = cljs.core.seq(arglist__18465);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to18466 = (function() { 
var link_to18466__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18466 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18466__delegate.call(this,url,content);};
link_to18466.cljs$lang$maxFixedArity = 1;
link_to18466.cljs$lang$applyTo = (function (arglist__18467){
var url = cljs.core.first(arglist__18467);
var content = cljs.core.rest(arglist__18467);
return link_to18466__delegate(url,content);
});
link_to18466.cljs$core$IFn$_invoke$arity$variadic = link_to18466__delegate;
return link_to18466;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18466);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18468 = (function() { 
var mail_to18468__delegate = function (e_mail,p__18469){var vec__18471 = p__18469;var content = cljs.core.nth.call(null,vec__18471,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18468 = function (e_mail,var_args){
var p__18469 = null;if (arguments.length > 1) {
  p__18469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18468__delegate.call(this,e_mail,p__18469);};
mail_to18468.cljs$lang$maxFixedArity = 1;
mail_to18468.cljs$lang$applyTo = (function (arglist__18472){
var e_mail = cljs.core.first(arglist__18472);
var p__18469 = cljs.core.rest(arglist__18472);
return mail_to18468__delegate(e_mail,p__18469);
});
mail_to18468.cljs$core$IFn$_invoke$arity$variadic = mail_to18468__delegate;
return mail_to18468;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18468);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18473 = (function unordered_list18473(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__18478(s__18479){return (new cljs.core.LazySeq(null,(function (){var s__18479__$1 = s__18479;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18479__$1);if(temp__4126__auto__)
{var s__18479__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18479__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18479__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18481 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18480 = (0);while(true){
if((i__18480 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18480);cljs.core.chunk_append.call(null,b__18481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18482 = (i__18480 + (1));
i__18480 = G__18482;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18481),iter__18478.call(null,cljs.core.chunk_rest.call(null,s__18479__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18481),null);
}
} else
{var x = cljs.core.first.call(null,s__18479__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18478.call(null,cljs.core.rest.call(null,s__18479__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18473);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18483 = (function ordered_list18483(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__18488(s__18489){return (new cljs.core.LazySeq(null,(function (){var s__18489__$1 = s__18489;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18489__$1);if(temp__4126__auto__)
{var s__18489__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18489__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18489__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18491 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18490 = (0);while(true){
if((i__18490 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18490);cljs.core.chunk_append.call(null,b__18491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18492 = (i__18490 + (1));
i__18490 = G__18492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18491),iter__18488.call(null,cljs.core.chunk_rest.call(null,s__18489__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18491),null);
}
} else
{var x = cljs.core.first.call(null,s__18489__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18488.call(null,cljs.core.rest.call(null,s__18489__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18483);
/**
* Create an image element.
*/
sablono.core.image18493 = (function() {
var image18493 = null;
var image18493__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18493__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18493 = function(src,alt){
switch(arguments.length){
case 1:
return image18493__1.call(this,src);
case 2:
return image18493__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18493.cljs$core$IFn$_invoke$arity$1 = image18493__1;
image18493.cljs$core$IFn$_invoke$arity$2 = image18493__2;
return image18493;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18493);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18494_SHARP_,p2__18495_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18494_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18495_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18496_SHARP_,p2__18497_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18496_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18497_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field18498 = (function() {
var color_field18498 = null;
var color_field18498__1 = (function (name__10242__auto__){return color_field18498.call(null,name__10242__auto__,null);
});
var color_field18498__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field18498 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field18498__1.call(this,name__10242__auto__);
case 2:
return color_field18498__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18498.cljs$core$IFn$_invoke$arity$1 = color_field18498__1;
color_field18498.cljs$core$IFn$_invoke$arity$2 = color_field18498__2;
return color_field18498;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18498);
/**
* Creates a date input field.
*/
sablono.core.date_field18499 = (function() {
var date_field18499 = null;
var date_field18499__1 = (function (name__10242__auto__){return date_field18499.call(null,name__10242__auto__,null);
});
var date_field18499__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field18499 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field18499__1.call(this,name__10242__auto__);
case 2:
return date_field18499__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18499.cljs$core$IFn$_invoke$arity$1 = date_field18499__1;
date_field18499.cljs$core$IFn$_invoke$arity$2 = date_field18499__2;
return date_field18499;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18499);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18500 = (function() {
var datetime_field18500 = null;
var datetime_field18500__1 = (function (name__10242__auto__){return datetime_field18500.call(null,name__10242__auto__,null);
});
var datetime_field18500__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field18500 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field18500__1.call(this,name__10242__auto__);
case 2:
return datetime_field18500__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18500.cljs$core$IFn$_invoke$arity$1 = datetime_field18500__1;
datetime_field18500.cljs$core$IFn$_invoke$arity$2 = datetime_field18500__2;
return datetime_field18500;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18500);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18501 = (function() {
var datetime_local_field18501 = null;
var datetime_local_field18501__1 = (function (name__10242__auto__){return datetime_local_field18501.call(null,name__10242__auto__,null);
});
var datetime_local_field18501__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field18501 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18501__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field18501__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18501.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18501__1;
datetime_local_field18501.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18501__2;
return datetime_local_field18501;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18501);
/**
* Creates a email input field.
*/
sablono.core.email_field18502 = (function() {
var email_field18502 = null;
var email_field18502__1 = (function (name__10242__auto__){return email_field18502.call(null,name__10242__auto__,null);
});
var email_field18502__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field18502 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field18502__1.call(this,name__10242__auto__);
case 2:
return email_field18502__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18502.cljs$core$IFn$_invoke$arity$1 = email_field18502__1;
email_field18502.cljs$core$IFn$_invoke$arity$2 = email_field18502__2;
return email_field18502;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18502);
/**
* Creates a file input field.
*/
sablono.core.file_field18503 = (function() {
var file_field18503 = null;
var file_field18503__1 = (function (name__10242__auto__){return file_field18503.call(null,name__10242__auto__,null);
});
var file_field18503__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field18503 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field18503__1.call(this,name__10242__auto__);
case 2:
return file_field18503__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18503.cljs$core$IFn$_invoke$arity$1 = file_field18503__1;
file_field18503.cljs$core$IFn$_invoke$arity$2 = file_field18503__2;
return file_field18503;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18503);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18504 = (function() {
var hidden_field18504 = null;
var hidden_field18504__1 = (function (name__10242__auto__){return hidden_field18504.call(null,name__10242__auto__,null);
});
var hidden_field18504__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field18504 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field18504__1.call(this,name__10242__auto__);
case 2:
return hidden_field18504__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18504.cljs$core$IFn$_invoke$arity$1 = hidden_field18504__1;
hidden_field18504.cljs$core$IFn$_invoke$arity$2 = hidden_field18504__2;
return hidden_field18504;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18504);
/**
* Creates a month input field.
*/
sablono.core.month_field18505 = (function() {
var month_field18505 = null;
var month_field18505__1 = (function (name__10242__auto__){return month_field18505.call(null,name__10242__auto__,null);
});
var month_field18505__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field18505 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field18505__1.call(this,name__10242__auto__);
case 2:
return month_field18505__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18505.cljs$core$IFn$_invoke$arity$1 = month_field18505__1;
month_field18505.cljs$core$IFn$_invoke$arity$2 = month_field18505__2;
return month_field18505;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18505);
/**
* Creates a number input field.
*/
sablono.core.number_field18506 = (function() {
var number_field18506 = null;
var number_field18506__1 = (function (name__10242__auto__){return number_field18506.call(null,name__10242__auto__,null);
});
var number_field18506__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field18506 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field18506__1.call(this,name__10242__auto__);
case 2:
return number_field18506__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18506.cljs$core$IFn$_invoke$arity$1 = number_field18506__1;
number_field18506.cljs$core$IFn$_invoke$arity$2 = number_field18506__2;
return number_field18506;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18506);
/**
* Creates a password input field.
*/
sablono.core.password_field18507 = (function() {
var password_field18507 = null;
var password_field18507__1 = (function (name__10242__auto__){return password_field18507.call(null,name__10242__auto__,null);
});
var password_field18507__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field18507 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field18507__1.call(this,name__10242__auto__);
case 2:
return password_field18507__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18507.cljs$core$IFn$_invoke$arity$1 = password_field18507__1;
password_field18507.cljs$core$IFn$_invoke$arity$2 = password_field18507__2;
return password_field18507;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18507);
/**
* Creates a range input field.
*/
sablono.core.range_field18508 = (function() {
var range_field18508 = null;
var range_field18508__1 = (function (name__10242__auto__){return range_field18508.call(null,name__10242__auto__,null);
});
var range_field18508__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field18508 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field18508__1.call(this,name__10242__auto__);
case 2:
return range_field18508__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18508.cljs$core$IFn$_invoke$arity$1 = range_field18508__1;
range_field18508.cljs$core$IFn$_invoke$arity$2 = range_field18508__2;
return range_field18508;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18508);
/**
* Creates a search input field.
*/
sablono.core.search_field18509 = (function() {
var search_field18509 = null;
var search_field18509__1 = (function (name__10242__auto__){return search_field18509.call(null,name__10242__auto__,null);
});
var search_field18509__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field18509 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field18509__1.call(this,name__10242__auto__);
case 2:
return search_field18509__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18509.cljs$core$IFn$_invoke$arity$1 = search_field18509__1;
search_field18509.cljs$core$IFn$_invoke$arity$2 = search_field18509__2;
return search_field18509;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18509);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18510 = (function() {
var tel_field18510 = null;
var tel_field18510__1 = (function (name__10242__auto__){return tel_field18510.call(null,name__10242__auto__,null);
});
var tel_field18510__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field18510 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field18510__1.call(this,name__10242__auto__);
case 2:
return tel_field18510__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18510.cljs$core$IFn$_invoke$arity$1 = tel_field18510__1;
tel_field18510.cljs$core$IFn$_invoke$arity$2 = tel_field18510__2;
return tel_field18510;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18510);
/**
* Creates a text input field.
*/
sablono.core.text_field18511 = (function() {
var text_field18511 = null;
var text_field18511__1 = (function (name__10242__auto__){return text_field18511.call(null,name__10242__auto__,null);
});
var text_field18511__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field18511 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field18511__1.call(this,name__10242__auto__);
case 2:
return text_field18511__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18511.cljs$core$IFn$_invoke$arity$1 = text_field18511__1;
text_field18511.cljs$core$IFn$_invoke$arity$2 = text_field18511__2;
return text_field18511;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18511);
/**
* Creates a time input field.
*/
sablono.core.time_field18512 = (function() {
var time_field18512 = null;
var time_field18512__1 = (function (name__10242__auto__){return time_field18512.call(null,name__10242__auto__,null);
});
var time_field18512__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field18512 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field18512__1.call(this,name__10242__auto__);
case 2:
return time_field18512__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18512.cljs$core$IFn$_invoke$arity$1 = time_field18512__1;
time_field18512.cljs$core$IFn$_invoke$arity$2 = time_field18512__2;
return time_field18512;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18512);
/**
* Creates a url input field.
*/
sablono.core.url_field18513 = (function() {
var url_field18513 = null;
var url_field18513__1 = (function (name__10242__auto__){return url_field18513.call(null,name__10242__auto__,null);
});
var url_field18513__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field18513 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field18513__1.call(this,name__10242__auto__);
case 2:
return url_field18513__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18513.cljs$core$IFn$_invoke$arity$1 = url_field18513__1;
url_field18513.cljs$core$IFn$_invoke$arity$2 = url_field18513__2;
return url_field18513;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18513);
/**
* Creates a week input field.
*/
sablono.core.week_field18514 = (function() {
var week_field18514 = null;
var week_field18514__1 = (function (name__10242__auto__){return week_field18514.call(null,name__10242__auto__,null);
});
var week_field18514__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field18514 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field18514__1.call(this,name__10242__auto__);
case 2:
return week_field18514__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18514.cljs$core$IFn$_invoke$arity$1 = week_field18514__1;
week_field18514.cljs$core$IFn$_invoke$arity$2 = week_field18514__2;
return week_field18514;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18514);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18515 = (function() {
var check_box18515 = null;
var check_box18515__1 = (function (name){return check_box18515.call(null,name,null);
});
var check_box18515__2 = (function (name,checked_QMARK_){return check_box18515.call(null,name,checked_QMARK_,"true");
});
var check_box18515__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18515 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18515__1.call(this,name);
case 2:
return check_box18515__2.call(this,name,checked_QMARK_);
case 3:
return check_box18515__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18515.cljs$core$IFn$_invoke$arity$1 = check_box18515__1;
check_box18515.cljs$core$IFn$_invoke$arity$2 = check_box18515__2;
check_box18515.cljs$core$IFn$_invoke$arity$3 = check_box18515__3;
return check_box18515;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18515);
/**
* Creates a radio button.
*/
sablono.core.radio_button18516 = (function() {
var radio_button18516 = null;
var radio_button18516__1 = (function (group){return radio_button18516.call(null,group,null);
});
var radio_button18516__2 = (function (group,checked_QMARK_){return radio_button18516.call(null,group,checked_QMARK_,"true");
});
var radio_button18516__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18516 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18516__1.call(this,group);
case 2:
return radio_button18516__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18516__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18516.cljs$core$IFn$_invoke$arity$1 = radio_button18516__1;
radio_button18516.cljs$core$IFn$_invoke$arity$2 = radio_button18516__2;
radio_button18516.cljs$core$IFn$_invoke$arity$3 = radio_button18516__3;
return radio_button18516;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18516);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18517 = (function() {
var select_options18517 = null;
var select_options18517__1 = (function (coll){return select_options18517.call(null,coll,null);
});
var select_options18517__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__18526(s__18527){return (new cljs.core.LazySeq(null,(function (){var s__18527__$1 = s__18527;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18527__$1);if(temp__4126__auto__)
{var s__18527__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18527__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18527__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18529 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18528 = (0);while(true){
if((i__18528 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18528);cljs.core.chunk_append.call(null,b__18529,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18532 = x;var text = cljs.core.nth.call(null,vec__18532,(0),null);var val = cljs.core.nth.call(null,vec__18532,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18532,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18517.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18534 = (i__18528 + (1));
i__18528 = G__18534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18529),iter__18526.call(null,cljs.core.chunk_rest.call(null,s__18527__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18529),null);
}
} else
{var x = cljs.core.first.call(null,s__18527__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18533 = x;var text = cljs.core.nth.call(null,vec__18533,(0),null);var val = cljs.core.nth.call(null,vec__18533,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18533,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18517.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18526.call(null,cljs.core.rest.call(null,s__18527__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options18517 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18517__1.call(this,coll);
case 2:
return select_options18517__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18517.cljs$core$IFn$_invoke$arity$1 = select_options18517__1;
select_options18517.cljs$core$IFn$_invoke$arity$2 = select_options18517__2;
return select_options18517;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18517);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18535 = (function() {
var drop_down18535 = null;
var drop_down18535__2 = (function (name,options){return drop_down18535.call(null,name,options,null);
});
var drop_down18535__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18535 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18535__2.call(this,name,options);
case 3:
return drop_down18535__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18535.cljs$core$IFn$_invoke$arity$2 = drop_down18535__2;
drop_down18535.cljs$core$IFn$_invoke$arity$3 = drop_down18535__3;
return drop_down18535;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18535);
/**
* Creates a text area element.
*/
sablono.core.text_area18536 = (function() {
var text_area18536 = null;
var text_area18536__1 = (function (name){return text_area18536.call(null,name,null);
});
var text_area18536__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18536 = function(name,value){
switch(arguments.length){
case 1:
return text_area18536__1.call(this,name);
case 2:
return text_area18536__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18536.cljs$core$IFn$_invoke$arity$1 = text_area18536__1;
text_area18536.cljs$core$IFn$_invoke$arity$2 = text_area18536__2;
return text_area18536;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18536);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18537 = (function label18537(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18537);
/**
* Creates a submit button.
*/
sablono.core.submit_button18538 = (function submit_button18538(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18538);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18539 = (function reset_button18539(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18539);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18540 = (function() { 
var form_to18540__delegate = function (p__18541,body){var vec__18543 = p__18541;var method = cljs.core.nth.call(null,vec__18543,(0),null);var action = cljs.core.nth.call(null,vec__18543,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18540 = function (p__18541,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18540__delegate.call(this,p__18541,body);};
form_to18540.cljs$lang$maxFixedArity = 1;
form_to18540.cljs$lang$applyTo = (function (arglist__18544){
var p__18541 = cljs.core.first(arglist__18544);
var body = cljs.core.rest(arglist__18544);
return form_to18540__delegate(p__18541,body);
});
form_to18540.cljs$core$IFn$_invoke$arity$variadic = form_to18540__delegate;
return form_to18540;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18540);
