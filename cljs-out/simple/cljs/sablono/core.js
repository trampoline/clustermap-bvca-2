// Compiled by ClojureScript 0.0-2227
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
var G__17363__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17362 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17362,0,null);var body = cljs.core.nthnext.call(null,vec__17362,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17363 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17363__delegate.call(this,args);};
G__17363.cljs$lang$maxFixedArity = 0;
G__17363.cljs$lang$applyTo = (function (arglist__17364){
var args = cljs.core.seq(arglist__17364);
return G__17363__delegate(args);
});
G__17363.cljs$core$IFn$_invoke$arity$variadic = G__17363__delegate;
return G__17363;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__17369(s__17370){return (new cljs.core.LazySeq(null,(function (){var s__17370__$1 = s__17370;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17370__$1);if(temp__4126__auto__)
{var s__17370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17370__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17370__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17372 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17371 = 0;while(true){
if((i__17371 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__17371);cljs.core.chunk_append.call(null,b__17372,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17373 = (i__17371 + 1);
i__17371 = G__17373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17372),iter__17369.call(null,cljs.core.chunk_rest.call(null,s__17370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17372),null);
}
} else
{var args = cljs.core.first.call(null,s__17370__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17369.call(null,cljs.core.rest.call(null,s__17370__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__17378(s__17379){return (new cljs.core.LazySeq(null,(function (){var s__17379__$1 = s__17379;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17379__$1);if(temp__4126__auto__)
{var s__17379__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17379__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17379__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17381 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17380 = 0;while(true){
if((i__17380 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__17380);cljs.core.chunk_append.call(null,b__17381,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17382 = (i__17380 + 1);
i__17380 = G__17382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17381),iter__17378.call(null,cljs.core.chunk_rest.call(null,s__17379__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17381),null);
}
} else
{var style = cljs.core.first.call(null,s__17379__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17378.call(null,cljs.core.rest.call(null,s__17379__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17383){
var styles = cljs.core.seq(arglist__17383);
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
sablono.core.link_to17384 = (function() { 
var link_to17384__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17384 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17384__delegate.call(this,url,content);};
link_to17384.cljs$lang$maxFixedArity = 1;
link_to17384.cljs$lang$applyTo = (function (arglist__17385){
var url = cljs.core.first(arglist__17385);
var content = cljs.core.rest(arglist__17385);
return link_to17384__delegate(url,content);
});
link_to17384.cljs$core$IFn$_invoke$arity$variadic = link_to17384__delegate;
return link_to17384;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17384);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17386 = (function() { 
var mail_to17386__delegate = function (e_mail,p__17387){var vec__17389 = p__17387;var content = cljs.core.nth.call(null,vec__17389,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17386 = function (e_mail,var_args){
var p__17387 = null;if (arguments.length > 1) {
  p__17387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17386__delegate.call(this,e_mail,p__17387);};
mail_to17386.cljs$lang$maxFixedArity = 1;
mail_to17386.cljs$lang$applyTo = (function (arglist__17390){
var e_mail = cljs.core.first(arglist__17390);
var p__17387 = cljs.core.rest(arglist__17390);
return mail_to17386__delegate(e_mail,p__17387);
});
mail_to17386.cljs$core$IFn$_invoke$arity$variadic = mail_to17386__delegate;
return mail_to17386;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17386);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17391 = (function unordered_list17391(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__17396(s__17397){return (new cljs.core.LazySeq(null,(function (){var s__17397__$1 = s__17397;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17397__$1);if(temp__4126__auto__)
{var s__17397__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17397__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17397__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17399 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17398 = 0;while(true){
if((i__17398 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17398);cljs.core.chunk_append.call(null,b__17399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17400 = (i__17398 + 1);
i__17398 = G__17400;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17399),iter__17396.call(null,cljs.core.chunk_rest.call(null,s__17397__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17399),null);
}
} else
{var x = cljs.core.first.call(null,s__17397__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17396.call(null,cljs.core.rest.call(null,s__17397__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17391);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17401 = (function ordered_list17401(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__17406(s__17407){return (new cljs.core.LazySeq(null,(function (){var s__17407__$1 = s__17407;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17407__$1);if(temp__4126__auto__)
{var s__17407__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17407__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17407__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17409 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17408 = 0;while(true){
if((i__17408 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17408);cljs.core.chunk_append.call(null,b__17409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17410 = (i__17408 + 1);
i__17408 = G__17410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17409),iter__17406.call(null,cljs.core.chunk_rest.call(null,s__17407__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17409),null);
}
} else
{var x = cljs.core.first.call(null,s__17407__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17406.call(null,cljs.core.rest.call(null,s__17407__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17401);
/**
* Create an image element.
*/
sablono.core.image17411 = (function() {
var image17411 = null;
var image17411__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17411__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17411 = function(src,alt){
switch(arguments.length){
case 1:
return image17411__1.call(this,src);
case 2:
return image17411__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17411.cljs$core$IFn$_invoke$arity$1 = image17411__1;
image17411.cljs$core$IFn$_invoke$arity$2 = image17411__2;
return image17411;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17411);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17412_SHARP_,p2__17413_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17412_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17413_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17414_SHARP_,p2__17415_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17414_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17415_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17416 = (function() {
var color_field17416 = null;
var color_field17416__1 = (function (name__10089__auto__){return color_field17416.call(null,name__10089__auto__,null);
});
var color_field17416__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field17416 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field17416__1.call(this,name__10089__auto__);
case 2:
return color_field17416__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17416.cljs$core$IFn$_invoke$arity$1 = color_field17416__1;
color_field17416.cljs$core$IFn$_invoke$arity$2 = color_field17416__2;
return color_field17416;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17416);
/**
* Creates a date input field.
*/
sablono.core.date_field17417 = (function() {
var date_field17417 = null;
var date_field17417__1 = (function (name__10089__auto__){return date_field17417.call(null,name__10089__auto__,null);
});
var date_field17417__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field17417 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field17417__1.call(this,name__10089__auto__);
case 2:
return date_field17417__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17417.cljs$core$IFn$_invoke$arity$1 = date_field17417__1;
date_field17417.cljs$core$IFn$_invoke$arity$2 = date_field17417__2;
return date_field17417;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17417);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17418 = (function() {
var datetime_field17418 = null;
var datetime_field17418__1 = (function (name__10089__auto__){return datetime_field17418.call(null,name__10089__auto__,null);
});
var datetime_field17418__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field17418 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field17418__1.call(this,name__10089__auto__);
case 2:
return datetime_field17418__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17418.cljs$core$IFn$_invoke$arity$1 = datetime_field17418__1;
datetime_field17418.cljs$core$IFn$_invoke$arity$2 = datetime_field17418__2;
return datetime_field17418;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17418);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17419 = (function() {
var datetime_local_field17419 = null;
var datetime_local_field17419__1 = (function (name__10089__auto__){return datetime_local_field17419.call(null,name__10089__auto__,null);
});
var datetime_local_field17419__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field17419 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17419__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field17419__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17419.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17419__1;
datetime_local_field17419.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17419__2;
return datetime_local_field17419;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17419);
/**
* Creates a email input field.
*/
sablono.core.email_field17420 = (function() {
var email_field17420 = null;
var email_field17420__1 = (function (name__10089__auto__){return email_field17420.call(null,name__10089__auto__,null);
});
var email_field17420__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field17420 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field17420__1.call(this,name__10089__auto__);
case 2:
return email_field17420__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17420.cljs$core$IFn$_invoke$arity$1 = email_field17420__1;
email_field17420.cljs$core$IFn$_invoke$arity$2 = email_field17420__2;
return email_field17420;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17420);
/**
* Creates a file input field.
*/
sablono.core.file_field17421 = (function() {
var file_field17421 = null;
var file_field17421__1 = (function (name__10089__auto__){return file_field17421.call(null,name__10089__auto__,null);
});
var file_field17421__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field17421 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field17421__1.call(this,name__10089__auto__);
case 2:
return file_field17421__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17421.cljs$core$IFn$_invoke$arity$1 = file_field17421__1;
file_field17421.cljs$core$IFn$_invoke$arity$2 = file_field17421__2;
return file_field17421;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17421);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17422 = (function() {
var hidden_field17422 = null;
var hidden_field17422__1 = (function (name__10089__auto__){return hidden_field17422.call(null,name__10089__auto__,null);
});
var hidden_field17422__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field17422 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field17422__1.call(this,name__10089__auto__);
case 2:
return hidden_field17422__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17422.cljs$core$IFn$_invoke$arity$1 = hidden_field17422__1;
hidden_field17422.cljs$core$IFn$_invoke$arity$2 = hidden_field17422__2;
return hidden_field17422;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17422);
/**
* Creates a month input field.
*/
sablono.core.month_field17423 = (function() {
var month_field17423 = null;
var month_field17423__1 = (function (name__10089__auto__){return month_field17423.call(null,name__10089__auto__,null);
});
var month_field17423__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field17423 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field17423__1.call(this,name__10089__auto__);
case 2:
return month_field17423__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17423.cljs$core$IFn$_invoke$arity$1 = month_field17423__1;
month_field17423.cljs$core$IFn$_invoke$arity$2 = month_field17423__2;
return month_field17423;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17423);
/**
* Creates a number input field.
*/
sablono.core.number_field17424 = (function() {
var number_field17424 = null;
var number_field17424__1 = (function (name__10089__auto__){return number_field17424.call(null,name__10089__auto__,null);
});
var number_field17424__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field17424 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field17424__1.call(this,name__10089__auto__);
case 2:
return number_field17424__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17424.cljs$core$IFn$_invoke$arity$1 = number_field17424__1;
number_field17424.cljs$core$IFn$_invoke$arity$2 = number_field17424__2;
return number_field17424;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17424);
/**
* Creates a password input field.
*/
sablono.core.password_field17425 = (function() {
var password_field17425 = null;
var password_field17425__1 = (function (name__10089__auto__){return password_field17425.call(null,name__10089__auto__,null);
});
var password_field17425__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field17425 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field17425__1.call(this,name__10089__auto__);
case 2:
return password_field17425__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17425.cljs$core$IFn$_invoke$arity$1 = password_field17425__1;
password_field17425.cljs$core$IFn$_invoke$arity$2 = password_field17425__2;
return password_field17425;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17425);
/**
* Creates a range input field.
*/
sablono.core.range_field17426 = (function() {
var range_field17426 = null;
var range_field17426__1 = (function (name__10089__auto__){return range_field17426.call(null,name__10089__auto__,null);
});
var range_field17426__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field17426 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field17426__1.call(this,name__10089__auto__);
case 2:
return range_field17426__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17426.cljs$core$IFn$_invoke$arity$1 = range_field17426__1;
range_field17426.cljs$core$IFn$_invoke$arity$2 = range_field17426__2;
return range_field17426;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17426);
/**
* Creates a search input field.
*/
sablono.core.search_field17427 = (function() {
var search_field17427 = null;
var search_field17427__1 = (function (name__10089__auto__){return search_field17427.call(null,name__10089__auto__,null);
});
var search_field17427__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field17427 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field17427__1.call(this,name__10089__auto__);
case 2:
return search_field17427__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17427.cljs$core$IFn$_invoke$arity$1 = search_field17427__1;
search_field17427.cljs$core$IFn$_invoke$arity$2 = search_field17427__2;
return search_field17427;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17427);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17428 = (function() {
var tel_field17428 = null;
var tel_field17428__1 = (function (name__10089__auto__){return tel_field17428.call(null,name__10089__auto__,null);
});
var tel_field17428__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field17428 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field17428__1.call(this,name__10089__auto__);
case 2:
return tel_field17428__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17428.cljs$core$IFn$_invoke$arity$1 = tel_field17428__1;
tel_field17428.cljs$core$IFn$_invoke$arity$2 = tel_field17428__2;
return tel_field17428;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17428);
/**
* Creates a text input field.
*/
sablono.core.text_field17429 = (function() {
var text_field17429 = null;
var text_field17429__1 = (function (name__10089__auto__){return text_field17429.call(null,name__10089__auto__,null);
});
var text_field17429__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field17429 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field17429__1.call(this,name__10089__auto__);
case 2:
return text_field17429__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17429.cljs$core$IFn$_invoke$arity$1 = text_field17429__1;
text_field17429.cljs$core$IFn$_invoke$arity$2 = text_field17429__2;
return text_field17429;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17429);
/**
* Creates a time input field.
*/
sablono.core.time_field17430 = (function() {
var time_field17430 = null;
var time_field17430__1 = (function (name__10089__auto__){return time_field17430.call(null,name__10089__auto__,null);
});
var time_field17430__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field17430 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field17430__1.call(this,name__10089__auto__);
case 2:
return time_field17430__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17430.cljs$core$IFn$_invoke$arity$1 = time_field17430__1;
time_field17430.cljs$core$IFn$_invoke$arity$2 = time_field17430__2;
return time_field17430;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17430);
/**
* Creates a url input field.
*/
sablono.core.url_field17431 = (function() {
var url_field17431 = null;
var url_field17431__1 = (function (name__10089__auto__){return url_field17431.call(null,name__10089__auto__,null);
});
var url_field17431__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field17431 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field17431__1.call(this,name__10089__auto__);
case 2:
return url_field17431__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17431.cljs$core$IFn$_invoke$arity$1 = url_field17431__1;
url_field17431.cljs$core$IFn$_invoke$arity$2 = url_field17431__2;
return url_field17431;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17431);
/**
* Creates a week input field.
*/
sablono.core.week_field17432 = (function() {
var week_field17432 = null;
var week_field17432__1 = (function (name__10089__auto__){return week_field17432.call(null,name__10089__auto__,null);
});
var week_field17432__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field17432 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field17432__1.call(this,name__10089__auto__);
case 2:
return week_field17432__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17432.cljs$core$IFn$_invoke$arity$1 = week_field17432__1;
week_field17432.cljs$core$IFn$_invoke$arity$2 = week_field17432__2;
return week_field17432;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17432);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17433 = (function() {
var check_box17433 = null;
var check_box17433__1 = (function (name){return check_box17433.call(null,name,null);
});
var check_box17433__2 = (function (name,checked_QMARK_){return check_box17433.call(null,name,checked_QMARK_,"true");
});
var check_box17433__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17433 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17433__1.call(this,name);
case 2:
return check_box17433__2.call(this,name,checked_QMARK_);
case 3:
return check_box17433__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17433.cljs$core$IFn$_invoke$arity$1 = check_box17433__1;
check_box17433.cljs$core$IFn$_invoke$arity$2 = check_box17433__2;
check_box17433.cljs$core$IFn$_invoke$arity$3 = check_box17433__3;
return check_box17433;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17433);
/**
* Creates a radio button.
*/
sablono.core.radio_button17434 = (function() {
var radio_button17434 = null;
var radio_button17434__1 = (function (group){return radio_button17434.call(null,group,null);
});
var radio_button17434__2 = (function (group,checked_QMARK_){return radio_button17434.call(null,group,checked_QMARK_,"true");
});
var radio_button17434__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17434 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17434__1.call(this,group);
case 2:
return radio_button17434__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17434__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17434.cljs$core$IFn$_invoke$arity$1 = radio_button17434__1;
radio_button17434.cljs$core$IFn$_invoke$arity$2 = radio_button17434__2;
radio_button17434.cljs$core$IFn$_invoke$arity$3 = radio_button17434__3;
return radio_button17434;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17434);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17435 = (function() {
var select_options17435 = null;
var select_options17435__1 = (function (coll){return select_options17435.call(null,coll,null);
});
var select_options17435__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__17444(s__17445){return (new cljs.core.LazySeq(null,(function (){var s__17445__$1 = s__17445;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17445__$1);if(temp__4126__auto__)
{var s__17445__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17445__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17445__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17447 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17446 = 0;while(true){
if((i__17446 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17446);cljs.core.chunk_append.call(null,b__17447,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17450 = x;var text = cljs.core.nth.call(null,vec__17450,0,null);var val = cljs.core.nth.call(null,vec__17450,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17450,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17435.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17452 = (i__17446 + 1);
i__17446 = G__17452;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17447),iter__17444.call(null,cljs.core.chunk_rest.call(null,s__17445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17447),null);
}
} else
{var x = cljs.core.first.call(null,s__17445__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17451 = x;var text = cljs.core.nth.call(null,vec__17451,0,null);var val = cljs.core.nth.call(null,vec__17451,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17451,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17435.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17444.call(null,cljs.core.rest.call(null,s__17445__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options17435 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17435__1.call(this,coll);
case 2:
return select_options17435__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17435.cljs$core$IFn$_invoke$arity$1 = select_options17435__1;
select_options17435.cljs$core$IFn$_invoke$arity$2 = select_options17435__2;
return select_options17435;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17435);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17453 = (function() {
var drop_down17453 = null;
var drop_down17453__2 = (function (name,options){return drop_down17453.call(null,name,options,null);
});
var drop_down17453__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17453 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17453__2.call(this,name,options);
case 3:
return drop_down17453__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17453.cljs$core$IFn$_invoke$arity$2 = drop_down17453__2;
drop_down17453.cljs$core$IFn$_invoke$arity$3 = drop_down17453__3;
return drop_down17453;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17453);
/**
* Creates a text area element.
*/
sablono.core.text_area17454 = (function() {
var text_area17454 = null;
var text_area17454__1 = (function (name){return text_area17454.call(null,name,null);
});
var text_area17454__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17454 = function(name,value){
switch(arguments.length){
case 1:
return text_area17454__1.call(this,name);
case 2:
return text_area17454__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17454.cljs$core$IFn$_invoke$arity$1 = text_area17454__1;
text_area17454.cljs$core$IFn$_invoke$arity$2 = text_area17454__2;
return text_area17454;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17454);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17455 = (function label17455(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17455);
/**
* Creates a submit button.
*/
sablono.core.submit_button17456 = (function submit_button17456(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17456);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17457 = (function reset_button17457(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17457);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17458 = (function() { 
var form_to17458__delegate = function (p__17459,body){var vec__17461 = p__17459;var method = cljs.core.nth.call(null,vec__17461,0,null);var action = cljs.core.nth.call(null,vec__17461,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17458 = function (p__17459,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17458__delegate.call(this,p__17459,body);};
form_to17458.cljs$lang$maxFixedArity = 1;
form_to17458.cljs$lang$applyTo = (function (arglist__17462){
var p__17459 = cljs.core.first(arglist__17462);
var body = cljs.core.rest(arglist__17462);
return form_to17458__delegate(p__17459,body);
});
form_to17458.cljs$core$IFn$_invoke$arity$variadic = form_to17458__delegate;
return form_to17458;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17458);
