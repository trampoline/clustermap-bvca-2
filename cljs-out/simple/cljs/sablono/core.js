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
var G__31462__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__31461 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__31461,(0),null);var body = cljs.core.nthnext.call(null,vec__31461,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__31462 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31462__delegate.call(this,args);};
G__31462.cljs$lang$maxFixedArity = 0;
G__31462.cljs$lang$applyTo = (function (arglist__31463){
var args = cljs.core.seq(arglist__31463);
return G__31462__delegate(args);
});
G__31462.cljs$core$IFn$_invoke$arity$variadic = G__31462__delegate;
return G__31462;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__31468(s__31469){return (new cljs.core.LazySeq(null,(function (){var s__31469__$1 = s__31469;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31469__$1);if(temp__4126__auto__)
{var s__31469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31469__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31469__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31471 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31470 = (0);while(true){
if((i__31470 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__31470);cljs.core.chunk_append.call(null,b__31471,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__31472 = (i__31470 + (1));
i__31470 = G__31472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31471),iter__31468.call(null,cljs.core.chunk_rest.call(null,s__31469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31471),null);
}
} else
{var args = cljs.core.first.call(null,s__31469__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31468.call(null,cljs.core.rest.call(null,s__31469__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__31477(s__31478){return (new cljs.core.LazySeq(null,(function (){var s__31478__$1 = s__31478;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31478__$1);if(temp__4126__auto__)
{var s__31478__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31478__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31478__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31480 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31479 = (0);while(true){
if((i__31479 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__31479);cljs.core.chunk_append.call(null,b__31480,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__31481 = (i__31479 + (1));
i__31479 = G__31481;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31480),iter__31477.call(null,cljs.core.chunk_rest.call(null,s__31478__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31480),null);
}
} else
{var style = cljs.core.first.call(null,s__31478__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__31477.call(null,cljs.core.rest.call(null,s__31478__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__31482){
var styles = cljs.core.seq(arglist__31482);
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
sablono.core.link_to31483 = (function() { 
var link_to31483__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to31483 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to31483__delegate.call(this,url,content);};
link_to31483.cljs$lang$maxFixedArity = 1;
link_to31483.cljs$lang$applyTo = (function (arglist__31484){
var url = cljs.core.first(arglist__31484);
var content = cljs.core.rest(arglist__31484);
return link_to31483__delegate(url,content);
});
link_to31483.cljs$core$IFn$_invoke$arity$variadic = link_to31483__delegate;
return link_to31483;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31483);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31485 = (function() { 
var mail_to31485__delegate = function (e_mail,p__31486){var vec__31488 = p__31486;var content = cljs.core.nth.call(null,vec__31488,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to31485 = function (e_mail,var_args){
var p__31486 = null;if (arguments.length > 1) {
  p__31486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to31485__delegate.call(this,e_mail,p__31486);};
mail_to31485.cljs$lang$maxFixedArity = 1;
mail_to31485.cljs$lang$applyTo = (function (arglist__31489){
var e_mail = cljs.core.first(arglist__31489);
var p__31486 = cljs.core.rest(arglist__31489);
return mail_to31485__delegate(e_mail,p__31486);
});
mail_to31485.cljs$core$IFn$_invoke$arity$variadic = mail_to31485__delegate;
return mail_to31485;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31485);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31490 = (function unordered_list31490(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__31495(s__31496){return (new cljs.core.LazySeq(null,(function (){var s__31496__$1 = s__31496;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31496__$1);if(temp__4126__auto__)
{var s__31496__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31496__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31496__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31498 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31497 = (0);while(true){
if((i__31497 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__31497);cljs.core.chunk_append.call(null,b__31498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31499 = (i__31497 + (1));
i__31497 = G__31499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31498),iter__31495.call(null,cljs.core.chunk_rest.call(null,s__31496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31498),null);
}
} else
{var x = cljs.core.first.call(null,s__31496__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31495.call(null,cljs.core.rest.call(null,s__31496__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31490);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31500 = (function ordered_list31500(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__31505(s__31506){return (new cljs.core.LazySeq(null,(function (){var s__31506__$1 = s__31506;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31506__$1);if(temp__4126__auto__)
{var s__31506__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31506__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31506__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31508 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31507 = (0);while(true){
if((i__31507 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__31507);cljs.core.chunk_append.call(null,b__31508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31509 = (i__31507 + (1));
i__31507 = G__31509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31508),iter__31505.call(null,cljs.core.chunk_rest.call(null,s__31506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31508),null);
}
} else
{var x = cljs.core.first.call(null,s__31506__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31505.call(null,cljs.core.rest.call(null,s__31506__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31500);
/**
* Create an image element.
*/
sablono.core.image31510 = (function() {
var image31510 = null;
var image31510__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image31510__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image31510 = function(src,alt){
switch(arguments.length){
case 1:
return image31510__1.call(this,src);
case 2:
return image31510__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31510.cljs$core$IFn$_invoke$arity$1 = image31510__1;
image31510.cljs$core$IFn$_invoke$arity$2 = image31510__2;
return image31510;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31510);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__31511_SHARP_,p2__31512_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31511_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31512_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__31513_SHARP_,p2__31514_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31513_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31514_SHARP_));
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
sablono.core.color_field31515 = (function() {
var color_field31515 = null;
var color_field31515__1 = (function (name__10462__auto__){return color_field31515.call(null,name__10462__auto__,null);
});
var color_field31515__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10462__auto__,value__10463__auto__);
});
color_field31515 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return color_field31515__1.call(this,name__10462__auto__);
case 2:
return color_field31515__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31515.cljs$core$IFn$_invoke$arity$1 = color_field31515__1;
color_field31515.cljs$core$IFn$_invoke$arity$2 = color_field31515__2;
return color_field31515;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31515);
/**
* Creates a date input field.
*/
sablono.core.date_field31516 = (function() {
var date_field31516 = null;
var date_field31516__1 = (function (name__10462__auto__){return date_field31516.call(null,name__10462__auto__,null);
});
var date_field31516__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10462__auto__,value__10463__auto__);
});
date_field31516 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return date_field31516__1.call(this,name__10462__auto__);
case 2:
return date_field31516__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31516.cljs$core$IFn$_invoke$arity$1 = date_field31516__1;
date_field31516.cljs$core$IFn$_invoke$arity$2 = date_field31516__2;
return date_field31516;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31516);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31517 = (function() {
var datetime_field31517 = null;
var datetime_field31517__1 = (function (name__10462__auto__){return datetime_field31517.call(null,name__10462__auto__,null);
});
var datetime_field31517__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10462__auto__,value__10463__auto__);
});
datetime_field31517 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_field31517__1.call(this,name__10462__auto__);
case 2:
return datetime_field31517__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31517.cljs$core$IFn$_invoke$arity$1 = datetime_field31517__1;
datetime_field31517.cljs$core$IFn$_invoke$arity$2 = datetime_field31517__2;
return datetime_field31517;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31517);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31518 = (function() {
var datetime_local_field31518 = null;
var datetime_local_field31518__1 = (function (name__10462__auto__){return datetime_local_field31518.call(null,name__10462__auto__,null);
});
var datetime_local_field31518__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10462__auto__,value__10463__auto__);
});
datetime_local_field31518 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31518__1.call(this,name__10462__auto__);
case 2:
return datetime_local_field31518__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31518.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31518__1;
datetime_local_field31518.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31518__2;
return datetime_local_field31518;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31518);
/**
* Creates a email input field.
*/
sablono.core.email_field31519 = (function() {
var email_field31519 = null;
var email_field31519__1 = (function (name__10462__auto__){return email_field31519.call(null,name__10462__auto__,null);
});
var email_field31519__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10462__auto__,value__10463__auto__);
});
email_field31519 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return email_field31519__1.call(this,name__10462__auto__);
case 2:
return email_field31519__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31519.cljs$core$IFn$_invoke$arity$1 = email_field31519__1;
email_field31519.cljs$core$IFn$_invoke$arity$2 = email_field31519__2;
return email_field31519;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31519);
/**
* Creates a file input field.
*/
sablono.core.file_field31520 = (function() {
var file_field31520 = null;
var file_field31520__1 = (function (name__10462__auto__){return file_field31520.call(null,name__10462__auto__,null);
});
var file_field31520__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10462__auto__,value__10463__auto__);
});
file_field31520 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return file_field31520__1.call(this,name__10462__auto__);
case 2:
return file_field31520__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31520.cljs$core$IFn$_invoke$arity$1 = file_field31520__1;
file_field31520.cljs$core$IFn$_invoke$arity$2 = file_field31520__2;
return file_field31520;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31520);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31521 = (function() {
var hidden_field31521 = null;
var hidden_field31521__1 = (function (name__10462__auto__){return hidden_field31521.call(null,name__10462__auto__,null);
});
var hidden_field31521__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10462__auto__,value__10463__auto__);
});
hidden_field31521 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return hidden_field31521__1.call(this,name__10462__auto__);
case 2:
return hidden_field31521__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31521.cljs$core$IFn$_invoke$arity$1 = hidden_field31521__1;
hidden_field31521.cljs$core$IFn$_invoke$arity$2 = hidden_field31521__2;
return hidden_field31521;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31521);
/**
* Creates a month input field.
*/
sablono.core.month_field31522 = (function() {
var month_field31522 = null;
var month_field31522__1 = (function (name__10462__auto__){return month_field31522.call(null,name__10462__auto__,null);
});
var month_field31522__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10462__auto__,value__10463__auto__);
});
month_field31522 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return month_field31522__1.call(this,name__10462__auto__);
case 2:
return month_field31522__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31522.cljs$core$IFn$_invoke$arity$1 = month_field31522__1;
month_field31522.cljs$core$IFn$_invoke$arity$2 = month_field31522__2;
return month_field31522;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31522);
/**
* Creates a number input field.
*/
sablono.core.number_field31523 = (function() {
var number_field31523 = null;
var number_field31523__1 = (function (name__10462__auto__){return number_field31523.call(null,name__10462__auto__,null);
});
var number_field31523__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10462__auto__,value__10463__auto__);
});
number_field31523 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return number_field31523__1.call(this,name__10462__auto__);
case 2:
return number_field31523__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31523.cljs$core$IFn$_invoke$arity$1 = number_field31523__1;
number_field31523.cljs$core$IFn$_invoke$arity$2 = number_field31523__2;
return number_field31523;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31523);
/**
* Creates a password input field.
*/
sablono.core.password_field31524 = (function() {
var password_field31524 = null;
var password_field31524__1 = (function (name__10462__auto__){return password_field31524.call(null,name__10462__auto__,null);
});
var password_field31524__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10462__auto__,value__10463__auto__);
});
password_field31524 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return password_field31524__1.call(this,name__10462__auto__);
case 2:
return password_field31524__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31524.cljs$core$IFn$_invoke$arity$1 = password_field31524__1;
password_field31524.cljs$core$IFn$_invoke$arity$2 = password_field31524__2;
return password_field31524;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31524);
/**
* Creates a range input field.
*/
sablono.core.range_field31525 = (function() {
var range_field31525 = null;
var range_field31525__1 = (function (name__10462__auto__){return range_field31525.call(null,name__10462__auto__,null);
});
var range_field31525__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10462__auto__,value__10463__auto__);
});
range_field31525 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return range_field31525__1.call(this,name__10462__auto__);
case 2:
return range_field31525__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31525.cljs$core$IFn$_invoke$arity$1 = range_field31525__1;
range_field31525.cljs$core$IFn$_invoke$arity$2 = range_field31525__2;
return range_field31525;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31525);
/**
* Creates a search input field.
*/
sablono.core.search_field31526 = (function() {
var search_field31526 = null;
var search_field31526__1 = (function (name__10462__auto__){return search_field31526.call(null,name__10462__auto__,null);
});
var search_field31526__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10462__auto__,value__10463__auto__);
});
search_field31526 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return search_field31526__1.call(this,name__10462__auto__);
case 2:
return search_field31526__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31526.cljs$core$IFn$_invoke$arity$1 = search_field31526__1;
search_field31526.cljs$core$IFn$_invoke$arity$2 = search_field31526__2;
return search_field31526;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31526);
/**
* Creates a tel input field.
*/
sablono.core.tel_field31527 = (function() {
var tel_field31527 = null;
var tel_field31527__1 = (function (name__10462__auto__){return tel_field31527.call(null,name__10462__auto__,null);
});
var tel_field31527__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10462__auto__,value__10463__auto__);
});
tel_field31527 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return tel_field31527__1.call(this,name__10462__auto__);
case 2:
return tel_field31527__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31527.cljs$core$IFn$_invoke$arity$1 = tel_field31527__1;
tel_field31527.cljs$core$IFn$_invoke$arity$2 = tel_field31527__2;
return tel_field31527;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31527);
/**
* Creates a text input field.
*/
sablono.core.text_field31528 = (function() {
var text_field31528 = null;
var text_field31528__1 = (function (name__10462__auto__){return text_field31528.call(null,name__10462__auto__,null);
});
var text_field31528__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10462__auto__,value__10463__auto__);
});
text_field31528 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return text_field31528__1.call(this,name__10462__auto__);
case 2:
return text_field31528__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31528.cljs$core$IFn$_invoke$arity$1 = text_field31528__1;
text_field31528.cljs$core$IFn$_invoke$arity$2 = text_field31528__2;
return text_field31528;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31528);
/**
* Creates a time input field.
*/
sablono.core.time_field31529 = (function() {
var time_field31529 = null;
var time_field31529__1 = (function (name__10462__auto__){return time_field31529.call(null,name__10462__auto__,null);
});
var time_field31529__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10462__auto__,value__10463__auto__);
});
time_field31529 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return time_field31529__1.call(this,name__10462__auto__);
case 2:
return time_field31529__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31529.cljs$core$IFn$_invoke$arity$1 = time_field31529__1;
time_field31529.cljs$core$IFn$_invoke$arity$2 = time_field31529__2;
return time_field31529;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31529);
/**
* Creates a url input field.
*/
sablono.core.url_field31530 = (function() {
var url_field31530 = null;
var url_field31530__1 = (function (name__10462__auto__){return url_field31530.call(null,name__10462__auto__,null);
});
var url_field31530__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10462__auto__,value__10463__auto__);
});
url_field31530 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return url_field31530__1.call(this,name__10462__auto__);
case 2:
return url_field31530__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31530.cljs$core$IFn$_invoke$arity$1 = url_field31530__1;
url_field31530.cljs$core$IFn$_invoke$arity$2 = url_field31530__2;
return url_field31530;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31530);
/**
* Creates a week input field.
*/
sablono.core.week_field31531 = (function() {
var week_field31531 = null;
var week_field31531__1 = (function (name__10462__auto__){return week_field31531.call(null,name__10462__auto__,null);
});
var week_field31531__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10462__auto__,value__10463__auto__);
});
week_field31531 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return week_field31531__1.call(this,name__10462__auto__);
case 2:
return week_field31531__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31531.cljs$core$IFn$_invoke$arity$1 = week_field31531__1;
week_field31531.cljs$core$IFn$_invoke$arity$2 = week_field31531__2;
return week_field31531;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31531);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31532 = (function() {
var check_box31532 = null;
var check_box31532__1 = (function (name){return check_box31532.call(null,name,null);
});
var check_box31532__2 = (function (name,checked_QMARK_){return check_box31532.call(null,name,checked_QMARK_,"true");
});
var check_box31532__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box31532 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31532__1.call(this,name);
case 2:
return check_box31532__2.call(this,name,checked_QMARK_);
case 3:
return check_box31532__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31532.cljs$core$IFn$_invoke$arity$1 = check_box31532__1;
check_box31532.cljs$core$IFn$_invoke$arity$2 = check_box31532__2;
check_box31532.cljs$core$IFn$_invoke$arity$3 = check_box31532__3;
return check_box31532;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31532);
/**
* Creates a radio button.
*/
sablono.core.radio_button31533 = (function() {
var radio_button31533 = null;
var radio_button31533__1 = (function (group){return radio_button31533.call(null,group,null);
});
var radio_button31533__2 = (function (group,checked_QMARK_){return radio_button31533.call(null,group,checked_QMARK_,"true");
});
var radio_button31533__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button31533 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31533__1.call(this,group);
case 2:
return radio_button31533__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31533__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31533.cljs$core$IFn$_invoke$arity$1 = radio_button31533__1;
radio_button31533.cljs$core$IFn$_invoke$arity$2 = radio_button31533__2;
radio_button31533.cljs$core$IFn$_invoke$arity$3 = radio_button31533__3;
return radio_button31533;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31533);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31534 = (function() {
var select_options31534 = null;
var select_options31534__1 = (function (coll){return select_options31534.call(null,coll,null);
});
var select_options31534__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__31543(s__31544){return (new cljs.core.LazySeq(null,(function (){var s__31544__$1 = s__31544;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31544__$1);if(temp__4126__auto__)
{var s__31544__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31544__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31544__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31546 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31545 = (0);while(true){
if((i__31545 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__31545);cljs.core.chunk_append.call(null,b__31546,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31549 = x;var text = cljs.core.nth.call(null,vec__31549,(0),null);var val = cljs.core.nth.call(null,vec__31549,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31549,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31534.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__31551 = (i__31545 + (1));
i__31545 = G__31551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31546),iter__31543.call(null,cljs.core.chunk_rest.call(null,s__31544__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31546),null);
}
} else
{var x = cljs.core.first.call(null,s__31544__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31550 = x;var text = cljs.core.nth.call(null,vec__31550,(0),null);var val = cljs.core.nth.call(null,vec__31550,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31550,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31534.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__31543.call(null,cljs.core.rest.call(null,s__31544__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options31534 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31534__1.call(this,coll);
case 2:
return select_options31534__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31534.cljs$core$IFn$_invoke$arity$1 = select_options31534__1;
select_options31534.cljs$core$IFn$_invoke$arity$2 = select_options31534__2;
return select_options31534;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31534);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31552 = (function() {
var drop_down31552 = null;
var drop_down31552__2 = (function (name,options){return drop_down31552.call(null,name,options,null);
});
var drop_down31552__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down31552 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31552__2.call(this,name,options);
case 3:
return drop_down31552__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31552.cljs$core$IFn$_invoke$arity$2 = drop_down31552__2;
drop_down31552.cljs$core$IFn$_invoke$arity$3 = drop_down31552__3;
return drop_down31552;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31552);
/**
* Creates a text area element.
*/
sablono.core.text_area31553 = (function() {
var text_area31553 = null;
var text_area31553__1 = (function (name){return text_area31553.call(null,name,null);
});
var text_area31553__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area31553 = function(name,value){
switch(arguments.length){
case 1:
return text_area31553__1.call(this,name);
case 2:
return text_area31553__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31553.cljs$core$IFn$_invoke$arity$1 = text_area31553__1;
text_area31553.cljs$core$IFn$_invoke$arity$2 = text_area31553__2;
return text_area31553;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31553);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31554 = (function label31554(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31554);
/**
* Creates a submit button.
*/
sablono.core.submit_button31555 = (function submit_button31555(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31555);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31556 = (function reset_button31556(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31556);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31557 = (function() { 
var form_to31557__delegate = function (p__31558,body){var vec__31560 = p__31558;var method = cljs.core.nth.call(null,vec__31560,(0),null);var action = cljs.core.nth.call(null,vec__31560,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to31557 = function (p__31558,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to31557__delegate.call(this,p__31558,body);};
form_to31557.cljs$lang$maxFixedArity = 1;
form_to31557.cljs$lang$applyTo = (function (arglist__31561){
var p__31558 = cljs.core.first(arglist__31561);
var body = cljs.core.rest(arglist__31561);
return form_to31557__delegate(p__31558,body);
});
form_to31557.cljs$core$IFn$_invoke$arity$variadic = form_to31557__delegate;
return form_to31557;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31557);
