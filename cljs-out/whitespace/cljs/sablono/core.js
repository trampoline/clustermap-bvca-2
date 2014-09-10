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
var G__18550__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18549 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18549,(0),null);var body = cljs.core.nthnext.call(null,vec__18549,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18550 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18550__delegate.call(this,args);};
G__18550.cljs$lang$maxFixedArity = 0;
G__18550.cljs$lang$applyTo = (function (arglist__18551){
var args = cljs.core.seq(arglist__18551);
return G__18550__delegate(args);
});
G__18550.cljs$core$IFn$_invoke$arity$variadic = G__18550__delegate;
return G__18550;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__18556(s__18557){return (new cljs.core.LazySeq(null,(function (){var s__18557__$1 = s__18557;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18557__$1);if(temp__4126__auto__)
{var s__18557__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18557__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18557__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18559 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18558 = (0);while(true){
if((i__18558 < size__4265__auto__))
{var args = cljs.core._nth.call(null,c__4264__auto__,i__18558);cljs.core.chunk_append.call(null,b__18559,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18560 = (i__18558 + (1));
i__18558 = G__18560;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18559),iter__18556.call(null,cljs.core.chunk_rest.call(null,s__18557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18559),null);
}
} else
{var args = cljs.core.first.call(null,s__18557__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18556.call(null,cljs.core.rest.call(null,s__18557__$2)));
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__18565(s__18566){return (new cljs.core.LazySeq(null,(function (){var s__18566__$1 = s__18566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18566__$1);if(temp__4126__auto__)
{var s__18566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18566__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18566__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18568 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18567 = (0);while(true){
if((i__18567 < size__4265__auto__))
{var style = cljs.core._nth.call(null,c__4264__auto__,i__18567);cljs.core.chunk_append.call(null,b__18568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18569 = (i__18567 + (1));
i__18567 = G__18569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18568),iter__18565.call(null,cljs.core.chunk_rest.call(null,s__18566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18568),null);
}
} else
{var style = cljs.core.first.call(null,s__18566__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18565.call(null,cljs.core.rest.call(null,s__18566__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__18570){
var styles = cljs.core.seq(arglist__18570);
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
sablono.core.link_to18571 = (function() { 
var link_to18571__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18571 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18571__delegate.call(this,url,content);};
link_to18571.cljs$lang$maxFixedArity = 1;
link_to18571.cljs$lang$applyTo = (function (arglist__18572){
var url = cljs.core.first(arglist__18572);
var content = cljs.core.rest(arglist__18572);
return link_to18571__delegate(url,content);
});
link_to18571.cljs$core$IFn$_invoke$arity$variadic = link_to18571__delegate;
return link_to18571;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18571);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18573 = (function() { 
var mail_to18573__delegate = function (e_mail,p__18574){var vec__18576 = p__18574;var content = cljs.core.nth.call(null,vec__18576,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18573 = function (e_mail,var_args){
var p__18574 = null;if (arguments.length > 1) {
  p__18574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18573__delegate.call(this,e_mail,p__18574);};
mail_to18573.cljs$lang$maxFixedArity = 1;
mail_to18573.cljs$lang$applyTo = (function (arglist__18577){
var e_mail = cljs.core.first(arglist__18577);
var p__18574 = cljs.core.rest(arglist__18577);
return mail_to18573__delegate(e_mail,p__18574);
});
mail_to18573.cljs$core$IFn$_invoke$arity$variadic = mail_to18573__delegate;
return mail_to18573;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18573);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18578 = (function unordered_list18578(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4266__auto__ = (function iter__18583(s__18584){return (new cljs.core.LazySeq(null,(function (){var s__18584__$1 = s__18584;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18584__$1);if(temp__4126__auto__)
{var s__18584__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18584__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18584__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18586 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18585 = (0);while(true){
if((i__18585 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__18585);cljs.core.chunk_append.call(null,b__18586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18587 = (i__18585 + (1));
i__18585 = G__18587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18586),iter__18583.call(null,cljs.core.chunk_rest.call(null,s__18584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18586),null);
}
} else
{var x = cljs.core.first.call(null,s__18584__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18583.call(null,cljs.core.rest.call(null,s__18584__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18578);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18588 = (function ordered_list18588(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4266__auto__ = (function iter__18593(s__18594){return (new cljs.core.LazySeq(null,(function (){var s__18594__$1 = s__18594;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18594__$1);if(temp__4126__auto__)
{var s__18594__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18594__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18594__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18596 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18595 = (0);while(true){
if((i__18595 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__18595);cljs.core.chunk_append.call(null,b__18596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18597 = (i__18595 + (1));
i__18595 = G__18597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18596),iter__18593.call(null,cljs.core.chunk_rest.call(null,s__18594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18596),null);
}
} else
{var x = cljs.core.first.call(null,s__18594__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18593.call(null,cljs.core.rest.call(null,s__18594__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18588);
/**
* Create an image element.
*/
sablono.core.image18598 = (function() {
var image18598 = null;
var image18598__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18598__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18598 = function(src,alt){
switch(arguments.length){
case 1:
return image18598__1.call(this,src);
case 2:
return image18598__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18598.cljs$core$IFn$_invoke$arity$1 = image18598__1;
image18598.cljs$core$IFn$_invoke$arity$2 = image18598__2;
return image18598;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18598);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18599_SHARP_,p2__18600_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18599_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18600_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18601_SHARP_,p2__18602_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18601_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18602_SHARP_));
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
sablono.core.color_field18603 = (function() {
var color_field18603 = null;
var color_field18603__1 = (function (name__10244__auto__){return color_field18603.call(null,name__10244__auto__,null);
});
var color_field18603__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10244__auto__,value__10245__auto__);
});
color_field18603 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return color_field18603__1.call(this,name__10244__auto__);
case 2:
return color_field18603__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18603.cljs$core$IFn$_invoke$arity$1 = color_field18603__1;
color_field18603.cljs$core$IFn$_invoke$arity$2 = color_field18603__2;
return color_field18603;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18603);
/**
* Creates a date input field.
*/
sablono.core.date_field18604 = (function() {
var date_field18604 = null;
var date_field18604__1 = (function (name__10244__auto__){return date_field18604.call(null,name__10244__auto__,null);
});
var date_field18604__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10244__auto__,value__10245__auto__);
});
date_field18604 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return date_field18604__1.call(this,name__10244__auto__);
case 2:
return date_field18604__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18604.cljs$core$IFn$_invoke$arity$1 = date_field18604__1;
date_field18604.cljs$core$IFn$_invoke$arity$2 = date_field18604__2;
return date_field18604;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18604);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18605 = (function() {
var datetime_field18605 = null;
var datetime_field18605__1 = (function (name__10244__auto__){return datetime_field18605.call(null,name__10244__auto__,null);
});
var datetime_field18605__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10244__auto__,value__10245__auto__);
});
datetime_field18605 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_field18605__1.call(this,name__10244__auto__);
case 2:
return datetime_field18605__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18605.cljs$core$IFn$_invoke$arity$1 = datetime_field18605__1;
datetime_field18605.cljs$core$IFn$_invoke$arity$2 = datetime_field18605__2;
return datetime_field18605;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18605);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18606 = (function() {
var datetime_local_field18606 = null;
var datetime_local_field18606__1 = (function (name__10244__auto__){return datetime_local_field18606.call(null,name__10244__auto__,null);
});
var datetime_local_field18606__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10244__auto__,value__10245__auto__);
});
datetime_local_field18606 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18606__1.call(this,name__10244__auto__);
case 2:
return datetime_local_field18606__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18606.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18606__1;
datetime_local_field18606.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18606__2;
return datetime_local_field18606;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18606);
/**
* Creates a email input field.
*/
sablono.core.email_field18607 = (function() {
var email_field18607 = null;
var email_field18607__1 = (function (name__10244__auto__){return email_field18607.call(null,name__10244__auto__,null);
});
var email_field18607__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10244__auto__,value__10245__auto__);
});
email_field18607 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return email_field18607__1.call(this,name__10244__auto__);
case 2:
return email_field18607__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18607.cljs$core$IFn$_invoke$arity$1 = email_field18607__1;
email_field18607.cljs$core$IFn$_invoke$arity$2 = email_field18607__2;
return email_field18607;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18607);
/**
* Creates a file input field.
*/
sablono.core.file_field18608 = (function() {
var file_field18608 = null;
var file_field18608__1 = (function (name__10244__auto__){return file_field18608.call(null,name__10244__auto__,null);
});
var file_field18608__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10244__auto__,value__10245__auto__);
});
file_field18608 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return file_field18608__1.call(this,name__10244__auto__);
case 2:
return file_field18608__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18608.cljs$core$IFn$_invoke$arity$1 = file_field18608__1;
file_field18608.cljs$core$IFn$_invoke$arity$2 = file_field18608__2;
return file_field18608;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18608);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18609 = (function() {
var hidden_field18609 = null;
var hidden_field18609__1 = (function (name__10244__auto__){return hidden_field18609.call(null,name__10244__auto__,null);
});
var hidden_field18609__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10244__auto__,value__10245__auto__);
});
hidden_field18609 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return hidden_field18609__1.call(this,name__10244__auto__);
case 2:
return hidden_field18609__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18609.cljs$core$IFn$_invoke$arity$1 = hidden_field18609__1;
hidden_field18609.cljs$core$IFn$_invoke$arity$2 = hidden_field18609__2;
return hidden_field18609;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18609);
/**
* Creates a month input field.
*/
sablono.core.month_field18610 = (function() {
var month_field18610 = null;
var month_field18610__1 = (function (name__10244__auto__){return month_field18610.call(null,name__10244__auto__,null);
});
var month_field18610__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10244__auto__,value__10245__auto__);
});
month_field18610 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return month_field18610__1.call(this,name__10244__auto__);
case 2:
return month_field18610__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18610.cljs$core$IFn$_invoke$arity$1 = month_field18610__1;
month_field18610.cljs$core$IFn$_invoke$arity$2 = month_field18610__2;
return month_field18610;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18610);
/**
* Creates a number input field.
*/
sablono.core.number_field18611 = (function() {
var number_field18611 = null;
var number_field18611__1 = (function (name__10244__auto__){return number_field18611.call(null,name__10244__auto__,null);
});
var number_field18611__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10244__auto__,value__10245__auto__);
});
number_field18611 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return number_field18611__1.call(this,name__10244__auto__);
case 2:
return number_field18611__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18611.cljs$core$IFn$_invoke$arity$1 = number_field18611__1;
number_field18611.cljs$core$IFn$_invoke$arity$2 = number_field18611__2;
return number_field18611;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18611);
/**
* Creates a password input field.
*/
sablono.core.password_field18612 = (function() {
var password_field18612 = null;
var password_field18612__1 = (function (name__10244__auto__){return password_field18612.call(null,name__10244__auto__,null);
});
var password_field18612__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10244__auto__,value__10245__auto__);
});
password_field18612 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return password_field18612__1.call(this,name__10244__auto__);
case 2:
return password_field18612__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18612.cljs$core$IFn$_invoke$arity$1 = password_field18612__1;
password_field18612.cljs$core$IFn$_invoke$arity$2 = password_field18612__2;
return password_field18612;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18612);
/**
* Creates a range input field.
*/
sablono.core.range_field18613 = (function() {
var range_field18613 = null;
var range_field18613__1 = (function (name__10244__auto__){return range_field18613.call(null,name__10244__auto__,null);
});
var range_field18613__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10244__auto__,value__10245__auto__);
});
range_field18613 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return range_field18613__1.call(this,name__10244__auto__);
case 2:
return range_field18613__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18613.cljs$core$IFn$_invoke$arity$1 = range_field18613__1;
range_field18613.cljs$core$IFn$_invoke$arity$2 = range_field18613__2;
return range_field18613;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18613);
/**
* Creates a search input field.
*/
sablono.core.search_field18614 = (function() {
var search_field18614 = null;
var search_field18614__1 = (function (name__10244__auto__){return search_field18614.call(null,name__10244__auto__,null);
});
var search_field18614__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10244__auto__,value__10245__auto__);
});
search_field18614 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return search_field18614__1.call(this,name__10244__auto__);
case 2:
return search_field18614__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18614.cljs$core$IFn$_invoke$arity$1 = search_field18614__1;
search_field18614.cljs$core$IFn$_invoke$arity$2 = search_field18614__2;
return search_field18614;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18614);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18615 = (function() {
var tel_field18615 = null;
var tel_field18615__1 = (function (name__10244__auto__){return tel_field18615.call(null,name__10244__auto__,null);
});
var tel_field18615__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10244__auto__,value__10245__auto__);
});
tel_field18615 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return tel_field18615__1.call(this,name__10244__auto__);
case 2:
return tel_field18615__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18615.cljs$core$IFn$_invoke$arity$1 = tel_field18615__1;
tel_field18615.cljs$core$IFn$_invoke$arity$2 = tel_field18615__2;
return tel_field18615;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18615);
/**
* Creates a text input field.
*/
sablono.core.text_field18616 = (function() {
var text_field18616 = null;
var text_field18616__1 = (function (name__10244__auto__){return text_field18616.call(null,name__10244__auto__,null);
});
var text_field18616__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10244__auto__,value__10245__auto__);
});
text_field18616 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return text_field18616__1.call(this,name__10244__auto__);
case 2:
return text_field18616__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18616.cljs$core$IFn$_invoke$arity$1 = text_field18616__1;
text_field18616.cljs$core$IFn$_invoke$arity$2 = text_field18616__2;
return text_field18616;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18616);
/**
* Creates a time input field.
*/
sablono.core.time_field18617 = (function() {
var time_field18617 = null;
var time_field18617__1 = (function (name__10244__auto__){return time_field18617.call(null,name__10244__auto__,null);
});
var time_field18617__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10244__auto__,value__10245__auto__);
});
time_field18617 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return time_field18617__1.call(this,name__10244__auto__);
case 2:
return time_field18617__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18617.cljs$core$IFn$_invoke$arity$1 = time_field18617__1;
time_field18617.cljs$core$IFn$_invoke$arity$2 = time_field18617__2;
return time_field18617;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18617);
/**
* Creates a url input field.
*/
sablono.core.url_field18618 = (function() {
var url_field18618 = null;
var url_field18618__1 = (function (name__10244__auto__){return url_field18618.call(null,name__10244__auto__,null);
});
var url_field18618__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10244__auto__,value__10245__auto__);
});
url_field18618 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return url_field18618__1.call(this,name__10244__auto__);
case 2:
return url_field18618__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18618.cljs$core$IFn$_invoke$arity$1 = url_field18618__1;
url_field18618.cljs$core$IFn$_invoke$arity$2 = url_field18618__2;
return url_field18618;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18618);
/**
* Creates a week input field.
*/
sablono.core.week_field18619 = (function() {
var week_field18619 = null;
var week_field18619__1 = (function (name__10244__auto__){return week_field18619.call(null,name__10244__auto__,null);
});
var week_field18619__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10244__auto__,value__10245__auto__);
});
week_field18619 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return week_field18619__1.call(this,name__10244__auto__);
case 2:
return week_field18619__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18619.cljs$core$IFn$_invoke$arity$1 = week_field18619__1;
week_field18619.cljs$core$IFn$_invoke$arity$2 = week_field18619__2;
return week_field18619;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18619);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18620 = (function() {
var check_box18620 = null;
var check_box18620__1 = (function (name){return check_box18620.call(null,name,null);
});
var check_box18620__2 = (function (name,checked_QMARK_){return check_box18620.call(null,name,checked_QMARK_,"true");
});
var check_box18620__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18620 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18620__1.call(this,name);
case 2:
return check_box18620__2.call(this,name,checked_QMARK_);
case 3:
return check_box18620__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18620.cljs$core$IFn$_invoke$arity$1 = check_box18620__1;
check_box18620.cljs$core$IFn$_invoke$arity$2 = check_box18620__2;
check_box18620.cljs$core$IFn$_invoke$arity$3 = check_box18620__3;
return check_box18620;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18620);
/**
* Creates a radio button.
*/
sablono.core.radio_button18621 = (function() {
var radio_button18621 = null;
var radio_button18621__1 = (function (group){return radio_button18621.call(null,group,null);
});
var radio_button18621__2 = (function (group,checked_QMARK_){return radio_button18621.call(null,group,checked_QMARK_,"true");
});
var radio_button18621__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18621 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18621__1.call(this,group);
case 2:
return radio_button18621__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18621__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18621.cljs$core$IFn$_invoke$arity$1 = radio_button18621__1;
radio_button18621.cljs$core$IFn$_invoke$arity$2 = radio_button18621__2;
radio_button18621.cljs$core$IFn$_invoke$arity$3 = radio_button18621__3;
return radio_button18621;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18621);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18622 = (function() {
var select_options18622 = null;
var select_options18622__1 = (function (coll){return select_options18622.call(null,coll,null);
});
var select_options18622__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__18631(s__18632){return (new cljs.core.LazySeq(null,(function (){var s__18632__$1 = s__18632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18632__$1);if(temp__4126__auto__)
{var s__18632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18632__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18632__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18634 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18633 = (0);while(true){
if((i__18633 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__18633);cljs.core.chunk_append.call(null,b__18634,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18637 = x;var text = cljs.core.nth.call(null,vec__18637,(0),null);var val = cljs.core.nth.call(null,vec__18637,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18637,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18622.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18639 = (i__18633 + (1));
i__18633 = G__18639;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18634),iter__18631.call(null,cljs.core.chunk_rest.call(null,s__18632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18634),null);
}
} else
{var x = cljs.core.first.call(null,s__18632__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18638 = x;var text = cljs.core.nth.call(null,vec__18638,(0),null);var val = cljs.core.nth.call(null,vec__18638,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18638,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18622.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18631.call(null,cljs.core.rest.call(null,s__18632__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
});
select_options18622 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18622__1.call(this,coll);
case 2:
return select_options18622__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18622.cljs$core$IFn$_invoke$arity$1 = select_options18622__1;
select_options18622.cljs$core$IFn$_invoke$arity$2 = select_options18622__2;
return select_options18622;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18622);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18640 = (function() {
var drop_down18640 = null;
var drop_down18640__2 = (function (name,options){return drop_down18640.call(null,name,options,null);
});
var drop_down18640__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18640 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18640__2.call(this,name,options);
case 3:
return drop_down18640__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18640.cljs$core$IFn$_invoke$arity$2 = drop_down18640__2;
drop_down18640.cljs$core$IFn$_invoke$arity$3 = drop_down18640__3;
return drop_down18640;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18640);
/**
* Creates a text area element.
*/
sablono.core.text_area18641 = (function() {
var text_area18641 = null;
var text_area18641__1 = (function (name){return text_area18641.call(null,name,null);
});
var text_area18641__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18641 = function(name,value){
switch(arguments.length){
case 1:
return text_area18641__1.call(this,name);
case 2:
return text_area18641__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18641.cljs$core$IFn$_invoke$arity$1 = text_area18641__1;
text_area18641.cljs$core$IFn$_invoke$arity$2 = text_area18641__2;
return text_area18641;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18641);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18642 = (function label18642(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18642);
/**
* Creates a submit button.
*/
sablono.core.submit_button18643 = (function submit_button18643(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18643);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18644 = (function reset_button18644(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18644);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18645 = (function() { 
var form_to18645__delegate = function (p__18646,body){var vec__18648 = p__18646;var method = cljs.core.nth.call(null,vec__18648,(0),null);var action = cljs.core.nth.call(null,vec__18648,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18645 = function (p__18646,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18645__delegate.call(this,p__18646,body);};
form_to18645.cljs$lang$maxFixedArity = 1;
form_to18645.cljs$lang$applyTo = (function (arglist__18649){
var p__18646 = cljs.core.first(arglist__18649);
var body = cljs.core.rest(arglist__18649);
return form_to18645__delegate(p__18646,body);
});
form_to18645.cljs$core$IFn$_invoke$arity$variadic = form_to18645__delegate;
return form_to18645;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18645);
