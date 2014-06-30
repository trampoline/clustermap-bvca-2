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
var G__17365__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17364 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17364,0,null);var body = cljs.core.nthnext.call(null,vec__17364,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17365 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17365__delegate.call(this,args);};
G__17365.cljs$lang$maxFixedArity = 0;
G__17365.cljs$lang$applyTo = (function (arglist__17366){
var args = cljs.core.seq(arglist__17366);
return G__17365__delegate(args);
});
G__17365.cljs$core$IFn$_invoke$arity$variadic = G__17365__delegate;
return G__17365;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__17371(s__17372){return (new cljs.core.LazySeq(null,(function (){var s__17372__$1 = s__17372;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17372__$1);if(temp__4126__auto__)
{var s__17372__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17372__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__17372__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__17374 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__17373 = 0;while(true){
if((i__17373 < size__4265__auto__))
{var args = cljs.core._nth.call(null,c__4264__auto__,i__17373);cljs.core.chunk_append.call(null,b__17374,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17375 = (i__17373 + 1);
i__17373 = G__17375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17374),iter__17371.call(null,cljs.core.chunk_rest.call(null,s__17372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17374),null);
}
} else
{var args = cljs.core.first.call(null,s__17372__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17371.call(null,cljs.core.rest.call(null,s__17372__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__17380(s__17381){return (new cljs.core.LazySeq(null,(function (){var s__17381__$1 = s__17381;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17381__$1);if(temp__4126__auto__)
{var s__17381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17381__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__17381__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__17383 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__17382 = 0;while(true){
if((i__17382 < size__4265__auto__))
{var style = cljs.core._nth.call(null,c__4264__auto__,i__17382);cljs.core.chunk_append.call(null,b__17383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17384 = (i__17382 + 1);
i__17382 = G__17384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17383),iter__17380.call(null,cljs.core.chunk_rest.call(null,s__17381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17383),null);
}
} else
{var style = cljs.core.first.call(null,s__17381__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17380.call(null,cljs.core.rest.call(null,s__17381__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17385){
var styles = cljs.core.seq(arglist__17385);
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
sablono.core.link_to17386 = (function() { 
var link_to17386__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17386 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17386__delegate.call(this,url,content);};
link_to17386.cljs$lang$maxFixedArity = 1;
link_to17386.cljs$lang$applyTo = (function (arglist__17387){
var url = cljs.core.first(arglist__17387);
var content = cljs.core.rest(arglist__17387);
return link_to17386__delegate(url,content);
});
link_to17386.cljs$core$IFn$_invoke$arity$variadic = link_to17386__delegate;
return link_to17386;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17386);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17388 = (function() { 
var mail_to17388__delegate = function (e_mail,p__17389){var vec__17391 = p__17389;var content = cljs.core.nth.call(null,vec__17391,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17388 = function (e_mail,var_args){
var p__17389 = null;if (arguments.length > 1) {
  p__17389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17388__delegate.call(this,e_mail,p__17389);};
mail_to17388.cljs$lang$maxFixedArity = 1;
mail_to17388.cljs$lang$applyTo = (function (arglist__17392){
var e_mail = cljs.core.first(arglist__17392);
var p__17389 = cljs.core.rest(arglist__17392);
return mail_to17388__delegate(e_mail,p__17389);
});
mail_to17388.cljs$core$IFn$_invoke$arity$variadic = mail_to17388__delegate;
return mail_to17388;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17388);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17393 = (function unordered_list17393(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4266__auto__ = (function iter__17398(s__17399){return (new cljs.core.LazySeq(null,(function (){var s__17399__$1 = s__17399;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17399__$1);if(temp__4126__auto__)
{var s__17399__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17399__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__17399__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__17401 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__17400 = 0;while(true){
if((i__17400 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__17400);cljs.core.chunk_append.call(null,b__17401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17402 = (i__17400 + 1);
i__17400 = G__17402;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17401),iter__17398.call(null,cljs.core.chunk_rest.call(null,s__17399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17401),null);
}
} else
{var x = cljs.core.first.call(null,s__17399__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17398.call(null,cljs.core.rest.call(null,s__17399__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17393);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17403 = (function ordered_list17403(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4266__auto__ = (function iter__17408(s__17409){return (new cljs.core.LazySeq(null,(function (){var s__17409__$1 = s__17409;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17409__$1);if(temp__4126__auto__)
{var s__17409__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17409__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__17409__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__17411 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__17410 = 0;while(true){
if((i__17410 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__17410);cljs.core.chunk_append.call(null,b__17411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17412 = (i__17410 + 1);
i__17410 = G__17412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),iter__17408.call(null,cljs.core.chunk_rest.call(null,s__17409__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),null);
}
} else
{var x = cljs.core.first.call(null,s__17409__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17408.call(null,cljs.core.rest.call(null,s__17409__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17403);
/**
* Create an image element.
*/
sablono.core.image17413 = (function() {
var image17413 = null;
var image17413__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17413__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17413 = function(src,alt){
switch(arguments.length){
case 1:
return image17413__1.call(this,src);
case 2:
return image17413__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17413.cljs$core$IFn$_invoke$arity$1 = image17413__1;
image17413.cljs$core$IFn$_invoke$arity$2 = image17413__2;
return image17413;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17413);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17414_SHARP_,p2__17415_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17414_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17415_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17416_SHARP_,p2__17417_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17416_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17417_SHARP_));
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
sablono.core.color_field17418 = (function() {
var color_field17418 = null;
var color_field17418__1 = (function (name__10091__auto__){return color_field17418.call(null,name__10091__auto__,null);
});
var color_field17418__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10091__auto__,value__10092__auto__);
});
color_field17418 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return color_field17418__1.call(this,name__10091__auto__);
case 2:
return color_field17418__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17418.cljs$core$IFn$_invoke$arity$1 = color_field17418__1;
color_field17418.cljs$core$IFn$_invoke$arity$2 = color_field17418__2;
return color_field17418;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17418);
/**
* Creates a date input field.
*/
sablono.core.date_field17419 = (function() {
var date_field17419 = null;
var date_field17419__1 = (function (name__10091__auto__){return date_field17419.call(null,name__10091__auto__,null);
});
var date_field17419__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10091__auto__,value__10092__auto__);
});
date_field17419 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return date_field17419__1.call(this,name__10091__auto__);
case 2:
return date_field17419__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17419.cljs$core$IFn$_invoke$arity$1 = date_field17419__1;
date_field17419.cljs$core$IFn$_invoke$arity$2 = date_field17419__2;
return date_field17419;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17419);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17420 = (function() {
var datetime_field17420 = null;
var datetime_field17420__1 = (function (name__10091__auto__){return datetime_field17420.call(null,name__10091__auto__,null);
});
var datetime_field17420__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10091__auto__,value__10092__auto__);
});
datetime_field17420 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_field17420__1.call(this,name__10091__auto__);
case 2:
return datetime_field17420__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17420.cljs$core$IFn$_invoke$arity$1 = datetime_field17420__1;
datetime_field17420.cljs$core$IFn$_invoke$arity$2 = datetime_field17420__2;
return datetime_field17420;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17420);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17421 = (function() {
var datetime_local_field17421 = null;
var datetime_local_field17421__1 = (function (name__10091__auto__){return datetime_local_field17421.call(null,name__10091__auto__,null);
});
var datetime_local_field17421__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10091__auto__,value__10092__auto__);
});
datetime_local_field17421 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17421__1.call(this,name__10091__auto__);
case 2:
return datetime_local_field17421__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17421.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17421__1;
datetime_local_field17421.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17421__2;
return datetime_local_field17421;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17421);
/**
* Creates a email input field.
*/
sablono.core.email_field17422 = (function() {
var email_field17422 = null;
var email_field17422__1 = (function (name__10091__auto__){return email_field17422.call(null,name__10091__auto__,null);
});
var email_field17422__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10091__auto__,value__10092__auto__);
});
email_field17422 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return email_field17422__1.call(this,name__10091__auto__);
case 2:
return email_field17422__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17422.cljs$core$IFn$_invoke$arity$1 = email_field17422__1;
email_field17422.cljs$core$IFn$_invoke$arity$2 = email_field17422__2;
return email_field17422;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17422);
/**
* Creates a file input field.
*/
sablono.core.file_field17423 = (function() {
var file_field17423 = null;
var file_field17423__1 = (function (name__10091__auto__){return file_field17423.call(null,name__10091__auto__,null);
});
var file_field17423__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10091__auto__,value__10092__auto__);
});
file_field17423 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return file_field17423__1.call(this,name__10091__auto__);
case 2:
return file_field17423__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17423.cljs$core$IFn$_invoke$arity$1 = file_field17423__1;
file_field17423.cljs$core$IFn$_invoke$arity$2 = file_field17423__2;
return file_field17423;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17423);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17424 = (function() {
var hidden_field17424 = null;
var hidden_field17424__1 = (function (name__10091__auto__){return hidden_field17424.call(null,name__10091__auto__,null);
});
var hidden_field17424__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10091__auto__,value__10092__auto__);
});
hidden_field17424 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return hidden_field17424__1.call(this,name__10091__auto__);
case 2:
return hidden_field17424__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17424.cljs$core$IFn$_invoke$arity$1 = hidden_field17424__1;
hidden_field17424.cljs$core$IFn$_invoke$arity$2 = hidden_field17424__2;
return hidden_field17424;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17424);
/**
* Creates a month input field.
*/
sablono.core.month_field17425 = (function() {
var month_field17425 = null;
var month_field17425__1 = (function (name__10091__auto__){return month_field17425.call(null,name__10091__auto__,null);
});
var month_field17425__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10091__auto__,value__10092__auto__);
});
month_field17425 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return month_field17425__1.call(this,name__10091__auto__);
case 2:
return month_field17425__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17425.cljs$core$IFn$_invoke$arity$1 = month_field17425__1;
month_field17425.cljs$core$IFn$_invoke$arity$2 = month_field17425__2;
return month_field17425;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17425);
/**
* Creates a number input field.
*/
sablono.core.number_field17426 = (function() {
var number_field17426 = null;
var number_field17426__1 = (function (name__10091__auto__){return number_field17426.call(null,name__10091__auto__,null);
});
var number_field17426__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10091__auto__,value__10092__auto__);
});
number_field17426 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return number_field17426__1.call(this,name__10091__auto__);
case 2:
return number_field17426__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17426.cljs$core$IFn$_invoke$arity$1 = number_field17426__1;
number_field17426.cljs$core$IFn$_invoke$arity$2 = number_field17426__2;
return number_field17426;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17426);
/**
* Creates a password input field.
*/
sablono.core.password_field17427 = (function() {
var password_field17427 = null;
var password_field17427__1 = (function (name__10091__auto__){return password_field17427.call(null,name__10091__auto__,null);
});
var password_field17427__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10091__auto__,value__10092__auto__);
});
password_field17427 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return password_field17427__1.call(this,name__10091__auto__);
case 2:
return password_field17427__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17427.cljs$core$IFn$_invoke$arity$1 = password_field17427__1;
password_field17427.cljs$core$IFn$_invoke$arity$2 = password_field17427__2;
return password_field17427;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17427);
/**
* Creates a range input field.
*/
sablono.core.range_field17428 = (function() {
var range_field17428 = null;
var range_field17428__1 = (function (name__10091__auto__){return range_field17428.call(null,name__10091__auto__,null);
});
var range_field17428__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10091__auto__,value__10092__auto__);
});
range_field17428 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return range_field17428__1.call(this,name__10091__auto__);
case 2:
return range_field17428__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17428.cljs$core$IFn$_invoke$arity$1 = range_field17428__1;
range_field17428.cljs$core$IFn$_invoke$arity$2 = range_field17428__2;
return range_field17428;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17428);
/**
* Creates a search input field.
*/
sablono.core.search_field17429 = (function() {
var search_field17429 = null;
var search_field17429__1 = (function (name__10091__auto__){return search_field17429.call(null,name__10091__auto__,null);
});
var search_field17429__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10091__auto__,value__10092__auto__);
});
search_field17429 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return search_field17429__1.call(this,name__10091__auto__);
case 2:
return search_field17429__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17429.cljs$core$IFn$_invoke$arity$1 = search_field17429__1;
search_field17429.cljs$core$IFn$_invoke$arity$2 = search_field17429__2;
return search_field17429;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17429);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17430 = (function() {
var tel_field17430 = null;
var tel_field17430__1 = (function (name__10091__auto__){return tel_field17430.call(null,name__10091__auto__,null);
});
var tel_field17430__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10091__auto__,value__10092__auto__);
});
tel_field17430 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return tel_field17430__1.call(this,name__10091__auto__);
case 2:
return tel_field17430__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17430.cljs$core$IFn$_invoke$arity$1 = tel_field17430__1;
tel_field17430.cljs$core$IFn$_invoke$arity$2 = tel_field17430__2;
return tel_field17430;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17430);
/**
* Creates a text input field.
*/
sablono.core.text_field17431 = (function() {
var text_field17431 = null;
var text_field17431__1 = (function (name__10091__auto__){return text_field17431.call(null,name__10091__auto__,null);
});
var text_field17431__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10091__auto__,value__10092__auto__);
});
text_field17431 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return text_field17431__1.call(this,name__10091__auto__);
case 2:
return text_field17431__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17431.cljs$core$IFn$_invoke$arity$1 = text_field17431__1;
text_field17431.cljs$core$IFn$_invoke$arity$2 = text_field17431__2;
return text_field17431;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17431);
/**
* Creates a time input field.
*/
sablono.core.time_field17432 = (function() {
var time_field17432 = null;
var time_field17432__1 = (function (name__10091__auto__){return time_field17432.call(null,name__10091__auto__,null);
});
var time_field17432__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10091__auto__,value__10092__auto__);
});
time_field17432 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return time_field17432__1.call(this,name__10091__auto__);
case 2:
return time_field17432__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17432.cljs$core$IFn$_invoke$arity$1 = time_field17432__1;
time_field17432.cljs$core$IFn$_invoke$arity$2 = time_field17432__2;
return time_field17432;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17432);
/**
* Creates a url input field.
*/
sablono.core.url_field17433 = (function() {
var url_field17433 = null;
var url_field17433__1 = (function (name__10091__auto__){return url_field17433.call(null,name__10091__auto__,null);
});
var url_field17433__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10091__auto__,value__10092__auto__);
});
url_field17433 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return url_field17433__1.call(this,name__10091__auto__);
case 2:
return url_field17433__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17433.cljs$core$IFn$_invoke$arity$1 = url_field17433__1;
url_field17433.cljs$core$IFn$_invoke$arity$2 = url_field17433__2;
return url_field17433;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17433);
/**
* Creates a week input field.
*/
sablono.core.week_field17434 = (function() {
var week_field17434 = null;
var week_field17434__1 = (function (name__10091__auto__){return week_field17434.call(null,name__10091__auto__,null);
});
var week_field17434__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10091__auto__,value__10092__auto__);
});
week_field17434 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return week_field17434__1.call(this,name__10091__auto__);
case 2:
return week_field17434__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17434.cljs$core$IFn$_invoke$arity$1 = week_field17434__1;
week_field17434.cljs$core$IFn$_invoke$arity$2 = week_field17434__2;
return week_field17434;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17434);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17435 = (function() {
var check_box17435 = null;
var check_box17435__1 = (function (name){return check_box17435.call(null,name,null);
});
var check_box17435__2 = (function (name,checked_QMARK_){return check_box17435.call(null,name,checked_QMARK_,"true");
});
var check_box17435__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17435 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17435__1.call(this,name);
case 2:
return check_box17435__2.call(this,name,checked_QMARK_);
case 3:
return check_box17435__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17435.cljs$core$IFn$_invoke$arity$1 = check_box17435__1;
check_box17435.cljs$core$IFn$_invoke$arity$2 = check_box17435__2;
check_box17435.cljs$core$IFn$_invoke$arity$3 = check_box17435__3;
return check_box17435;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17435);
/**
* Creates a radio button.
*/
sablono.core.radio_button17436 = (function() {
var radio_button17436 = null;
var radio_button17436__1 = (function (group){return radio_button17436.call(null,group,null);
});
var radio_button17436__2 = (function (group,checked_QMARK_){return radio_button17436.call(null,group,checked_QMARK_,"true");
});
var radio_button17436__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17436 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17436__1.call(this,group);
case 2:
return radio_button17436__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17436__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17436.cljs$core$IFn$_invoke$arity$1 = radio_button17436__1;
radio_button17436.cljs$core$IFn$_invoke$arity$2 = radio_button17436__2;
radio_button17436.cljs$core$IFn$_invoke$arity$3 = radio_button17436__3;
return radio_button17436;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17436);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17437 = (function() {
var select_options17437 = null;
var select_options17437__1 = (function (coll){return select_options17437.call(null,coll,null);
});
var select_options17437__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__17446(s__17447){return (new cljs.core.LazySeq(null,(function (){var s__17447__$1 = s__17447;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17447__$1);if(temp__4126__auto__)
{var s__17447__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17447__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__17447__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__17449 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__17448 = 0;while(true){
if((i__17448 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__17448);cljs.core.chunk_append.call(null,b__17449,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17452 = x;var text = cljs.core.nth.call(null,vec__17452,0,null);var val = cljs.core.nth.call(null,vec__17452,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17452,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17437.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17454 = (i__17448 + 1);
i__17448 = G__17454;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17449),iter__17446.call(null,cljs.core.chunk_rest.call(null,s__17447__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17449),null);
}
} else
{var x = cljs.core.first.call(null,s__17447__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17453 = x;var text = cljs.core.nth.call(null,vec__17453,0,null);var val = cljs.core.nth.call(null,vec__17453,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17453,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17437.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17446.call(null,cljs.core.rest.call(null,s__17447__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
});
select_options17437 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17437__1.call(this,coll);
case 2:
return select_options17437__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17437.cljs$core$IFn$_invoke$arity$1 = select_options17437__1;
select_options17437.cljs$core$IFn$_invoke$arity$2 = select_options17437__2;
return select_options17437;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17437);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17455 = (function() {
var drop_down17455 = null;
var drop_down17455__2 = (function (name,options){return drop_down17455.call(null,name,options,null);
});
var drop_down17455__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17455 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17455__2.call(this,name,options);
case 3:
return drop_down17455__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17455.cljs$core$IFn$_invoke$arity$2 = drop_down17455__2;
drop_down17455.cljs$core$IFn$_invoke$arity$3 = drop_down17455__3;
return drop_down17455;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17455);
/**
* Creates a text area element.
*/
sablono.core.text_area17456 = (function() {
var text_area17456 = null;
var text_area17456__1 = (function (name){return text_area17456.call(null,name,null);
});
var text_area17456__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17456 = function(name,value){
switch(arguments.length){
case 1:
return text_area17456__1.call(this,name);
case 2:
return text_area17456__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17456.cljs$core$IFn$_invoke$arity$1 = text_area17456__1;
text_area17456.cljs$core$IFn$_invoke$arity$2 = text_area17456__2;
return text_area17456;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17456);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17457 = (function label17457(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17457);
/**
* Creates a submit button.
*/
sablono.core.submit_button17458 = (function submit_button17458(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17458);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17459 = (function reset_button17459(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17459);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17460 = (function() { 
var form_to17460__delegate = function (p__17461,body){var vec__17463 = p__17461;var method = cljs.core.nth.call(null,vec__17463,0,null);var action = cljs.core.nth.call(null,vec__17463,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17460 = function (p__17461,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17460__delegate.call(this,p__17461,body);};
form_to17460.cljs$lang$maxFixedArity = 1;
form_to17460.cljs$lang$applyTo = (function (arglist__17464){
var p__17461 = cljs.core.first(arglist__17464);
var body = cljs.core.rest(arglist__17464);
return form_to17460__delegate(p__17461,body);
});
form_to17460.cljs$core$IFn$_invoke$arity$variadic = form_to17460__delegate;
return form_to17460;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17460);
