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
var G__31452__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__31451 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__31451,(0),null);var body = cljs.core.nthnext.call(null,vec__31451,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__31452 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31452__delegate.call(this,args);};
G__31452.cljs$lang$maxFixedArity = 0;
G__31452.cljs$lang$applyTo = (function (arglist__31453){
var args = cljs.core.seq(arglist__31453);
return G__31452__delegate(args);
});
G__31452.cljs$core$IFn$_invoke$arity$variadic = G__31452__delegate;
return G__31452;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__31458(s__31459){return (new cljs.core.LazySeq(null,(function (){var s__31459__$1 = s__31459;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31459__$1);if(temp__4126__auto__)
{var s__31459__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31459__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31459__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31461 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31460 = (0);while(true){
if((i__31460 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__31460);cljs.core.chunk_append.call(null,b__31461,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__31462 = (i__31460 + (1));
i__31460 = G__31462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31461),iter__31458.call(null,cljs.core.chunk_rest.call(null,s__31459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31461),null);
}
} else
{var args = cljs.core.first.call(null,s__31459__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31458.call(null,cljs.core.rest.call(null,s__31459__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__31467(s__31468){return (new cljs.core.LazySeq(null,(function (){var s__31468__$1 = s__31468;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31468__$1);if(temp__4126__auto__)
{var s__31468__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31468__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31468__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31470 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31469 = (0);while(true){
if((i__31469 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__31469);cljs.core.chunk_append.call(null,b__31470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__31471 = (i__31469 + (1));
i__31469 = G__31471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31470),iter__31467.call(null,cljs.core.chunk_rest.call(null,s__31468__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31470),null);
}
} else
{var style = cljs.core.first.call(null,s__31468__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__31467.call(null,cljs.core.rest.call(null,s__31468__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__31472){
var styles = cljs.core.seq(arglist__31472);
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
sablono.core.link_to31473 = (function() { 
var link_to31473__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to31473 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to31473__delegate.call(this,url,content);};
link_to31473.cljs$lang$maxFixedArity = 1;
link_to31473.cljs$lang$applyTo = (function (arglist__31474){
var url = cljs.core.first(arglist__31474);
var content = cljs.core.rest(arglist__31474);
return link_to31473__delegate(url,content);
});
link_to31473.cljs$core$IFn$_invoke$arity$variadic = link_to31473__delegate;
return link_to31473;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31473);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31475 = (function() { 
var mail_to31475__delegate = function (e_mail,p__31476){var vec__31478 = p__31476;var content = cljs.core.nth.call(null,vec__31478,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to31475 = function (e_mail,var_args){
var p__31476 = null;if (arguments.length > 1) {
  p__31476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to31475__delegate.call(this,e_mail,p__31476);};
mail_to31475.cljs$lang$maxFixedArity = 1;
mail_to31475.cljs$lang$applyTo = (function (arglist__31479){
var e_mail = cljs.core.first(arglist__31479);
var p__31476 = cljs.core.rest(arglist__31479);
return mail_to31475__delegate(e_mail,p__31476);
});
mail_to31475.cljs$core$IFn$_invoke$arity$variadic = mail_to31475__delegate;
return mail_to31475;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31475);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31480 = (function unordered_list31480(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__31485(s__31486){return (new cljs.core.LazySeq(null,(function (){var s__31486__$1 = s__31486;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31486__$1);if(temp__4126__auto__)
{var s__31486__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31486__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31486__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31488 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31487 = (0);while(true){
if((i__31487 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__31487);cljs.core.chunk_append.call(null,b__31488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31489 = (i__31487 + (1));
i__31487 = G__31489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),iter__31485.call(null,cljs.core.chunk_rest.call(null,s__31486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),null);
}
} else
{var x = cljs.core.first.call(null,s__31486__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31485.call(null,cljs.core.rest.call(null,s__31486__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31480);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31490 = (function ordered_list31490(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__31495(s__31496){return (new cljs.core.LazySeq(null,(function (){var s__31496__$1 = s__31496;while(true){
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31490);
/**
* Create an image element.
*/
sablono.core.image31500 = (function() {
var image31500 = null;
var image31500__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image31500__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image31500 = function(src,alt){
switch(arguments.length){
case 1:
return image31500__1.call(this,src);
case 2:
return image31500__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31500.cljs$core$IFn$_invoke$arity$1 = image31500__1;
image31500.cljs$core$IFn$_invoke$arity$2 = image31500__2;
return image31500;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31500);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__31501_SHARP_,p2__31502_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31501_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31502_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__31503_SHARP_,p2__31504_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31503_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31504_SHARP_));
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
sablono.core.color_field31505 = (function() {
var color_field31505 = null;
var color_field31505__1 = (function (name__10461__auto__){return color_field31505.call(null,name__10461__auto__,null);
});
var color_field31505__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10461__auto__,value__10462__auto__);
});
color_field31505 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return color_field31505__1.call(this,name__10461__auto__);
case 2:
return color_field31505__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31505.cljs$core$IFn$_invoke$arity$1 = color_field31505__1;
color_field31505.cljs$core$IFn$_invoke$arity$2 = color_field31505__2;
return color_field31505;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31505);
/**
* Creates a date input field.
*/
sablono.core.date_field31506 = (function() {
var date_field31506 = null;
var date_field31506__1 = (function (name__10461__auto__){return date_field31506.call(null,name__10461__auto__,null);
});
var date_field31506__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10461__auto__,value__10462__auto__);
});
date_field31506 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return date_field31506__1.call(this,name__10461__auto__);
case 2:
return date_field31506__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31506.cljs$core$IFn$_invoke$arity$1 = date_field31506__1;
date_field31506.cljs$core$IFn$_invoke$arity$2 = date_field31506__2;
return date_field31506;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31506);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31507 = (function() {
var datetime_field31507 = null;
var datetime_field31507__1 = (function (name__10461__auto__){return datetime_field31507.call(null,name__10461__auto__,null);
});
var datetime_field31507__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10461__auto__,value__10462__auto__);
});
datetime_field31507 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_field31507__1.call(this,name__10461__auto__);
case 2:
return datetime_field31507__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31507.cljs$core$IFn$_invoke$arity$1 = datetime_field31507__1;
datetime_field31507.cljs$core$IFn$_invoke$arity$2 = datetime_field31507__2;
return datetime_field31507;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31507);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31508 = (function() {
var datetime_local_field31508 = null;
var datetime_local_field31508__1 = (function (name__10461__auto__){return datetime_local_field31508.call(null,name__10461__auto__,null);
});
var datetime_local_field31508__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10461__auto__,value__10462__auto__);
});
datetime_local_field31508 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31508__1.call(this,name__10461__auto__);
case 2:
return datetime_local_field31508__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31508.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31508__1;
datetime_local_field31508.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31508__2;
return datetime_local_field31508;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31508);
/**
* Creates a email input field.
*/
sablono.core.email_field31509 = (function() {
var email_field31509 = null;
var email_field31509__1 = (function (name__10461__auto__){return email_field31509.call(null,name__10461__auto__,null);
});
var email_field31509__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10461__auto__,value__10462__auto__);
});
email_field31509 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return email_field31509__1.call(this,name__10461__auto__);
case 2:
return email_field31509__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31509.cljs$core$IFn$_invoke$arity$1 = email_field31509__1;
email_field31509.cljs$core$IFn$_invoke$arity$2 = email_field31509__2;
return email_field31509;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31509);
/**
* Creates a file input field.
*/
sablono.core.file_field31510 = (function() {
var file_field31510 = null;
var file_field31510__1 = (function (name__10461__auto__){return file_field31510.call(null,name__10461__auto__,null);
});
var file_field31510__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10461__auto__,value__10462__auto__);
});
file_field31510 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return file_field31510__1.call(this,name__10461__auto__);
case 2:
return file_field31510__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31510.cljs$core$IFn$_invoke$arity$1 = file_field31510__1;
file_field31510.cljs$core$IFn$_invoke$arity$2 = file_field31510__2;
return file_field31510;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31510);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31511 = (function() {
var hidden_field31511 = null;
var hidden_field31511__1 = (function (name__10461__auto__){return hidden_field31511.call(null,name__10461__auto__,null);
});
var hidden_field31511__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10461__auto__,value__10462__auto__);
});
hidden_field31511 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return hidden_field31511__1.call(this,name__10461__auto__);
case 2:
return hidden_field31511__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31511.cljs$core$IFn$_invoke$arity$1 = hidden_field31511__1;
hidden_field31511.cljs$core$IFn$_invoke$arity$2 = hidden_field31511__2;
return hidden_field31511;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31511);
/**
* Creates a month input field.
*/
sablono.core.month_field31512 = (function() {
var month_field31512 = null;
var month_field31512__1 = (function (name__10461__auto__){return month_field31512.call(null,name__10461__auto__,null);
});
var month_field31512__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10461__auto__,value__10462__auto__);
});
month_field31512 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return month_field31512__1.call(this,name__10461__auto__);
case 2:
return month_field31512__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31512.cljs$core$IFn$_invoke$arity$1 = month_field31512__1;
month_field31512.cljs$core$IFn$_invoke$arity$2 = month_field31512__2;
return month_field31512;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31512);
/**
* Creates a number input field.
*/
sablono.core.number_field31513 = (function() {
var number_field31513 = null;
var number_field31513__1 = (function (name__10461__auto__){return number_field31513.call(null,name__10461__auto__,null);
});
var number_field31513__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10461__auto__,value__10462__auto__);
});
number_field31513 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return number_field31513__1.call(this,name__10461__auto__);
case 2:
return number_field31513__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31513.cljs$core$IFn$_invoke$arity$1 = number_field31513__1;
number_field31513.cljs$core$IFn$_invoke$arity$2 = number_field31513__2;
return number_field31513;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31513);
/**
* Creates a password input field.
*/
sablono.core.password_field31514 = (function() {
var password_field31514 = null;
var password_field31514__1 = (function (name__10461__auto__){return password_field31514.call(null,name__10461__auto__,null);
});
var password_field31514__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10461__auto__,value__10462__auto__);
});
password_field31514 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return password_field31514__1.call(this,name__10461__auto__);
case 2:
return password_field31514__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31514.cljs$core$IFn$_invoke$arity$1 = password_field31514__1;
password_field31514.cljs$core$IFn$_invoke$arity$2 = password_field31514__2;
return password_field31514;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31514);
/**
* Creates a range input field.
*/
sablono.core.range_field31515 = (function() {
var range_field31515 = null;
var range_field31515__1 = (function (name__10461__auto__){return range_field31515.call(null,name__10461__auto__,null);
});
var range_field31515__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10461__auto__,value__10462__auto__);
});
range_field31515 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return range_field31515__1.call(this,name__10461__auto__);
case 2:
return range_field31515__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31515.cljs$core$IFn$_invoke$arity$1 = range_field31515__1;
range_field31515.cljs$core$IFn$_invoke$arity$2 = range_field31515__2;
return range_field31515;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31515);
/**
* Creates a search input field.
*/
sablono.core.search_field31516 = (function() {
var search_field31516 = null;
var search_field31516__1 = (function (name__10461__auto__){return search_field31516.call(null,name__10461__auto__,null);
});
var search_field31516__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10461__auto__,value__10462__auto__);
});
search_field31516 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return search_field31516__1.call(this,name__10461__auto__);
case 2:
return search_field31516__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31516.cljs$core$IFn$_invoke$arity$1 = search_field31516__1;
search_field31516.cljs$core$IFn$_invoke$arity$2 = search_field31516__2;
return search_field31516;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31516);
/**
* Creates a tel input field.
*/
sablono.core.tel_field31517 = (function() {
var tel_field31517 = null;
var tel_field31517__1 = (function (name__10461__auto__){return tel_field31517.call(null,name__10461__auto__,null);
});
var tel_field31517__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10461__auto__,value__10462__auto__);
});
tel_field31517 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return tel_field31517__1.call(this,name__10461__auto__);
case 2:
return tel_field31517__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31517.cljs$core$IFn$_invoke$arity$1 = tel_field31517__1;
tel_field31517.cljs$core$IFn$_invoke$arity$2 = tel_field31517__2;
return tel_field31517;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31517);
/**
* Creates a text input field.
*/
sablono.core.text_field31518 = (function() {
var text_field31518 = null;
var text_field31518__1 = (function (name__10461__auto__){return text_field31518.call(null,name__10461__auto__,null);
});
var text_field31518__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10461__auto__,value__10462__auto__);
});
text_field31518 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return text_field31518__1.call(this,name__10461__auto__);
case 2:
return text_field31518__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31518.cljs$core$IFn$_invoke$arity$1 = text_field31518__1;
text_field31518.cljs$core$IFn$_invoke$arity$2 = text_field31518__2;
return text_field31518;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31518);
/**
* Creates a time input field.
*/
sablono.core.time_field31519 = (function() {
var time_field31519 = null;
var time_field31519__1 = (function (name__10461__auto__){return time_field31519.call(null,name__10461__auto__,null);
});
var time_field31519__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10461__auto__,value__10462__auto__);
});
time_field31519 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return time_field31519__1.call(this,name__10461__auto__);
case 2:
return time_field31519__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31519.cljs$core$IFn$_invoke$arity$1 = time_field31519__1;
time_field31519.cljs$core$IFn$_invoke$arity$2 = time_field31519__2;
return time_field31519;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31519);
/**
* Creates a url input field.
*/
sablono.core.url_field31520 = (function() {
var url_field31520 = null;
var url_field31520__1 = (function (name__10461__auto__){return url_field31520.call(null,name__10461__auto__,null);
});
var url_field31520__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10461__auto__,value__10462__auto__);
});
url_field31520 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return url_field31520__1.call(this,name__10461__auto__);
case 2:
return url_field31520__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31520.cljs$core$IFn$_invoke$arity$1 = url_field31520__1;
url_field31520.cljs$core$IFn$_invoke$arity$2 = url_field31520__2;
return url_field31520;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31520);
/**
* Creates a week input field.
*/
sablono.core.week_field31521 = (function() {
var week_field31521 = null;
var week_field31521__1 = (function (name__10461__auto__){return week_field31521.call(null,name__10461__auto__,null);
});
var week_field31521__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10461__auto__,value__10462__auto__);
});
week_field31521 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return week_field31521__1.call(this,name__10461__auto__);
case 2:
return week_field31521__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31521.cljs$core$IFn$_invoke$arity$1 = week_field31521__1;
week_field31521.cljs$core$IFn$_invoke$arity$2 = week_field31521__2;
return week_field31521;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31521);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31522 = (function() {
var check_box31522 = null;
var check_box31522__1 = (function (name){return check_box31522.call(null,name,null);
});
var check_box31522__2 = (function (name,checked_QMARK_){return check_box31522.call(null,name,checked_QMARK_,"true");
});
var check_box31522__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box31522 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31522__1.call(this,name);
case 2:
return check_box31522__2.call(this,name,checked_QMARK_);
case 3:
return check_box31522__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31522.cljs$core$IFn$_invoke$arity$1 = check_box31522__1;
check_box31522.cljs$core$IFn$_invoke$arity$2 = check_box31522__2;
check_box31522.cljs$core$IFn$_invoke$arity$3 = check_box31522__3;
return check_box31522;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31522);
/**
* Creates a radio button.
*/
sablono.core.radio_button31523 = (function() {
var radio_button31523 = null;
var radio_button31523__1 = (function (group){return radio_button31523.call(null,group,null);
});
var radio_button31523__2 = (function (group,checked_QMARK_){return radio_button31523.call(null,group,checked_QMARK_,"true");
});
var radio_button31523__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button31523 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31523__1.call(this,group);
case 2:
return radio_button31523__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31523__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31523.cljs$core$IFn$_invoke$arity$1 = radio_button31523__1;
radio_button31523.cljs$core$IFn$_invoke$arity$2 = radio_button31523__2;
radio_button31523.cljs$core$IFn$_invoke$arity$3 = radio_button31523__3;
return radio_button31523;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31523);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31524 = (function() {
var select_options31524 = null;
var select_options31524__1 = (function (coll){return select_options31524.call(null,coll,null);
});
var select_options31524__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__31533(s__31534){return (new cljs.core.LazySeq(null,(function (){var s__31534__$1 = s__31534;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31534__$1);if(temp__4126__auto__)
{var s__31534__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31534__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31534__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31536 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31535 = (0);while(true){
if((i__31535 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__31535);cljs.core.chunk_append.call(null,b__31536,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31539 = x;var text = cljs.core.nth.call(null,vec__31539,(0),null);var val = cljs.core.nth.call(null,vec__31539,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31539,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31524.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__31541 = (i__31535 + (1));
i__31535 = G__31541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31536),iter__31533.call(null,cljs.core.chunk_rest.call(null,s__31534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31536),null);
}
} else
{var x = cljs.core.first.call(null,s__31534__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31540 = x;var text = cljs.core.nth.call(null,vec__31540,(0),null);var val = cljs.core.nth.call(null,vec__31540,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31540,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31524.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__31533.call(null,cljs.core.rest.call(null,s__31534__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options31524 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31524__1.call(this,coll);
case 2:
return select_options31524__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31524.cljs$core$IFn$_invoke$arity$1 = select_options31524__1;
select_options31524.cljs$core$IFn$_invoke$arity$2 = select_options31524__2;
return select_options31524;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31524);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31542 = (function() {
var drop_down31542 = null;
var drop_down31542__2 = (function (name,options){return drop_down31542.call(null,name,options,null);
});
var drop_down31542__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down31542 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31542__2.call(this,name,options);
case 3:
return drop_down31542__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31542.cljs$core$IFn$_invoke$arity$2 = drop_down31542__2;
drop_down31542.cljs$core$IFn$_invoke$arity$3 = drop_down31542__3;
return drop_down31542;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31542);
/**
* Creates a text area element.
*/
sablono.core.text_area31543 = (function() {
var text_area31543 = null;
var text_area31543__1 = (function (name){return text_area31543.call(null,name,null);
});
var text_area31543__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area31543 = function(name,value){
switch(arguments.length){
case 1:
return text_area31543__1.call(this,name);
case 2:
return text_area31543__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31543.cljs$core$IFn$_invoke$arity$1 = text_area31543__1;
text_area31543.cljs$core$IFn$_invoke$arity$2 = text_area31543__2;
return text_area31543;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31543);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31544 = (function label31544(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31544);
/**
* Creates a submit button.
*/
sablono.core.submit_button31545 = (function submit_button31545(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31545);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31546 = (function reset_button31546(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31546);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31547 = (function() { 
var form_to31547__delegate = function (p__31548,body){var vec__31550 = p__31548;var method = cljs.core.nth.call(null,vec__31550,(0),null);var action = cljs.core.nth.call(null,vec__31550,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to31547 = function (p__31548,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to31547__delegate.call(this,p__31548,body);};
form_to31547.cljs$lang$maxFixedArity = 1;
form_to31547.cljs$lang$applyTo = (function (arglist__31551){
var p__31548 = cljs.core.first(arglist__31551);
var body = cljs.core.rest(arglist__31551);
return form_to31547__delegate(p__31548,body);
});
form_to31547.cljs$core$IFn$_invoke$arity$variadic = form_to31547__delegate;
return form_to31547;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31547);
