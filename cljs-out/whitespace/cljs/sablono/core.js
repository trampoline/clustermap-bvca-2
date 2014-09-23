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
var G__18558__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18557 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18557,(0),null);var body = cljs.core.nthnext.call(null,vec__18557,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18558 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18558__delegate.call(this,args);};
G__18558.cljs$lang$maxFixedArity = 0;
G__18558.cljs$lang$applyTo = (function (arglist__18559){
var args = cljs.core.seq(arglist__18559);
return G__18558__delegate(args);
});
G__18558.cljs$core$IFn$_invoke$arity$variadic = G__18558__delegate;
return G__18558;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__18564(s__18565){return (new cljs.core.LazySeq(null,(function (){var s__18565__$1 = s__18565;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18565__$1);if(temp__4126__auto__)
{var s__18565__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18565__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18565__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18567 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18566 = (0);while(true){
if((i__18566 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__18566);cljs.core.chunk_append.call(null,b__18567,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18568 = (i__18566 + (1));
i__18566 = G__18568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),iter__18564.call(null,cljs.core.chunk_rest.call(null,s__18565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),null);
}
} else
{var args = cljs.core.first.call(null,s__18565__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18564.call(null,cljs.core.rest.call(null,s__18565__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__18573(s__18574){return (new cljs.core.LazySeq(null,(function (){var s__18574__$1 = s__18574;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18574__$1);if(temp__4126__auto__)
{var s__18574__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18574__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18574__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18576 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18575 = (0);while(true){
if((i__18575 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__18575);cljs.core.chunk_append.call(null,b__18576,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18577 = (i__18575 + (1));
i__18575 = G__18577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18576),iter__18573.call(null,cljs.core.chunk_rest.call(null,s__18574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18576),null);
}
} else
{var style = cljs.core.first.call(null,s__18574__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18573.call(null,cljs.core.rest.call(null,s__18574__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__18578){
var styles = cljs.core.seq(arglist__18578);
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
sablono.core.link_to18579 = (function() { 
var link_to18579__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18579 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18579__delegate.call(this,url,content);};
link_to18579.cljs$lang$maxFixedArity = 1;
link_to18579.cljs$lang$applyTo = (function (arglist__18580){
var url = cljs.core.first(arglist__18580);
var content = cljs.core.rest(arglist__18580);
return link_to18579__delegate(url,content);
});
link_to18579.cljs$core$IFn$_invoke$arity$variadic = link_to18579__delegate;
return link_to18579;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18579);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18581 = (function() { 
var mail_to18581__delegate = function (e_mail,p__18582){var vec__18584 = p__18582;var content = cljs.core.nth.call(null,vec__18584,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18581 = function (e_mail,var_args){
var p__18582 = null;if (arguments.length > 1) {
  p__18582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18581__delegate.call(this,e_mail,p__18582);};
mail_to18581.cljs$lang$maxFixedArity = 1;
mail_to18581.cljs$lang$applyTo = (function (arglist__18585){
var e_mail = cljs.core.first(arglist__18585);
var p__18582 = cljs.core.rest(arglist__18585);
return mail_to18581__delegate(e_mail,p__18582);
});
mail_to18581.cljs$core$IFn$_invoke$arity$variadic = mail_to18581__delegate;
return mail_to18581;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18581);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18586 = (function unordered_list18586(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__18591(s__18592){return (new cljs.core.LazySeq(null,(function (){var s__18592__$1 = s__18592;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18592__$1);if(temp__4126__auto__)
{var s__18592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18592__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18592__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18594 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18593 = (0);while(true){
if((i__18593 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18593);cljs.core.chunk_append.call(null,b__18594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18595 = (i__18593 + (1));
i__18593 = G__18595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18594),iter__18591.call(null,cljs.core.chunk_rest.call(null,s__18592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18594),null);
}
} else
{var x = cljs.core.first.call(null,s__18592__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18591.call(null,cljs.core.rest.call(null,s__18592__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18586);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18596 = (function ordered_list18596(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__18601(s__18602){return (new cljs.core.LazySeq(null,(function (){var s__18602__$1 = s__18602;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18602__$1);if(temp__4126__auto__)
{var s__18602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18602__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18602__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18604 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18603 = (0);while(true){
if((i__18603 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18603);cljs.core.chunk_append.call(null,b__18604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18605 = (i__18603 + (1));
i__18603 = G__18605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18604),iter__18601.call(null,cljs.core.chunk_rest.call(null,s__18602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18604),null);
}
} else
{var x = cljs.core.first.call(null,s__18602__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18601.call(null,cljs.core.rest.call(null,s__18602__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18596);
/**
* Create an image element.
*/
sablono.core.image18606 = (function() {
var image18606 = null;
var image18606__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18606__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18606 = function(src,alt){
switch(arguments.length){
case 1:
return image18606__1.call(this,src);
case 2:
return image18606__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18606.cljs$core$IFn$_invoke$arity$1 = image18606__1;
image18606.cljs$core$IFn$_invoke$arity$2 = image18606__2;
return image18606;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18606);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18607_SHARP_,p2__18608_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18607_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18608_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18609_SHARP_,p2__18610_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18609_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18610_SHARP_));
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
sablono.core.color_field18611 = (function() {
var color_field18611 = null;
var color_field18611__1 = (function (name__10286__auto__){return color_field18611.call(null,name__10286__auto__,null);
});
var color_field18611__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field18611 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field18611__1.call(this,name__10286__auto__);
case 2:
return color_field18611__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18611.cljs$core$IFn$_invoke$arity$1 = color_field18611__1;
color_field18611.cljs$core$IFn$_invoke$arity$2 = color_field18611__2;
return color_field18611;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18611);
/**
* Creates a date input field.
*/
sablono.core.date_field18612 = (function() {
var date_field18612 = null;
var date_field18612__1 = (function (name__10286__auto__){return date_field18612.call(null,name__10286__auto__,null);
});
var date_field18612__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field18612 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field18612__1.call(this,name__10286__auto__);
case 2:
return date_field18612__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18612.cljs$core$IFn$_invoke$arity$1 = date_field18612__1;
date_field18612.cljs$core$IFn$_invoke$arity$2 = date_field18612__2;
return date_field18612;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18612);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18613 = (function() {
var datetime_field18613 = null;
var datetime_field18613__1 = (function (name__10286__auto__){return datetime_field18613.call(null,name__10286__auto__,null);
});
var datetime_field18613__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field18613 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field18613__1.call(this,name__10286__auto__);
case 2:
return datetime_field18613__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18613.cljs$core$IFn$_invoke$arity$1 = datetime_field18613__1;
datetime_field18613.cljs$core$IFn$_invoke$arity$2 = datetime_field18613__2;
return datetime_field18613;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18613);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18614 = (function() {
var datetime_local_field18614 = null;
var datetime_local_field18614__1 = (function (name__10286__auto__){return datetime_local_field18614.call(null,name__10286__auto__,null);
});
var datetime_local_field18614__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field18614 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18614__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field18614__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18614.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18614__1;
datetime_local_field18614.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18614__2;
return datetime_local_field18614;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18614);
/**
* Creates a email input field.
*/
sablono.core.email_field18615 = (function() {
var email_field18615 = null;
var email_field18615__1 = (function (name__10286__auto__){return email_field18615.call(null,name__10286__auto__,null);
});
var email_field18615__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field18615 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field18615__1.call(this,name__10286__auto__);
case 2:
return email_field18615__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18615.cljs$core$IFn$_invoke$arity$1 = email_field18615__1;
email_field18615.cljs$core$IFn$_invoke$arity$2 = email_field18615__2;
return email_field18615;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18615);
/**
* Creates a file input field.
*/
sablono.core.file_field18616 = (function() {
var file_field18616 = null;
var file_field18616__1 = (function (name__10286__auto__){return file_field18616.call(null,name__10286__auto__,null);
});
var file_field18616__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field18616 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field18616__1.call(this,name__10286__auto__);
case 2:
return file_field18616__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18616.cljs$core$IFn$_invoke$arity$1 = file_field18616__1;
file_field18616.cljs$core$IFn$_invoke$arity$2 = file_field18616__2;
return file_field18616;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18616);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18617 = (function() {
var hidden_field18617 = null;
var hidden_field18617__1 = (function (name__10286__auto__){return hidden_field18617.call(null,name__10286__auto__,null);
});
var hidden_field18617__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field18617 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field18617__1.call(this,name__10286__auto__);
case 2:
return hidden_field18617__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18617.cljs$core$IFn$_invoke$arity$1 = hidden_field18617__1;
hidden_field18617.cljs$core$IFn$_invoke$arity$2 = hidden_field18617__2;
return hidden_field18617;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18617);
/**
* Creates a month input field.
*/
sablono.core.month_field18618 = (function() {
var month_field18618 = null;
var month_field18618__1 = (function (name__10286__auto__){return month_field18618.call(null,name__10286__auto__,null);
});
var month_field18618__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field18618 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field18618__1.call(this,name__10286__auto__);
case 2:
return month_field18618__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18618.cljs$core$IFn$_invoke$arity$1 = month_field18618__1;
month_field18618.cljs$core$IFn$_invoke$arity$2 = month_field18618__2;
return month_field18618;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18618);
/**
* Creates a number input field.
*/
sablono.core.number_field18619 = (function() {
var number_field18619 = null;
var number_field18619__1 = (function (name__10286__auto__){return number_field18619.call(null,name__10286__auto__,null);
});
var number_field18619__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field18619 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field18619__1.call(this,name__10286__auto__);
case 2:
return number_field18619__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18619.cljs$core$IFn$_invoke$arity$1 = number_field18619__1;
number_field18619.cljs$core$IFn$_invoke$arity$2 = number_field18619__2;
return number_field18619;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18619);
/**
* Creates a password input field.
*/
sablono.core.password_field18620 = (function() {
var password_field18620 = null;
var password_field18620__1 = (function (name__10286__auto__){return password_field18620.call(null,name__10286__auto__,null);
});
var password_field18620__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field18620 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field18620__1.call(this,name__10286__auto__);
case 2:
return password_field18620__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18620.cljs$core$IFn$_invoke$arity$1 = password_field18620__1;
password_field18620.cljs$core$IFn$_invoke$arity$2 = password_field18620__2;
return password_field18620;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18620);
/**
* Creates a range input field.
*/
sablono.core.range_field18621 = (function() {
var range_field18621 = null;
var range_field18621__1 = (function (name__10286__auto__){return range_field18621.call(null,name__10286__auto__,null);
});
var range_field18621__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field18621 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field18621__1.call(this,name__10286__auto__);
case 2:
return range_field18621__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18621.cljs$core$IFn$_invoke$arity$1 = range_field18621__1;
range_field18621.cljs$core$IFn$_invoke$arity$2 = range_field18621__2;
return range_field18621;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18621);
/**
* Creates a search input field.
*/
sablono.core.search_field18622 = (function() {
var search_field18622 = null;
var search_field18622__1 = (function (name__10286__auto__){return search_field18622.call(null,name__10286__auto__,null);
});
var search_field18622__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field18622 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field18622__1.call(this,name__10286__auto__);
case 2:
return search_field18622__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18622.cljs$core$IFn$_invoke$arity$1 = search_field18622__1;
search_field18622.cljs$core$IFn$_invoke$arity$2 = search_field18622__2;
return search_field18622;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18622);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18623 = (function() {
var tel_field18623 = null;
var tel_field18623__1 = (function (name__10286__auto__){return tel_field18623.call(null,name__10286__auto__,null);
});
var tel_field18623__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field18623 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field18623__1.call(this,name__10286__auto__);
case 2:
return tel_field18623__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18623.cljs$core$IFn$_invoke$arity$1 = tel_field18623__1;
tel_field18623.cljs$core$IFn$_invoke$arity$2 = tel_field18623__2;
return tel_field18623;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18623);
/**
* Creates a text input field.
*/
sablono.core.text_field18624 = (function() {
var text_field18624 = null;
var text_field18624__1 = (function (name__10286__auto__){return text_field18624.call(null,name__10286__auto__,null);
});
var text_field18624__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field18624 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field18624__1.call(this,name__10286__auto__);
case 2:
return text_field18624__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18624.cljs$core$IFn$_invoke$arity$1 = text_field18624__1;
text_field18624.cljs$core$IFn$_invoke$arity$2 = text_field18624__2;
return text_field18624;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18624);
/**
* Creates a time input field.
*/
sablono.core.time_field18625 = (function() {
var time_field18625 = null;
var time_field18625__1 = (function (name__10286__auto__){return time_field18625.call(null,name__10286__auto__,null);
});
var time_field18625__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field18625 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field18625__1.call(this,name__10286__auto__);
case 2:
return time_field18625__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18625.cljs$core$IFn$_invoke$arity$1 = time_field18625__1;
time_field18625.cljs$core$IFn$_invoke$arity$2 = time_field18625__2;
return time_field18625;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18625);
/**
* Creates a url input field.
*/
sablono.core.url_field18626 = (function() {
var url_field18626 = null;
var url_field18626__1 = (function (name__10286__auto__){return url_field18626.call(null,name__10286__auto__,null);
});
var url_field18626__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field18626 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field18626__1.call(this,name__10286__auto__);
case 2:
return url_field18626__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18626.cljs$core$IFn$_invoke$arity$1 = url_field18626__1;
url_field18626.cljs$core$IFn$_invoke$arity$2 = url_field18626__2;
return url_field18626;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18626);
/**
* Creates a week input field.
*/
sablono.core.week_field18627 = (function() {
var week_field18627 = null;
var week_field18627__1 = (function (name__10286__auto__){return week_field18627.call(null,name__10286__auto__,null);
});
var week_field18627__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field18627 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field18627__1.call(this,name__10286__auto__);
case 2:
return week_field18627__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18627.cljs$core$IFn$_invoke$arity$1 = week_field18627__1;
week_field18627.cljs$core$IFn$_invoke$arity$2 = week_field18627__2;
return week_field18627;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18627);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18628 = (function() {
var check_box18628 = null;
var check_box18628__1 = (function (name){return check_box18628.call(null,name,null);
});
var check_box18628__2 = (function (name,checked_QMARK_){return check_box18628.call(null,name,checked_QMARK_,"true");
});
var check_box18628__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18628 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18628__1.call(this,name);
case 2:
return check_box18628__2.call(this,name,checked_QMARK_);
case 3:
return check_box18628__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18628.cljs$core$IFn$_invoke$arity$1 = check_box18628__1;
check_box18628.cljs$core$IFn$_invoke$arity$2 = check_box18628__2;
check_box18628.cljs$core$IFn$_invoke$arity$3 = check_box18628__3;
return check_box18628;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18628);
/**
* Creates a radio button.
*/
sablono.core.radio_button18629 = (function() {
var radio_button18629 = null;
var radio_button18629__1 = (function (group){return radio_button18629.call(null,group,null);
});
var radio_button18629__2 = (function (group,checked_QMARK_){return radio_button18629.call(null,group,checked_QMARK_,"true");
});
var radio_button18629__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18629 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18629__1.call(this,group);
case 2:
return radio_button18629__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18629__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18629.cljs$core$IFn$_invoke$arity$1 = radio_button18629__1;
radio_button18629.cljs$core$IFn$_invoke$arity$2 = radio_button18629__2;
radio_button18629.cljs$core$IFn$_invoke$arity$3 = radio_button18629__3;
return radio_button18629;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18629);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18630 = (function() {
var select_options18630 = null;
var select_options18630__1 = (function (coll){return select_options18630.call(null,coll,null);
});
var select_options18630__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__18639(s__18640){return (new cljs.core.LazySeq(null,(function (){var s__18640__$1 = s__18640;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18640__$1);if(temp__4126__auto__)
{var s__18640__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18640__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18640__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18642 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18641 = (0);while(true){
if((i__18641 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18641);cljs.core.chunk_append.call(null,b__18642,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18645 = x;var text = cljs.core.nth.call(null,vec__18645,(0),null);var val = cljs.core.nth.call(null,vec__18645,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18645,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18630.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18647 = (i__18641 + (1));
i__18641 = G__18647;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18642),iter__18639.call(null,cljs.core.chunk_rest.call(null,s__18640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18642),null);
}
} else
{var x = cljs.core.first.call(null,s__18640__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18646 = x;var text = cljs.core.nth.call(null,vec__18646,(0),null);var val = cljs.core.nth.call(null,vec__18646,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18646,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18630.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18639.call(null,cljs.core.rest.call(null,s__18640__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options18630 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18630__1.call(this,coll);
case 2:
return select_options18630__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18630.cljs$core$IFn$_invoke$arity$1 = select_options18630__1;
select_options18630.cljs$core$IFn$_invoke$arity$2 = select_options18630__2;
return select_options18630;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18630);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18648 = (function() {
var drop_down18648 = null;
var drop_down18648__2 = (function (name,options){return drop_down18648.call(null,name,options,null);
});
var drop_down18648__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18648 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18648__2.call(this,name,options);
case 3:
return drop_down18648__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18648.cljs$core$IFn$_invoke$arity$2 = drop_down18648__2;
drop_down18648.cljs$core$IFn$_invoke$arity$3 = drop_down18648__3;
return drop_down18648;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18648);
/**
* Creates a text area element.
*/
sablono.core.text_area18649 = (function() {
var text_area18649 = null;
var text_area18649__1 = (function (name){return text_area18649.call(null,name,null);
});
var text_area18649__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18649 = function(name,value){
switch(arguments.length){
case 1:
return text_area18649__1.call(this,name);
case 2:
return text_area18649__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18649.cljs$core$IFn$_invoke$arity$1 = text_area18649__1;
text_area18649.cljs$core$IFn$_invoke$arity$2 = text_area18649__2;
return text_area18649;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18649);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18650 = (function label18650(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18650);
/**
* Creates a submit button.
*/
sablono.core.submit_button18651 = (function submit_button18651(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18651);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18652 = (function reset_button18652(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18652);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18653 = (function() { 
var form_to18653__delegate = function (p__18654,body){var vec__18656 = p__18654;var method = cljs.core.nth.call(null,vec__18656,(0),null);var action = cljs.core.nth.call(null,vec__18656,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18653 = function (p__18654,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18653__delegate.call(this,p__18654,body);};
form_to18653.cljs$lang$maxFixedArity = 1;
form_to18653.cljs$lang$applyTo = (function (arglist__18657){
var p__18654 = cljs.core.first(arglist__18657);
var body = cljs.core.rest(arglist__18657);
return form_to18653__delegate(p__18654,body);
});
form_to18653.cljs$core$IFn$_invoke$arity$variadic = form_to18653__delegate;
return form_to18653;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18653);
