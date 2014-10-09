// Compiled by ClojureScript 0.0-2322
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
var G__32417__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__32416 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__32416,(0),null);var body = cljs.core.nthnext.call(null,vec__32416,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__32417 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32417__delegate.call(this,args);};
G__32417.cljs$lang$maxFixedArity = 0;
G__32417.cljs$lang$applyTo = (function (arglist__32418){
var args = cljs.core.seq(arglist__32418);
return G__32417__delegate(args);
});
G__32417.cljs$core$IFn$_invoke$arity$variadic = G__32417__delegate;
return G__32417;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__32423(s__32424){return (new cljs.core.LazySeq(null,(function (){var s__32424__$1 = s__32424;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32424__$1);if(temp__4126__auto__)
{var s__32424__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32424__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32424__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32426 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32425 = (0);while(true){
if((i__32425 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__32425);cljs.core.chunk_append.call(null,b__32426,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__32427 = (i__32425 + (1));
i__32425 = G__32427;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32426),iter__32423.call(null,cljs.core.chunk_rest.call(null,s__32424__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32426),null);
}
} else
{var args = cljs.core.first.call(null,s__32424__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32423.call(null,cljs.core.rest.call(null,s__32424__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__32432(s__32433){return (new cljs.core.LazySeq(null,(function (){var s__32433__$1 = s__32433;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32433__$1);if(temp__4126__auto__)
{var s__32433__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32433__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32433__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32435 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32434 = (0);while(true){
if((i__32434 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__32434);cljs.core.chunk_append.call(null,b__32435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__32436 = (i__32434 + (1));
i__32434 = G__32436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32435),iter__32432.call(null,cljs.core.chunk_rest.call(null,s__32433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32435),null);
}
} else
{var style = cljs.core.first.call(null,s__32433__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__32432.call(null,cljs.core.rest.call(null,s__32433__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32437){
var styles = cljs.core.seq(arglist__32437);
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
sablono.core.link_to32438 = (function() { 
var link_to32438__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to32438 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to32438__delegate.call(this,url,content);};
link_to32438.cljs$lang$maxFixedArity = 1;
link_to32438.cljs$lang$applyTo = (function (arglist__32439){
var url = cljs.core.first(arglist__32439);
var content = cljs.core.rest(arglist__32439);
return link_to32438__delegate(url,content);
});
link_to32438.cljs$core$IFn$_invoke$arity$variadic = link_to32438__delegate;
return link_to32438;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32438);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32440 = (function() { 
var mail_to32440__delegate = function (e_mail,p__32441){var vec__32443 = p__32441;var content = cljs.core.nth.call(null,vec__32443,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to32440 = function (e_mail,var_args){
var p__32441 = null;if (arguments.length > 1) {
  p__32441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to32440__delegate.call(this,e_mail,p__32441);};
mail_to32440.cljs$lang$maxFixedArity = 1;
mail_to32440.cljs$lang$applyTo = (function (arglist__32444){
var e_mail = cljs.core.first(arglist__32444);
var p__32441 = cljs.core.rest(arglist__32444);
return mail_to32440__delegate(e_mail,p__32441);
});
mail_to32440.cljs$core$IFn$_invoke$arity$variadic = mail_to32440__delegate;
return mail_to32440;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32440);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32445 = (function unordered_list32445(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__32450(s__32451){return (new cljs.core.LazySeq(null,(function (){var s__32451__$1 = s__32451;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32451__$1);if(temp__4126__auto__)
{var s__32451__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32451__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32451__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32453 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32452 = (0);while(true){
if((i__32452 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32452);cljs.core.chunk_append.call(null,b__32453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__32454 = (i__32452 + (1));
i__32452 = G__32454;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32453),iter__32450.call(null,cljs.core.chunk_rest.call(null,s__32451__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32453),null);
}
} else
{var x = cljs.core.first.call(null,s__32451__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32450.call(null,cljs.core.rest.call(null,s__32451__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32445);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32455 = (function ordered_list32455(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__32460(s__32461){return (new cljs.core.LazySeq(null,(function (){var s__32461__$1 = s__32461;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32461__$1);if(temp__4126__auto__)
{var s__32461__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32461__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32461__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32463 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32462 = (0);while(true){
if((i__32462 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32462);cljs.core.chunk_append.call(null,b__32463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__32464 = (i__32462 + (1));
i__32462 = G__32464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32463),iter__32460.call(null,cljs.core.chunk_rest.call(null,s__32461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32463),null);
}
} else
{var x = cljs.core.first.call(null,s__32461__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32460.call(null,cljs.core.rest.call(null,s__32461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32455);
/**
* Create an image element.
*/
sablono.core.image32465 = (function() {
var image32465 = null;
var image32465__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image32465__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image32465 = function(src,alt){
switch(arguments.length){
case 1:
return image32465__1.call(this,src);
case 2:
return image32465__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32465.cljs$core$IFn$_invoke$arity$1 = image32465__1;
image32465.cljs$core$IFn$_invoke$arity$2 = image32465__2;
return image32465;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32465);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__32466_SHARP_,p2__32467_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32466_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32467_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__32468_SHARP_,p2__32469_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32468_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32469_SHARP_));
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
sablono.core.color_field32470 = (function() {
var color_field32470 = null;
var color_field32470__1 = (function (name__10239__auto__){return color_field32470.call(null,name__10239__auto__,null);
});
var color_field32470__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field32470 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field32470__1.call(this,name__10239__auto__);
case 2:
return color_field32470__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32470.cljs$core$IFn$_invoke$arity$1 = color_field32470__1;
color_field32470.cljs$core$IFn$_invoke$arity$2 = color_field32470__2;
return color_field32470;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32470);
/**
* Creates a date input field.
*/
sablono.core.date_field32471 = (function() {
var date_field32471 = null;
var date_field32471__1 = (function (name__10239__auto__){return date_field32471.call(null,name__10239__auto__,null);
});
var date_field32471__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field32471 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field32471__1.call(this,name__10239__auto__);
case 2:
return date_field32471__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32471.cljs$core$IFn$_invoke$arity$1 = date_field32471__1;
date_field32471.cljs$core$IFn$_invoke$arity$2 = date_field32471__2;
return date_field32471;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32471);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32472 = (function() {
var datetime_field32472 = null;
var datetime_field32472__1 = (function (name__10239__auto__){return datetime_field32472.call(null,name__10239__auto__,null);
});
var datetime_field32472__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field32472 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field32472__1.call(this,name__10239__auto__);
case 2:
return datetime_field32472__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32472.cljs$core$IFn$_invoke$arity$1 = datetime_field32472__1;
datetime_field32472.cljs$core$IFn$_invoke$arity$2 = datetime_field32472__2;
return datetime_field32472;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32472);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32473 = (function() {
var datetime_local_field32473 = null;
var datetime_local_field32473__1 = (function (name__10239__auto__){return datetime_local_field32473.call(null,name__10239__auto__,null);
});
var datetime_local_field32473__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field32473 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32473__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field32473__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32473.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32473__1;
datetime_local_field32473.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32473__2;
return datetime_local_field32473;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32473);
/**
* Creates a email input field.
*/
sablono.core.email_field32474 = (function() {
var email_field32474 = null;
var email_field32474__1 = (function (name__10239__auto__){return email_field32474.call(null,name__10239__auto__,null);
});
var email_field32474__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field32474 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field32474__1.call(this,name__10239__auto__);
case 2:
return email_field32474__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32474.cljs$core$IFn$_invoke$arity$1 = email_field32474__1;
email_field32474.cljs$core$IFn$_invoke$arity$2 = email_field32474__2;
return email_field32474;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32474);
/**
* Creates a file input field.
*/
sablono.core.file_field32475 = (function() {
var file_field32475 = null;
var file_field32475__1 = (function (name__10239__auto__){return file_field32475.call(null,name__10239__auto__,null);
});
var file_field32475__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field32475 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field32475__1.call(this,name__10239__auto__);
case 2:
return file_field32475__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32475.cljs$core$IFn$_invoke$arity$1 = file_field32475__1;
file_field32475.cljs$core$IFn$_invoke$arity$2 = file_field32475__2;
return file_field32475;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32475);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32476 = (function() {
var hidden_field32476 = null;
var hidden_field32476__1 = (function (name__10239__auto__){return hidden_field32476.call(null,name__10239__auto__,null);
});
var hidden_field32476__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field32476 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field32476__1.call(this,name__10239__auto__);
case 2:
return hidden_field32476__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32476.cljs$core$IFn$_invoke$arity$1 = hidden_field32476__1;
hidden_field32476.cljs$core$IFn$_invoke$arity$2 = hidden_field32476__2;
return hidden_field32476;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32476);
/**
* Creates a month input field.
*/
sablono.core.month_field32477 = (function() {
var month_field32477 = null;
var month_field32477__1 = (function (name__10239__auto__){return month_field32477.call(null,name__10239__auto__,null);
});
var month_field32477__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field32477 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field32477__1.call(this,name__10239__auto__);
case 2:
return month_field32477__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32477.cljs$core$IFn$_invoke$arity$1 = month_field32477__1;
month_field32477.cljs$core$IFn$_invoke$arity$2 = month_field32477__2;
return month_field32477;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32477);
/**
* Creates a number input field.
*/
sablono.core.number_field32478 = (function() {
var number_field32478 = null;
var number_field32478__1 = (function (name__10239__auto__){return number_field32478.call(null,name__10239__auto__,null);
});
var number_field32478__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field32478 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field32478__1.call(this,name__10239__auto__);
case 2:
return number_field32478__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32478.cljs$core$IFn$_invoke$arity$1 = number_field32478__1;
number_field32478.cljs$core$IFn$_invoke$arity$2 = number_field32478__2;
return number_field32478;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32478);
/**
* Creates a password input field.
*/
sablono.core.password_field32479 = (function() {
var password_field32479 = null;
var password_field32479__1 = (function (name__10239__auto__){return password_field32479.call(null,name__10239__auto__,null);
});
var password_field32479__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field32479 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field32479__1.call(this,name__10239__auto__);
case 2:
return password_field32479__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32479.cljs$core$IFn$_invoke$arity$1 = password_field32479__1;
password_field32479.cljs$core$IFn$_invoke$arity$2 = password_field32479__2;
return password_field32479;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32479);
/**
* Creates a range input field.
*/
sablono.core.range_field32480 = (function() {
var range_field32480 = null;
var range_field32480__1 = (function (name__10239__auto__){return range_field32480.call(null,name__10239__auto__,null);
});
var range_field32480__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field32480 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field32480__1.call(this,name__10239__auto__);
case 2:
return range_field32480__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32480.cljs$core$IFn$_invoke$arity$1 = range_field32480__1;
range_field32480.cljs$core$IFn$_invoke$arity$2 = range_field32480__2;
return range_field32480;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32480);
/**
* Creates a search input field.
*/
sablono.core.search_field32481 = (function() {
var search_field32481 = null;
var search_field32481__1 = (function (name__10239__auto__){return search_field32481.call(null,name__10239__auto__,null);
});
var search_field32481__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field32481 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field32481__1.call(this,name__10239__auto__);
case 2:
return search_field32481__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32481.cljs$core$IFn$_invoke$arity$1 = search_field32481__1;
search_field32481.cljs$core$IFn$_invoke$arity$2 = search_field32481__2;
return search_field32481;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32481);
/**
* Creates a tel input field.
*/
sablono.core.tel_field32482 = (function() {
var tel_field32482 = null;
var tel_field32482__1 = (function (name__10239__auto__){return tel_field32482.call(null,name__10239__auto__,null);
});
var tel_field32482__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field32482 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field32482__1.call(this,name__10239__auto__);
case 2:
return tel_field32482__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32482.cljs$core$IFn$_invoke$arity$1 = tel_field32482__1;
tel_field32482.cljs$core$IFn$_invoke$arity$2 = tel_field32482__2;
return tel_field32482;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32482);
/**
* Creates a text input field.
*/
sablono.core.text_field32483 = (function() {
var text_field32483 = null;
var text_field32483__1 = (function (name__10239__auto__){return text_field32483.call(null,name__10239__auto__,null);
});
var text_field32483__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field32483 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field32483__1.call(this,name__10239__auto__);
case 2:
return text_field32483__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32483.cljs$core$IFn$_invoke$arity$1 = text_field32483__1;
text_field32483.cljs$core$IFn$_invoke$arity$2 = text_field32483__2;
return text_field32483;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32483);
/**
* Creates a time input field.
*/
sablono.core.time_field32484 = (function() {
var time_field32484 = null;
var time_field32484__1 = (function (name__10239__auto__){return time_field32484.call(null,name__10239__auto__,null);
});
var time_field32484__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field32484 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field32484__1.call(this,name__10239__auto__);
case 2:
return time_field32484__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32484.cljs$core$IFn$_invoke$arity$1 = time_field32484__1;
time_field32484.cljs$core$IFn$_invoke$arity$2 = time_field32484__2;
return time_field32484;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32484);
/**
* Creates a url input field.
*/
sablono.core.url_field32485 = (function() {
var url_field32485 = null;
var url_field32485__1 = (function (name__10239__auto__){return url_field32485.call(null,name__10239__auto__,null);
});
var url_field32485__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field32485 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field32485__1.call(this,name__10239__auto__);
case 2:
return url_field32485__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32485.cljs$core$IFn$_invoke$arity$1 = url_field32485__1;
url_field32485.cljs$core$IFn$_invoke$arity$2 = url_field32485__2;
return url_field32485;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32485);
/**
* Creates a week input field.
*/
sablono.core.week_field32486 = (function() {
var week_field32486 = null;
var week_field32486__1 = (function (name__10239__auto__){return week_field32486.call(null,name__10239__auto__,null);
});
var week_field32486__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field32486 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field32486__1.call(this,name__10239__auto__);
case 2:
return week_field32486__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32486.cljs$core$IFn$_invoke$arity$1 = week_field32486__1;
week_field32486.cljs$core$IFn$_invoke$arity$2 = week_field32486__2;
return week_field32486;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32486);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32487 = (function() {
var check_box32487 = null;
var check_box32487__1 = (function (name){return check_box32487.call(null,name,null);
});
var check_box32487__2 = (function (name,checked_QMARK_){return check_box32487.call(null,name,checked_QMARK_,"true");
});
var check_box32487__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box32487 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32487__1.call(this,name);
case 2:
return check_box32487__2.call(this,name,checked_QMARK_);
case 3:
return check_box32487__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32487.cljs$core$IFn$_invoke$arity$1 = check_box32487__1;
check_box32487.cljs$core$IFn$_invoke$arity$2 = check_box32487__2;
check_box32487.cljs$core$IFn$_invoke$arity$3 = check_box32487__3;
return check_box32487;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32487);
/**
* Creates a radio button.
*/
sablono.core.radio_button32488 = (function() {
var radio_button32488 = null;
var radio_button32488__1 = (function (group){return radio_button32488.call(null,group,null);
});
var radio_button32488__2 = (function (group,checked_QMARK_){return radio_button32488.call(null,group,checked_QMARK_,"true");
});
var radio_button32488__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button32488 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32488__1.call(this,group);
case 2:
return radio_button32488__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32488__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32488.cljs$core$IFn$_invoke$arity$1 = radio_button32488__1;
radio_button32488.cljs$core$IFn$_invoke$arity$2 = radio_button32488__2;
radio_button32488.cljs$core$IFn$_invoke$arity$3 = radio_button32488__3;
return radio_button32488;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32488);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32489 = (function() {
var select_options32489 = null;
var select_options32489__1 = (function (coll){return select_options32489.call(null,coll,null);
});
var select_options32489__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__32498(s__32499){return (new cljs.core.LazySeq(null,(function (){var s__32499__$1 = s__32499;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32499__$1);if(temp__4126__auto__)
{var s__32499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32499__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32499__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32501 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32500 = (0);while(true){
if((i__32500 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32500);cljs.core.chunk_append.call(null,b__32501,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32504 = x;var text = cljs.core.nth.call(null,vec__32504,(0),null);var val = cljs.core.nth.call(null,vec__32504,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__32504,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32489.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__32506 = (i__32500 + (1));
i__32500 = G__32506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32501),iter__32498.call(null,cljs.core.chunk_rest.call(null,s__32499__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32501),null);
}
} else
{var x = cljs.core.first.call(null,s__32499__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32505 = x;var text = cljs.core.nth.call(null,vec__32505,(0),null);var val = cljs.core.nth.call(null,vec__32505,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__32505,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32489.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__32498.call(null,cljs.core.rest.call(null,s__32499__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options32489 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32489__1.call(this,coll);
case 2:
return select_options32489__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32489.cljs$core$IFn$_invoke$arity$1 = select_options32489__1;
select_options32489.cljs$core$IFn$_invoke$arity$2 = select_options32489__2;
return select_options32489;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32489);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32507 = (function() {
var drop_down32507 = null;
var drop_down32507__2 = (function (name,options){return drop_down32507.call(null,name,options,null);
});
var drop_down32507__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down32507 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32507__2.call(this,name,options);
case 3:
return drop_down32507__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32507.cljs$core$IFn$_invoke$arity$2 = drop_down32507__2;
drop_down32507.cljs$core$IFn$_invoke$arity$3 = drop_down32507__3;
return drop_down32507;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32507);
/**
* Creates a text area element.
*/
sablono.core.text_area32508 = (function() {
var text_area32508 = null;
var text_area32508__1 = (function (name){return text_area32508.call(null,name,null);
});
var text_area32508__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area32508 = function(name,value){
switch(arguments.length){
case 1:
return text_area32508__1.call(this,name);
case 2:
return text_area32508__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32508.cljs$core$IFn$_invoke$arity$1 = text_area32508__1;
text_area32508.cljs$core$IFn$_invoke$arity$2 = text_area32508__2;
return text_area32508;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32508);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32509 = (function label32509(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32509);
/**
* Creates a submit button.
*/
sablono.core.submit_button32510 = (function submit_button32510(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32510);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32511 = (function reset_button32511(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32511);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32512 = (function() { 
var form_to32512__delegate = function (p__32513,body){var vec__32515 = p__32513;var method = cljs.core.nth.call(null,vec__32515,(0),null);var action = cljs.core.nth.call(null,vec__32515,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to32512 = function (p__32513,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to32512__delegate.call(this,p__32513,body);};
form_to32512.cljs$lang$maxFixedArity = 1;
form_to32512.cljs$lang$applyTo = (function (arglist__32516){
var p__32513 = cljs.core.first(arglist__32516);
var body = cljs.core.rest(arglist__32516);
return form_to32512__delegate(p__32513,body);
});
form_to32512.cljs$core$IFn$_invoke$arity$variadic = form_to32512__delegate;
return form_to32512;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32512);
