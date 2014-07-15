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
var G__17603__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17602 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17602,(0),null);var body = cljs.core.nthnext.call(null,vec__17602,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17603 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17603__delegate.call(this,args);};
G__17603.cljs$lang$maxFixedArity = 0;
G__17603.cljs$lang$applyTo = (function (arglist__17604){
var args = cljs.core.seq(arglist__17604);
return G__17603__delegate(args);
});
G__17603.cljs$core$IFn$_invoke$arity$variadic = G__17603__delegate;
return G__17603;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__17609(s__17610){return (new cljs.core.LazySeq(null,(function (){var s__17610__$1 = s__17610;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17610__$1);if(temp__4126__auto__)
{var s__17610__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17610__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17610__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17612 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17611 = (0);while(true){
if((i__17611 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__17611);cljs.core.chunk_append.call(null,b__17612,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__17613 = (i__17611 + (1));
i__17611 = G__17613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17612),iter__17609.call(null,cljs.core.chunk_rest.call(null,s__17610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17612),null);
}
} else
{var args = cljs.core.first.call(null,s__17610__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__17609.call(null,cljs.core.rest.call(null,s__17610__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__17618(s__17619){return (new cljs.core.LazySeq(null,(function (){var s__17619__$1 = s__17619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17619__$1);if(temp__4126__auto__)
{var s__17619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17619__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17619__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17621 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17620 = (0);while(true){
if((i__17620 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__17620);cljs.core.chunk_append.call(null,b__17621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__17622 = (i__17620 + (1));
i__17620 = G__17622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17621),iter__17618.call(null,cljs.core.chunk_rest.call(null,s__17619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17621),null);
}
} else
{var style = cljs.core.first.call(null,s__17619__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__17618.call(null,cljs.core.rest.call(null,s__17619__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__17623){
var styles = cljs.core.seq(arglist__17623);
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
sablono.core.link_to17624 = (function() { 
var link_to17624__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17624 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17624__delegate.call(this,url,content);};
link_to17624.cljs$lang$maxFixedArity = 1;
link_to17624.cljs$lang$applyTo = (function (arglist__17625){
var url = cljs.core.first(arglist__17625);
var content = cljs.core.rest(arglist__17625);
return link_to17624__delegate(url,content);
});
link_to17624.cljs$core$IFn$_invoke$arity$variadic = link_to17624__delegate;
return link_to17624;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17624);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17626 = (function() { 
var mail_to17626__delegate = function (e_mail,p__17627){var vec__17629 = p__17627;var content = cljs.core.nth.call(null,vec__17629,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17626 = function (e_mail,var_args){
var p__17627 = null;if (arguments.length > 1) {
  p__17627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17626__delegate.call(this,e_mail,p__17627);};
mail_to17626.cljs$lang$maxFixedArity = 1;
mail_to17626.cljs$lang$applyTo = (function (arglist__17630){
var e_mail = cljs.core.first(arglist__17630);
var p__17627 = cljs.core.rest(arglist__17630);
return mail_to17626__delegate(e_mail,p__17627);
});
mail_to17626.cljs$core$IFn$_invoke$arity$variadic = mail_to17626__delegate;
return mail_to17626;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17626);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17631 = (function unordered_list17631(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__17636(s__17637){return (new cljs.core.LazySeq(null,(function (){var s__17637__$1 = s__17637;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17637__$1);if(temp__4126__auto__)
{var s__17637__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17637__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17637__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17639 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17638 = (0);while(true){
if((i__17638 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__17638);cljs.core.chunk_append.call(null,b__17639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17640 = (i__17638 + (1));
i__17638 = G__17640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17639),iter__17636.call(null,cljs.core.chunk_rest.call(null,s__17637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17639),null);
}
} else
{var x = cljs.core.first.call(null,s__17637__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17636.call(null,cljs.core.rest.call(null,s__17637__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17631);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17641 = (function ordered_list17641(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__17646(s__17647){return (new cljs.core.LazySeq(null,(function (){var s__17647__$1 = s__17647;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17647__$1);if(temp__4126__auto__)
{var s__17647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17647__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17647__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17649 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17648 = (0);while(true){
if((i__17648 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__17648);cljs.core.chunk_append.call(null,b__17649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17650 = (i__17648 + (1));
i__17648 = G__17650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17649),iter__17646.call(null,cljs.core.chunk_rest.call(null,s__17647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17649),null);
}
} else
{var x = cljs.core.first.call(null,s__17647__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17646.call(null,cljs.core.rest.call(null,s__17647__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17641);
/**
* Create an image element.
*/
sablono.core.image17651 = (function() {
var image17651 = null;
var image17651__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image17651__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image17651 = function(src,alt){
switch(arguments.length){
case 1:
return image17651__1.call(this,src);
case 2:
return image17651__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17651.cljs$core$IFn$_invoke$arity$1 = image17651__1;
image17651.cljs$core$IFn$_invoke$arity$2 = image17651__2;
return image17651;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17651);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17652_SHARP_,p2__17653_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17652_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17653_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17654_SHARP_,p2__17655_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17654_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17655_SHARP_));
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
sablono.core.color_field17656 = (function() {
var color_field17656 = null;
var color_field17656__1 = (function (name__10195__auto__){return color_field17656.call(null,name__10195__auto__,null);
});
var color_field17656__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10195__auto__,value__10196__auto__);
});
color_field17656 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return color_field17656__1.call(this,name__10195__auto__);
case 2:
return color_field17656__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17656.cljs$core$IFn$_invoke$arity$1 = color_field17656__1;
color_field17656.cljs$core$IFn$_invoke$arity$2 = color_field17656__2;
return color_field17656;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17656);
/**
* Creates a date input field.
*/
sablono.core.date_field17657 = (function() {
var date_field17657 = null;
var date_field17657__1 = (function (name__10195__auto__){return date_field17657.call(null,name__10195__auto__,null);
});
var date_field17657__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10195__auto__,value__10196__auto__);
});
date_field17657 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return date_field17657__1.call(this,name__10195__auto__);
case 2:
return date_field17657__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17657.cljs$core$IFn$_invoke$arity$1 = date_field17657__1;
date_field17657.cljs$core$IFn$_invoke$arity$2 = date_field17657__2;
return date_field17657;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17657);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17658 = (function() {
var datetime_field17658 = null;
var datetime_field17658__1 = (function (name__10195__auto__){return datetime_field17658.call(null,name__10195__auto__,null);
});
var datetime_field17658__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10195__auto__,value__10196__auto__);
});
datetime_field17658 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_field17658__1.call(this,name__10195__auto__);
case 2:
return datetime_field17658__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17658.cljs$core$IFn$_invoke$arity$1 = datetime_field17658__1;
datetime_field17658.cljs$core$IFn$_invoke$arity$2 = datetime_field17658__2;
return datetime_field17658;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17658);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17659 = (function() {
var datetime_local_field17659 = null;
var datetime_local_field17659__1 = (function (name__10195__auto__){return datetime_local_field17659.call(null,name__10195__auto__,null);
});
var datetime_local_field17659__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10195__auto__,value__10196__auto__);
});
datetime_local_field17659 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17659__1.call(this,name__10195__auto__);
case 2:
return datetime_local_field17659__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17659.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17659__1;
datetime_local_field17659.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17659__2;
return datetime_local_field17659;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17659);
/**
* Creates a email input field.
*/
sablono.core.email_field17660 = (function() {
var email_field17660 = null;
var email_field17660__1 = (function (name__10195__auto__){return email_field17660.call(null,name__10195__auto__,null);
});
var email_field17660__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10195__auto__,value__10196__auto__);
});
email_field17660 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return email_field17660__1.call(this,name__10195__auto__);
case 2:
return email_field17660__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17660.cljs$core$IFn$_invoke$arity$1 = email_field17660__1;
email_field17660.cljs$core$IFn$_invoke$arity$2 = email_field17660__2;
return email_field17660;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17660);
/**
* Creates a file input field.
*/
sablono.core.file_field17661 = (function() {
var file_field17661 = null;
var file_field17661__1 = (function (name__10195__auto__){return file_field17661.call(null,name__10195__auto__,null);
});
var file_field17661__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10195__auto__,value__10196__auto__);
});
file_field17661 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return file_field17661__1.call(this,name__10195__auto__);
case 2:
return file_field17661__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17661.cljs$core$IFn$_invoke$arity$1 = file_field17661__1;
file_field17661.cljs$core$IFn$_invoke$arity$2 = file_field17661__2;
return file_field17661;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17661);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17662 = (function() {
var hidden_field17662 = null;
var hidden_field17662__1 = (function (name__10195__auto__){return hidden_field17662.call(null,name__10195__auto__,null);
});
var hidden_field17662__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10195__auto__,value__10196__auto__);
});
hidden_field17662 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return hidden_field17662__1.call(this,name__10195__auto__);
case 2:
return hidden_field17662__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17662.cljs$core$IFn$_invoke$arity$1 = hidden_field17662__1;
hidden_field17662.cljs$core$IFn$_invoke$arity$2 = hidden_field17662__2;
return hidden_field17662;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17662);
/**
* Creates a month input field.
*/
sablono.core.month_field17663 = (function() {
var month_field17663 = null;
var month_field17663__1 = (function (name__10195__auto__){return month_field17663.call(null,name__10195__auto__,null);
});
var month_field17663__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10195__auto__,value__10196__auto__);
});
month_field17663 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return month_field17663__1.call(this,name__10195__auto__);
case 2:
return month_field17663__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17663.cljs$core$IFn$_invoke$arity$1 = month_field17663__1;
month_field17663.cljs$core$IFn$_invoke$arity$2 = month_field17663__2;
return month_field17663;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17663);
/**
* Creates a number input field.
*/
sablono.core.number_field17664 = (function() {
var number_field17664 = null;
var number_field17664__1 = (function (name__10195__auto__){return number_field17664.call(null,name__10195__auto__,null);
});
var number_field17664__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10195__auto__,value__10196__auto__);
});
number_field17664 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return number_field17664__1.call(this,name__10195__auto__);
case 2:
return number_field17664__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17664.cljs$core$IFn$_invoke$arity$1 = number_field17664__1;
number_field17664.cljs$core$IFn$_invoke$arity$2 = number_field17664__2;
return number_field17664;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17664);
/**
* Creates a password input field.
*/
sablono.core.password_field17665 = (function() {
var password_field17665 = null;
var password_field17665__1 = (function (name__10195__auto__){return password_field17665.call(null,name__10195__auto__,null);
});
var password_field17665__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10195__auto__,value__10196__auto__);
});
password_field17665 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return password_field17665__1.call(this,name__10195__auto__);
case 2:
return password_field17665__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17665.cljs$core$IFn$_invoke$arity$1 = password_field17665__1;
password_field17665.cljs$core$IFn$_invoke$arity$2 = password_field17665__2;
return password_field17665;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17665);
/**
* Creates a range input field.
*/
sablono.core.range_field17666 = (function() {
var range_field17666 = null;
var range_field17666__1 = (function (name__10195__auto__){return range_field17666.call(null,name__10195__auto__,null);
});
var range_field17666__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10195__auto__,value__10196__auto__);
});
range_field17666 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return range_field17666__1.call(this,name__10195__auto__);
case 2:
return range_field17666__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17666.cljs$core$IFn$_invoke$arity$1 = range_field17666__1;
range_field17666.cljs$core$IFn$_invoke$arity$2 = range_field17666__2;
return range_field17666;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17666);
/**
* Creates a search input field.
*/
sablono.core.search_field17667 = (function() {
var search_field17667 = null;
var search_field17667__1 = (function (name__10195__auto__){return search_field17667.call(null,name__10195__auto__,null);
});
var search_field17667__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10195__auto__,value__10196__auto__);
});
search_field17667 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return search_field17667__1.call(this,name__10195__auto__);
case 2:
return search_field17667__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17667.cljs$core$IFn$_invoke$arity$1 = search_field17667__1;
search_field17667.cljs$core$IFn$_invoke$arity$2 = search_field17667__2;
return search_field17667;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17667);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17668 = (function() {
var tel_field17668 = null;
var tel_field17668__1 = (function (name__10195__auto__){return tel_field17668.call(null,name__10195__auto__,null);
});
var tel_field17668__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10195__auto__,value__10196__auto__);
});
tel_field17668 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return tel_field17668__1.call(this,name__10195__auto__);
case 2:
return tel_field17668__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17668.cljs$core$IFn$_invoke$arity$1 = tel_field17668__1;
tel_field17668.cljs$core$IFn$_invoke$arity$2 = tel_field17668__2;
return tel_field17668;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17668);
/**
* Creates a text input field.
*/
sablono.core.text_field17669 = (function() {
var text_field17669 = null;
var text_field17669__1 = (function (name__10195__auto__){return text_field17669.call(null,name__10195__auto__,null);
});
var text_field17669__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10195__auto__,value__10196__auto__);
});
text_field17669 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return text_field17669__1.call(this,name__10195__auto__);
case 2:
return text_field17669__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17669.cljs$core$IFn$_invoke$arity$1 = text_field17669__1;
text_field17669.cljs$core$IFn$_invoke$arity$2 = text_field17669__2;
return text_field17669;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17669);
/**
* Creates a time input field.
*/
sablono.core.time_field17670 = (function() {
var time_field17670 = null;
var time_field17670__1 = (function (name__10195__auto__){return time_field17670.call(null,name__10195__auto__,null);
});
var time_field17670__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10195__auto__,value__10196__auto__);
});
time_field17670 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return time_field17670__1.call(this,name__10195__auto__);
case 2:
return time_field17670__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17670.cljs$core$IFn$_invoke$arity$1 = time_field17670__1;
time_field17670.cljs$core$IFn$_invoke$arity$2 = time_field17670__2;
return time_field17670;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17670);
/**
* Creates a url input field.
*/
sablono.core.url_field17671 = (function() {
var url_field17671 = null;
var url_field17671__1 = (function (name__10195__auto__){return url_field17671.call(null,name__10195__auto__,null);
});
var url_field17671__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10195__auto__,value__10196__auto__);
});
url_field17671 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return url_field17671__1.call(this,name__10195__auto__);
case 2:
return url_field17671__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17671.cljs$core$IFn$_invoke$arity$1 = url_field17671__1;
url_field17671.cljs$core$IFn$_invoke$arity$2 = url_field17671__2;
return url_field17671;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17671);
/**
* Creates a week input field.
*/
sablono.core.week_field17672 = (function() {
var week_field17672 = null;
var week_field17672__1 = (function (name__10195__auto__){return week_field17672.call(null,name__10195__auto__,null);
});
var week_field17672__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10195__auto__,value__10196__auto__);
});
week_field17672 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return week_field17672__1.call(this,name__10195__auto__);
case 2:
return week_field17672__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17672.cljs$core$IFn$_invoke$arity$1 = week_field17672__1;
week_field17672.cljs$core$IFn$_invoke$arity$2 = week_field17672__2;
return week_field17672;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17672);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17673 = (function() {
var check_box17673 = null;
var check_box17673__1 = (function (name){return check_box17673.call(null,name,null);
});
var check_box17673__2 = (function (name,checked_QMARK_){return check_box17673.call(null,name,checked_QMARK_,"true");
});
var check_box17673__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box17673 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17673__1.call(this,name);
case 2:
return check_box17673__2.call(this,name,checked_QMARK_);
case 3:
return check_box17673__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17673.cljs$core$IFn$_invoke$arity$1 = check_box17673__1;
check_box17673.cljs$core$IFn$_invoke$arity$2 = check_box17673__2;
check_box17673.cljs$core$IFn$_invoke$arity$3 = check_box17673__3;
return check_box17673;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17673);
/**
* Creates a radio button.
*/
sablono.core.radio_button17674 = (function() {
var radio_button17674 = null;
var radio_button17674__1 = (function (group){return radio_button17674.call(null,group,null);
});
var radio_button17674__2 = (function (group,checked_QMARK_){return radio_button17674.call(null,group,checked_QMARK_,"true");
});
var radio_button17674__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button17674 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17674__1.call(this,group);
case 2:
return radio_button17674__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17674__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17674.cljs$core$IFn$_invoke$arity$1 = radio_button17674__1;
radio_button17674.cljs$core$IFn$_invoke$arity$2 = radio_button17674__2;
radio_button17674.cljs$core$IFn$_invoke$arity$3 = radio_button17674__3;
return radio_button17674;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17674);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17675 = (function() {
var select_options17675 = null;
var select_options17675__1 = (function (coll){return select_options17675.call(null,coll,null);
});
var select_options17675__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__17684(s__17685){return (new cljs.core.LazySeq(null,(function (){var s__17685__$1 = s__17685;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17685__$1);if(temp__4126__auto__)
{var s__17685__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17685__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17685__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17687 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17686 = (0);while(true){
if((i__17686 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__17686);cljs.core.chunk_append.call(null,b__17687,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17690 = x;var text = cljs.core.nth.call(null,vec__17690,(0),null);var val = cljs.core.nth.call(null,vec__17690,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17690,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17675.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17692 = (i__17686 + (1));
i__17686 = G__17692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17687),iter__17684.call(null,cljs.core.chunk_rest.call(null,s__17685__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17687),null);
}
} else
{var x = cljs.core.first.call(null,s__17685__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17691 = x;var text = cljs.core.nth.call(null,vec__17691,(0),null);var val = cljs.core.nth.call(null,vec__17691,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17691,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17675.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17684.call(null,cljs.core.rest.call(null,s__17685__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options17675 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17675__1.call(this,coll);
case 2:
return select_options17675__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17675.cljs$core$IFn$_invoke$arity$1 = select_options17675__1;
select_options17675.cljs$core$IFn$_invoke$arity$2 = select_options17675__2;
return select_options17675;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17675);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17693 = (function() {
var drop_down17693 = null;
var drop_down17693__2 = (function (name,options){return drop_down17693.call(null,name,options,null);
});
var drop_down17693__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17693 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17693__2.call(this,name,options);
case 3:
return drop_down17693__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17693.cljs$core$IFn$_invoke$arity$2 = drop_down17693__2;
drop_down17693.cljs$core$IFn$_invoke$arity$3 = drop_down17693__3;
return drop_down17693;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17693);
/**
* Creates a text area element.
*/
sablono.core.text_area17694 = (function() {
var text_area17694 = null;
var text_area17694__1 = (function (name){return text_area17694.call(null,name,null);
});
var text_area17694__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area17694 = function(name,value){
switch(arguments.length){
case 1:
return text_area17694__1.call(this,name);
case 2:
return text_area17694__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17694.cljs$core$IFn$_invoke$arity$1 = text_area17694__1;
text_area17694.cljs$core$IFn$_invoke$arity$2 = text_area17694__2;
return text_area17694;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17694);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17695 = (function label17695(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17695);
/**
* Creates a submit button.
*/
sablono.core.submit_button17696 = (function submit_button17696(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17696);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17697 = (function reset_button17697(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17697);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17698 = (function() { 
var form_to17698__delegate = function (p__17699,body){var vec__17701 = p__17699;var method = cljs.core.nth.call(null,vec__17701,(0),null);var action = cljs.core.nth.call(null,vec__17701,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17698 = function (p__17699,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17698__delegate.call(this,p__17699,body);};
form_to17698.cljs$lang$maxFixedArity = 1;
form_to17698.cljs$lang$applyTo = (function (arglist__17702){
var p__17699 = cljs.core.first(arglist__17702);
var body = cljs.core.rest(arglist__17702);
return form_to17698__delegate(p__17699,body);
});
form_to17698.cljs$core$IFn$_invoke$arity$variadic = form_to17698__delegate;
return form_to17698;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17698);
