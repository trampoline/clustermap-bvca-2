// Compiled by ClojureScript 0.0-2261
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
var G__51252__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__51251 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__51251,(0),null);var body = cljs.core.nthnext.call(null,vec__51251,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__51252 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__51252__delegate.call(this,args);};
G__51252.cljs$lang$maxFixedArity = 0;
G__51252.cljs$lang$applyTo = (function (arglist__51253){
var args = cljs.core.seq(arglist__51253);
return G__51252__delegate(args);
});
G__51252.cljs$core$IFn$_invoke$arity$variadic = G__51252__delegate;
return G__51252;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__51258(s__51259){return (new cljs.core.LazySeq(null,(function (){var s__51259__$1 = s__51259;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51259__$1);if(temp__4126__auto__)
{var s__51259__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51259__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51259__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51261 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51260 = (0);while(true){
if((i__51260 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__51260);cljs.core.chunk_append.call(null,b__51261,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__51262 = (i__51260 + (1));
i__51260 = G__51262;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51261),iter__51258.call(null,cljs.core.chunk_rest.call(null,s__51259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51261),null);
}
} else
{var args = cljs.core.first.call(null,s__51259__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__51258.call(null,cljs.core.rest.call(null,s__51259__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__51267(s__51268){return (new cljs.core.LazySeq(null,(function (){var s__51268__$1 = s__51268;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51268__$1);if(temp__4126__auto__)
{var s__51268__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51268__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51268__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51270 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51269 = (0);while(true){
if((i__51269 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__51269);cljs.core.chunk_append.call(null,b__51270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__51271 = (i__51269 + (1));
i__51269 = G__51271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51270),iter__51267.call(null,cljs.core.chunk_rest.call(null,s__51268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51270),null);
}
} else
{var style = cljs.core.first.call(null,s__51268__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__51267.call(null,cljs.core.rest.call(null,s__51268__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__51272){
var styles = cljs.core.seq(arglist__51272);
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
sablono.core.link_to51273 = (function() { 
var link_to51273__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to51273 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to51273__delegate.call(this,url,content);};
link_to51273.cljs$lang$maxFixedArity = 1;
link_to51273.cljs$lang$applyTo = (function (arglist__51274){
var url = cljs.core.first(arglist__51274);
var content = cljs.core.rest(arglist__51274);
return link_to51273__delegate(url,content);
});
link_to51273.cljs$core$IFn$_invoke$arity$variadic = link_to51273__delegate;
return link_to51273;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to51273);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to51275 = (function() { 
var mail_to51275__delegate = function (e_mail,p__51276){var vec__51278 = p__51276;var content = cljs.core.nth.call(null,vec__51278,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to51275 = function (e_mail,var_args){
var p__51276 = null;if (arguments.length > 1) {
  p__51276 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to51275__delegate.call(this,e_mail,p__51276);};
mail_to51275.cljs$lang$maxFixedArity = 1;
mail_to51275.cljs$lang$applyTo = (function (arglist__51279){
var e_mail = cljs.core.first(arglist__51279);
var p__51276 = cljs.core.rest(arglist__51279);
return mail_to51275__delegate(e_mail,p__51276);
});
mail_to51275.cljs$core$IFn$_invoke$arity$variadic = mail_to51275__delegate;
return mail_to51275;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to51275);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list51280 = (function unordered_list51280(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__51285(s__51286){return (new cljs.core.LazySeq(null,(function (){var s__51286__$1 = s__51286;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51286__$1);if(temp__4126__auto__)
{var s__51286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51286__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51286__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51288 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51287 = (0);while(true){
if((i__51287 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51287);cljs.core.chunk_append.call(null,b__51288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__51289 = (i__51287 + (1));
i__51287 = G__51289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51288),iter__51285.call(null,cljs.core.chunk_rest.call(null,s__51286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51288),null);
}
} else
{var x = cljs.core.first.call(null,s__51286__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__51285.call(null,cljs.core.rest.call(null,s__51286__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list51280);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list51290 = (function ordered_list51290(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__51295(s__51296){return (new cljs.core.LazySeq(null,(function (){var s__51296__$1 = s__51296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51296__$1);if(temp__4126__auto__)
{var s__51296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51296__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51296__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51298 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51297 = (0);while(true){
if((i__51297 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51297);cljs.core.chunk_append.call(null,b__51298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__51299 = (i__51297 + (1));
i__51297 = G__51299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51298),iter__51295.call(null,cljs.core.chunk_rest.call(null,s__51296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51298),null);
}
} else
{var x = cljs.core.first.call(null,s__51296__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__51295.call(null,cljs.core.rest.call(null,s__51296__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list51290);
/**
* Create an image element.
*/
sablono.core.image51300 = (function() {
var image51300 = null;
var image51300__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image51300__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image51300 = function(src,alt){
switch(arguments.length){
case 1:
return image51300__1.call(this,src);
case 2:
return image51300__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image51300.cljs$core$IFn$_invoke$arity$1 = image51300__1;
image51300.cljs$core$IFn$_invoke$arity$2 = image51300__2;
return image51300;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image51300);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__51301_SHARP_,p2__51302_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51301_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51302_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__51303_SHARP_,p2__51304_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51303_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51304_SHARP_));
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
sablono.core.color_field51305 = (function() {
var color_field51305 = null;
var color_field51305__1 = (function (name__10173__auto__){return color_field51305.call(null,name__10173__auto__,null);
});
var color_field51305__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10173__auto__,value__10174__auto__);
});
color_field51305 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return color_field51305__1.call(this,name__10173__auto__);
case 2:
return color_field51305__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field51305.cljs$core$IFn$_invoke$arity$1 = color_field51305__1;
color_field51305.cljs$core$IFn$_invoke$arity$2 = color_field51305__2;
return color_field51305;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field51305);
/**
* Creates a date input field.
*/
sablono.core.date_field51306 = (function() {
var date_field51306 = null;
var date_field51306__1 = (function (name__10173__auto__){return date_field51306.call(null,name__10173__auto__,null);
});
var date_field51306__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10173__auto__,value__10174__auto__);
});
date_field51306 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return date_field51306__1.call(this,name__10173__auto__);
case 2:
return date_field51306__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field51306.cljs$core$IFn$_invoke$arity$1 = date_field51306__1;
date_field51306.cljs$core$IFn$_invoke$arity$2 = date_field51306__2;
return date_field51306;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field51306);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field51307 = (function() {
var datetime_field51307 = null;
var datetime_field51307__1 = (function (name__10173__auto__){return datetime_field51307.call(null,name__10173__auto__,null);
});
var datetime_field51307__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10173__auto__,value__10174__auto__);
});
datetime_field51307 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_field51307__1.call(this,name__10173__auto__);
case 2:
return datetime_field51307__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field51307.cljs$core$IFn$_invoke$arity$1 = datetime_field51307__1;
datetime_field51307.cljs$core$IFn$_invoke$arity$2 = datetime_field51307__2;
return datetime_field51307;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field51307);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field51308 = (function() {
var datetime_local_field51308 = null;
var datetime_local_field51308__1 = (function (name__10173__auto__){return datetime_local_field51308.call(null,name__10173__auto__,null);
});
var datetime_local_field51308__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10173__auto__,value__10174__auto__);
});
datetime_local_field51308 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_local_field51308__1.call(this,name__10173__auto__);
case 2:
return datetime_local_field51308__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field51308.cljs$core$IFn$_invoke$arity$1 = datetime_local_field51308__1;
datetime_local_field51308.cljs$core$IFn$_invoke$arity$2 = datetime_local_field51308__2;
return datetime_local_field51308;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field51308);
/**
* Creates a email input field.
*/
sablono.core.email_field51309 = (function() {
var email_field51309 = null;
var email_field51309__1 = (function (name__10173__auto__){return email_field51309.call(null,name__10173__auto__,null);
});
var email_field51309__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10173__auto__,value__10174__auto__);
});
email_field51309 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return email_field51309__1.call(this,name__10173__auto__);
case 2:
return email_field51309__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field51309.cljs$core$IFn$_invoke$arity$1 = email_field51309__1;
email_field51309.cljs$core$IFn$_invoke$arity$2 = email_field51309__2;
return email_field51309;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field51309);
/**
* Creates a file input field.
*/
sablono.core.file_field51310 = (function() {
var file_field51310 = null;
var file_field51310__1 = (function (name__10173__auto__){return file_field51310.call(null,name__10173__auto__,null);
});
var file_field51310__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10173__auto__,value__10174__auto__);
});
file_field51310 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return file_field51310__1.call(this,name__10173__auto__);
case 2:
return file_field51310__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field51310.cljs$core$IFn$_invoke$arity$1 = file_field51310__1;
file_field51310.cljs$core$IFn$_invoke$arity$2 = file_field51310__2;
return file_field51310;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field51310);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field51311 = (function() {
var hidden_field51311 = null;
var hidden_field51311__1 = (function (name__10173__auto__){return hidden_field51311.call(null,name__10173__auto__,null);
});
var hidden_field51311__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10173__auto__,value__10174__auto__);
});
hidden_field51311 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return hidden_field51311__1.call(this,name__10173__auto__);
case 2:
return hidden_field51311__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field51311.cljs$core$IFn$_invoke$arity$1 = hidden_field51311__1;
hidden_field51311.cljs$core$IFn$_invoke$arity$2 = hidden_field51311__2;
return hidden_field51311;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field51311);
/**
* Creates a month input field.
*/
sablono.core.month_field51312 = (function() {
var month_field51312 = null;
var month_field51312__1 = (function (name__10173__auto__){return month_field51312.call(null,name__10173__auto__,null);
});
var month_field51312__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10173__auto__,value__10174__auto__);
});
month_field51312 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return month_field51312__1.call(this,name__10173__auto__);
case 2:
return month_field51312__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field51312.cljs$core$IFn$_invoke$arity$1 = month_field51312__1;
month_field51312.cljs$core$IFn$_invoke$arity$2 = month_field51312__2;
return month_field51312;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field51312);
/**
* Creates a number input field.
*/
sablono.core.number_field51313 = (function() {
var number_field51313 = null;
var number_field51313__1 = (function (name__10173__auto__){return number_field51313.call(null,name__10173__auto__,null);
});
var number_field51313__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10173__auto__,value__10174__auto__);
});
number_field51313 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return number_field51313__1.call(this,name__10173__auto__);
case 2:
return number_field51313__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field51313.cljs$core$IFn$_invoke$arity$1 = number_field51313__1;
number_field51313.cljs$core$IFn$_invoke$arity$2 = number_field51313__2;
return number_field51313;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field51313);
/**
* Creates a password input field.
*/
sablono.core.password_field51314 = (function() {
var password_field51314 = null;
var password_field51314__1 = (function (name__10173__auto__){return password_field51314.call(null,name__10173__auto__,null);
});
var password_field51314__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10173__auto__,value__10174__auto__);
});
password_field51314 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return password_field51314__1.call(this,name__10173__auto__);
case 2:
return password_field51314__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field51314.cljs$core$IFn$_invoke$arity$1 = password_field51314__1;
password_field51314.cljs$core$IFn$_invoke$arity$2 = password_field51314__2;
return password_field51314;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field51314);
/**
* Creates a range input field.
*/
sablono.core.range_field51315 = (function() {
var range_field51315 = null;
var range_field51315__1 = (function (name__10173__auto__){return range_field51315.call(null,name__10173__auto__,null);
});
var range_field51315__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10173__auto__,value__10174__auto__);
});
range_field51315 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return range_field51315__1.call(this,name__10173__auto__);
case 2:
return range_field51315__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field51315.cljs$core$IFn$_invoke$arity$1 = range_field51315__1;
range_field51315.cljs$core$IFn$_invoke$arity$2 = range_field51315__2;
return range_field51315;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field51315);
/**
* Creates a search input field.
*/
sablono.core.search_field51316 = (function() {
var search_field51316 = null;
var search_field51316__1 = (function (name__10173__auto__){return search_field51316.call(null,name__10173__auto__,null);
});
var search_field51316__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10173__auto__,value__10174__auto__);
});
search_field51316 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return search_field51316__1.call(this,name__10173__auto__);
case 2:
return search_field51316__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field51316.cljs$core$IFn$_invoke$arity$1 = search_field51316__1;
search_field51316.cljs$core$IFn$_invoke$arity$2 = search_field51316__2;
return search_field51316;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field51316);
/**
* Creates a tel input field.
*/
sablono.core.tel_field51317 = (function() {
var tel_field51317 = null;
var tel_field51317__1 = (function (name__10173__auto__){return tel_field51317.call(null,name__10173__auto__,null);
});
var tel_field51317__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10173__auto__,value__10174__auto__);
});
tel_field51317 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return tel_field51317__1.call(this,name__10173__auto__);
case 2:
return tel_field51317__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field51317.cljs$core$IFn$_invoke$arity$1 = tel_field51317__1;
tel_field51317.cljs$core$IFn$_invoke$arity$2 = tel_field51317__2;
return tel_field51317;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field51317);
/**
* Creates a text input field.
*/
sablono.core.text_field51318 = (function() {
var text_field51318 = null;
var text_field51318__1 = (function (name__10173__auto__){return text_field51318.call(null,name__10173__auto__,null);
});
var text_field51318__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10173__auto__,value__10174__auto__);
});
text_field51318 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return text_field51318__1.call(this,name__10173__auto__);
case 2:
return text_field51318__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field51318.cljs$core$IFn$_invoke$arity$1 = text_field51318__1;
text_field51318.cljs$core$IFn$_invoke$arity$2 = text_field51318__2;
return text_field51318;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field51318);
/**
* Creates a time input field.
*/
sablono.core.time_field51319 = (function() {
var time_field51319 = null;
var time_field51319__1 = (function (name__10173__auto__){return time_field51319.call(null,name__10173__auto__,null);
});
var time_field51319__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10173__auto__,value__10174__auto__);
});
time_field51319 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return time_field51319__1.call(this,name__10173__auto__);
case 2:
return time_field51319__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field51319.cljs$core$IFn$_invoke$arity$1 = time_field51319__1;
time_field51319.cljs$core$IFn$_invoke$arity$2 = time_field51319__2;
return time_field51319;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field51319);
/**
* Creates a url input field.
*/
sablono.core.url_field51320 = (function() {
var url_field51320 = null;
var url_field51320__1 = (function (name__10173__auto__){return url_field51320.call(null,name__10173__auto__,null);
});
var url_field51320__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10173__auto__,value__10174__auto__);
});
url_field51320 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return url_field51320__1.call(this,name__10173__auto__);
case 2:
return url_field51320__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field51320.cljs$core$IFn$_invoke$arity$1 = url_field51320__1;
url_field51320.cljs$core$IFn$_invoke$arity$2 = url_field51320__2;
return url_field51320;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field51320);
/**
* Creates a week input field.
*/
sablono.core.week_field51321 = (function() {
var week_field51321 = null;
var week_field51321__1 = (function (name__10173__auto__){return week_field51321.call(null,name__10173__auto__,null);
});
var week_field51321__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10173__auto__,value__10174__auto__);
});
week_field51321 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return week_field51321__1.call(this,name__10173__auto__);
case 2:
return week_field51321__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field51321.cljs$core$IFn$_invoke$arity$1 = week_field51321__1;
week_field51321.cljs$core$IFn$_invoke$arity$2 = week_field51321__2;
return week_field51321;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field51321);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box51322 = (function() {
var check_box51322 = null;
var check_box51322__1 = (function (name){return check_box51322.call(null,name,null);
});
var check_box51322__2 = (function (name,checked_QMARK_){return check_box51322.call(null,name,checked_QMARK_,"true");
});
var check_box51322__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box51322 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box51322__1.call(this,name);
case 2:
return check_box51322__2.call(this,name,checked_QMARK_);
case 3:
return check_box51322__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box51322.cljs$core$IFn$_invoke$arity$1 = check_box51322__1;
check_box51322.cljs$core$IFn$_invoke$arity$2 = check_box51322__2;
check_box51322.cljs$core$IFn$_invoke$arity$3 = check_box51322__3;
return check_box51322;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box51322);
/**
* Creates a radio button.
*/
sablono.core.radio_button51323 = (function() {
var radio_button51323 = null;
var radio_button51323__1 = (function (group){return radio_button51323.call(null,group,null);
});
var radio_button51323__2 = (function (group,checked_QMARK_){return radio_button51323.call(null,group,checked_QMARK_,"true");
});
var radio_button51323__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button51323 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button51323__1.call(this,group);
case 2:
return radio_button51323__2.call(this,group,checked_QMARK_);
case 3:
return radio_button51323__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button51323.cljs$core$IFn$_invoke$arity$1 = radio_button51323__1;
radio_button51323.cljs$core$IFn$_invoke$arity$2 = radio_button51323__2;
radio_button51323.cljs$core$IFn$_invoke$arity$3 = radio_button51323__3;
return radio_button51323;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button51323);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options51324 = (function() {
var select_options51324 = null;
var select_options51324__1 = (function (coll){return select_options51324.call(null,coll,null);
});
var select_options51324__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__51333(s__51334){return (new cljs.core.LazySeq(null,(function (){var s__51334__$1 = s__51334;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51334__$1);if(temp__4126__auto__)
{var s__51334__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51334__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51334__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51336 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51335 = (0);while(true){
if((i__51335 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51335);cljs.core.chunk_append.call(null,b__51336,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51339 = x;var text = cljs.core.nth.call(null,vec__51339,(0),null);var val = cljs.core.nth.call(null,vec__51339,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__51339,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options51324.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__51341 = (i__51335 + (1));
i__51335 = G__51341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51336),iter__51333.call(null,cljs.core.chunk_rest.call(null,s__51334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51336),null);
}
} else
{var x = cljs.core.first.call(null,s__51334__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51340 = x;var text = cljs.core.nth.call(null,vec__51340,(0),null);var val = cljs.core.nth.call(null,vec__51340,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__51340,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options51324.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__51333.call(null,cljs.core.rest.call(null,s__51334__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options51324 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options51324__1.call(this,coll);
case 2:
return select_options51324__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options51324.cljs$core$IFn$_invoke$arity$1 = select_options51324__1;
select_options51324.cljs$core$IFn$_invoke$arity$2 = select_options51324__2;
return select_options51324;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options51324);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down51342 = (function() {
var drop_down51342 = null;
var drop_down51342__2 = (function (name,options){return drop_down51342.call(null,name,options,null);
});
var drop_down51342__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down51342 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down51342__2.call(this,name,options);
case 3:
return drop_down51342__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down51342.cljs$core$IFn$_invoke$arity$2 = drop_down51342__2;
drop_down51342.cljs$core$IFn$_invoke$arity$3 = drop_down51342__3;
return drop_down51342;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down51342);
/**
* Creates a text area element.
*/
sablono.core.text_area51343 = (function() {
var text_area51343 = null;
var text_area51343__1 = (function (name){return text_area51343.call(null,name,null);
});
var text_area51343__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area51343 = function(name,value){
switch(arguments.length){
case 1:
return text_area51343__1.call(this,name);
case 2:
return text_area51343__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area51343.cljs$core$IFn$_invoke$arity$1 = text_area51343__1;
text_area51343.cljs$core$IFn$_invoke$arity$2 = text_area51343__2;
return text_area51343;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area51343);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label51344 = (function label51344(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label51344);
/**
* Creates a submit button.
*/
sablono.core.submit_button51345 = (function submit_button51345(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button51345);
/**
* Creates a form reset button.
*/
sablono.core.reset_button51346 = (function reset_button51346(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button51346);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to51347 = (function() { 
var form_to51347__delegate = function (p__51348,body){var vec__51350 = p__51348;var method = cljs.core.nth.call(null,vec__51350,(0),null);var action = cljs.core.nth.call(null,vec__51350,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to51347 = function (p__51348,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to51347__delegate.call(this,p__51348,body);};
form_to51347.cljs$lang$maxFixedArity = 1;
form_to51347.cljs$lang$applyTo = (function (arglist__51351){
var p__51348 = cljs.core.first(arglist__51351);
var body = cljs.core.rest(arglist__51351);
return form_to51347__delegate(p__51348,body);
});
form_to51347.cljs$core$IFn$_invoke$arity$variadic = form_to51347__delegate;
return form_to51347;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to51347);

//# sourceMappingURL=core.js.map