// Compiled by ClojureScript 0.0-2138
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){if(typeof sel === 'string')
{return sel;
} else
{if(cljs.core.fn_QMARK_(sel))
{var temp__4090__auto__ = jayq.core.crate_meta(sel);if(cljs.core.truth_(temp__4090__auto__))
{var cm = temp__4090__auto__;return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if((sel instanceof cljs.core.Keyword))
{return cljs.core.name(sel);
} else
{if(cljs.core.constant$keyword$124)
{return sel;
} else
{return null;
}
}
}
}
});
jayq.core.$ = (function() {
var $ = null;
var $__1 = (function (sel){return jQuery(jayq.core.__GT_selector(sel));
});
var $__2 = (function (sel,context){return jQuery(jayq.core.__GT_selector(sel),context);
});
$ = function(sel,context){
switch(arguments.length){
case 1:
return $__1.call(this,sel);
case 2:
return $__2.call(this,sel,context);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
$.cljs$core$IFn$_invoke$arity$1 = $__1;
$.cljs$core$IFn$_invoke$arity$2 = $__2;
return $;
})()
;
jQuery.prototype.cljs$core$IFn$ = true;
jQuery.prototype.call = (function() {
var G__25097 = null;
var G__25097__2 = (function (self__,k){var self____$1 = this;var this$ = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__25097__3 = (function (self__,k,not_found){var self____$1 = this;var this$ = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
G__25097 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25097__2.call(this,self__,k);
case 3:
return G__25097__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25097;
})()
;
jQuery.prototype.apply = (function (self__,args25096){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25096)));
});
jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var this$ = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});
jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var this$ = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){var this$__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){var this$__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var this$__$1 = this;var or__3406__auto__ = this$__$1.slice(k,(k + 1));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var this$__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var this$__$1 = this;if((n < cljs.core.count(this$__$1)))
{return this$__$1.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var this$__$1 = this;if((n < cljs.core.count(this$__$1)))
{return this$__$1.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.length;
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var this$__$1 = this;if((cljs.core.count(this$__$1) > 1))
{return this$__$1.slice(1);
} else
{return cljs.core.List.EMPTY;
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core.truth_(this$__$1.get(0)))
{return this$__$1;
} else
{return null;
}
});
jayq.core.anim = (function anim($elem,props,dur){return $elem.animate(cljs.core.clj__GT_js(props),dur);
});
jayq.core.text = (function() {
var text = null;
var text__1 = (function ($elem){return $elem.text();
});
var text__2 = (function ($elem,txt){return $elem.text(txt);
});
text = function($elem,txt){
switch(arguments.length){
case 1:
return text__1.call(this,$elem);
case 2:
return text__2.call(this,$elem,txt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$1 = text__1;
text.cljs$core$IFn$_invoke$arity$2 = text__2;
return text;
})()
;
jayq.core.css = (function() {
var css = null;
var css__2 = (function ($elem,opts){return $elem.css(cljs.core.clj__GT_js(opts));
});
var css__3 = (function ($elem,p,v){return $elem.css(cljs.core.name(p),v);
});
css = function($elem,p,v){
switch(arguments.length){
case 2:
return css__2.call(this,$elem,p);
case 3:
return css__3.call(this,$elem,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css.cljs$core$IFn$_invoke$arity$2 = css__2;
css.cljs$core$IFn$_invoke$arity$3 = css__3;
return css;
})()
;
jayq.core.attr = (function() {
var attr = null;
var attr__2 = (function ($elem,x){return $elem.attr(cljs.core.clj__GT_js(x));
});
var attr__3 = (function ($elem,n,v){return $elem.attr(cljs.core.name(n),v);
});
attr = function($elem,n,v){
switch(arguments.length){
case 2:
return attr__2.call(this,$elem,n);
case 3:
return attr__3.call(this,$elem,n,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
attr.cljs$core$IFn$_invoke$arity$2 = attr__2;
attr.cljs$core$IFn$_invoke$arity$3 = attr__3;
return attr;
})()
;
jayq.core.prop = (function() {
var prop = null;
var prop__2 = (function ($elem,x){return $elem.prop(cljs.core.clj__GT_js(x));
});
var prop__3 = (function ($elem,n,v){return $elem.prop(cljs.core.name(n),v);
});
prop = function($elem,n,v){
switch(arguments.length){
case 2:
return prop__2.call(this,$elem,n);
case 3:
return prop__3.call(this,$elem,n,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prop.cljs$core$IFn$_invoke$arity$2 = prop__2;
prop.cljs$core$IFn$_invoke$arity$3 = prop__3;
return prop;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){return $elem.removeAttr(cljs.core.name(a));
});
jayq.core.remove_prop = (function remove_prop($elem,a){return $elem.removeProp(cljs.core.name(a));
});
jayq.core.data = (function() {
var data = null;
var data__1 = (function ($elem){return $elem.data();
});
var data__2 = (function ($elem,k){return $elem.data(cljs.core.clj__GT_js(k));
});
var data__3 = (function ($elem,k,v){return $elem.data(cljs.core.name(k),cljs.core.clj__GT_js(v));
});
data = function($elem,k,v){
switch(arguments.length){
case 1:
return data__1.call(this,$elem);
case 2:
return data__2.call(this,$elem,k);
case 3:
return data__3.call(this,$elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$core$IFn$_invoke$arity$1 = data__1;
data.cljs$core$IFn$_invoke$arity$2 = data__2;
data.cljs$core$IFn$_invoke$arity$3 = data__3;
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){return $elem.addClass(cljs.core.name(cl));
});
jayq.core.remove_class = (function remove_class($elem,cl){return $elem.removeClass(cljs.core.name(cl));
});
jayq.core.toggle_class = (function toggle_class($elem,cl){return $elem.toggleClass(cljs.core.name(cl));
});
jayq.core.has_class = (function has_class($elem,cl){return $elem.hasClass(cljs.core.name(cl));
});
jayq.core.is = (function is($elem,selector){return $elem.is(jayq.core.__GT_selector(selector));
});
jayq.core.after = (function after($elem,content){return $elem.after(content);
});
jayq.core.before = (function before($elem,content){return $elem.before(content);
});
jayq.core.append = (function append($elem,content){return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){return $elem.prepend(content);
});
jayq.core.append_to = (function append_to($elem,target){return $elem.appendTo(jayq.core.__GT_selector(target));
});
jayq.core.prepend_to = (function prepend_to($elem,target){return $elem.prependTo(jayq.core.__GT_selector(target));
});
jayq.core.insert_before = (function insert_before($elem,target){return $elem.insertBefore(jayq.core.__GT_selector(target));
});
jayq.core.insert_after = (function insert_after($elem,target){return $elem.insertAfter(jayq.core.__GT_selector(target));
});
jayq.core.replace_with = (function replace_with($elem,content){return $elem.replaceWith(content);
});
jayq.core.remove = (function remove($elem){return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__25098){var vec__25100 = p__25098;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25100,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25100,1,null);return $elem.hide(speed,on_finish);
};
var hide = function ($elem,var_args){
var p__25098 = null;if (arguments.length > 1) {
  p__25098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return hide__delegate.call(this,$elem,p__25098);};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__25101){
var $elem = cljs.core.first(arglist__25101);
var p__25098 = cljs.core.rest(arglist__25101);
return hide__delegate($elem,p__25098);
});
hide.cljs$core$IFn$_invoke$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__25102){var vec__25104 = p__25102;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25104,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25104,1,null);return $elem.show(speed,on_finish);
};
var show = function ($elem,var_args){
var p__25102 = null;if (arguments.length > 1) {
  p__25102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return show__delegate.call(this,$elem,p__25102);};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__25105){
var $elem = cljs.core.first(arglist__25105);
var p__25102 = cljs.core.rest(arglist__25105);
return show__delegate($elem,p__25102);
});
show.cljs$core$IFn$_invoke$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__25106){var vec__25108 = p__25106;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,1,null);return $elem.toggle(speed,on_finish);
};
var toggle = function ($elem,var_args){
var p__25106 = null;if (arguments.length > 1) {
  p__25106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toggle__delegate.call(this,$elem,p__25106);};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__25109){
var $elem = cljs.core.first(arglist__25109);
var p__25106 = cljs.core.rest(arglist__25109);
return toggle__delegate($elem,p__25106);
});
toggle.cljs$core$IFn$_invoke$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__25110){var vec__25112 = p__25110;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,1,null);return $elem.fadeOut(speed,on_finish);
};
var fade_out = function ($elem,var_args){
var p__25110 = null;if (arguments.length > 1) {
  p__25110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fade_out__delegate.call(this,$elem,p__25110);};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__25113){
var $elem = cljs.core.first(arglist__25113);
var p__25110 = cljs.core.rest(arglist__25113);
return fade_out__delegate($elem,p__25110);
});
fade_out.cljs$core$IFn$_invoke$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__25114){var vec__25116 = p__25114;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116,1,null);return $elem.fadeIn(speed,on_finish);
};
var fade_in = function ($elem,var_args){
var p__25114 = null;if (arguments.length > 1) {
  p__25114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fade_in__delegate.call(this,$elem,p__25114);};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__25117){
var $elem = cljs.core.first(arglist__25117);
var p__25114 = cljs.core.rest(arglist__25117);
return fade_in__delegate($elem,p__25114);
});
fade_in.cljs$core$IFn$_invoke$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__25118){var vec__25120 = p__25118;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120,1,null);return $elem.slideUp(speed,on_finish);
};
var slide_up = function ($elem,var_args){
var p__25118 = null;if (arguments.length > 1) {
  p__25118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return slide_up__delegate.call(this,$elem,p__25118);};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__25121){
var $elem = cljs.core.first(arglist__25121);
var p__25118 = cljs.core.rest(arglist__25121);
return slide_up__delegate($elem,p__25118);
});
slide_up.cljs$core$IFn$_invoke$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__25122){var vec__25124 = p__25122;var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25124,0,null);var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25124,1,null);return $elem.slideDown(speed,on_finish);
};
var slide_down = function ($elem,var_args){
var p__25122 = null;if (arguments.length > 1) {
  p__25122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return slide_down__delegate.call(this,$elem,p__25122);};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__25125){
var $elem = cljs.core.first(arglist__25125);
var p__25122 = cljs.core.rest(arglist__25125);
return slide_down__delegate($elem,p__25122);
});
slide_down.cljs$core$IFn$_invoke$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.siblings = (function() {
var siblings = null;
var siblings__1 = (function ($elem){return $elem.siblings();
});
var siblings__2 = (function ($elem,selector){return $elem.siblings(cljs.core.name(selector));
});
siblings = function($elem,selector){
switch(arguments.length){
case 1:
return siblings__1.call(this,$elem);
case 2:
return siblings__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siblings.cljs$core$IFn$_invoke$arity$1 = siblings__1;
siblings.cljs$core$IFn$_invoke$arity$2 = siblings__2;
return siblings;
})()
;
jayq.core.parent = (function parent($elem){return $elem.parent();
});
jayq.core.parents = (function() {
var parents = null;
var parents__1 = (function ($elem){return $elem.parents();
});
var parents__2 = (function ($elem,selector){return $elem.parents(cljs.core.name(selector));
});
parents = function($elem,selector){
switch(arguments.length){
case 1:
return parents__1.call(this,$elem);
case 2:
return parents__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
jayq.core.parents_until = (function() {
var parents_until = null;
var parents_until__1 = (function ($elem){return $elem.parentsUntil();
});
var parents_until__2 = (function ($elem,selector){return $elem.parentsUntil(jayq.core.__GT_selector(selector));
});
var parents_until__3 = (function ($elem,selector,filtr){return $elem.parentsUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});
parents_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return parents_until__1.call(this,$elem);
case 2:
return parents_until__2.call(this,$elem,selector);
case 3:
return parents_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents_until.cljs$core$IFn$_invoke$arity$1 = parents_until__1;
parents_until.cljs$core$IFn$_invoke$arity$2 = parents_until__2;
parents_until.cljs$core$IFn$_invoke$arity$3 = parents_until__3;
return parents_until;
})()
;
jayq.core.children = (function() {
var children = null;
var children__1 = (function ($elem){return $elem.children();
});
var children__2 = (function ($elem,selector){return $elem.children(cljs.core.name(selector));
});
children = function($elem,selector){
switch(arguments.length){
case 1:
return children__1.call(this,$elem);
case 2:
return children__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
children.cljs$core$IFn$_invoke$arity$1 = children__1;
children.cljs$core$IFn$_invoke$arity$2 = children__2;
return children;
})()
;
jayq.core.next = (function() {
var next = null;
var next__1 = (function ($elem){return $elem.next();
});
var next__2 = (function ($elem,selector){return $elem.next(cljs.core.name(selector));
});
next = function($elem,selector){
switch(arguments.length){
case 1:
return next__1.call(this,$elem);
case 2:
return next__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next.cljs$core$IFn$_invoke$arity$1 = next__1;
next.cljs$core$IFn$_invoke$arity$2 = next__2;
return next;
})()
;
jayq.core.prev = (function() {
var prev = null;
var prev__1 = (function ($elem){return $elem.prev();
});
var prev__2 = (function ($elem,selector){return $elem.prev(cljs.core.name(selector));
});
prev = function($elem,selector){
switch(arguments.length){
case 1:
return prev__1.call(this,$elem);
case 2:
return prev__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev.cljs$core$IFn$_invoke$arity$1 = prev__1;
prev.cljs$core$IFn$_invoke$arity$2 = prev__2;
return prev;
})()
;
jayq.core.next_all = (function() {
var next_all = null;
var next_all__1 = (function ($elem){return $elem.nextAll();
});
var next_all__2 = (function ($elem,selector){return $elem.nextAll(cljs.core.name(selector));
});
next_all = function($elem,selector){
switch(arguments.length){
case 1:
return next_all__1.call(this,$elem);
case 2:
return next_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_all.cljs$core$IFn$_invoke$arity$1 = next_all__1;
next_all.cljs$core$IFn$_invoke$arity$2 = next_all__2;
return next_all;
})()
;
jayq.core.prev_all = (function() {
var prev_all = null;
var prev_all__1 = (function ($elem){return $elem.prevAll();
});
var prev_all__2 = (function ($elem,selector){return $elem.prevAll(cljs.core.name(selector));
});
prev_all = function($elem,selector){
switch(arguments.length){
case 1:
return prev_all__1.call(this,$elem);
case 2:
return prev_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_all.cljs$core$IFn$_invoke$arity$1 = prev_all__1;
prev_all.cljs$core$IFn$_invoke$arity$2 = prev_all__2;
return prev_all;
})()
;
jayq.core.next_until = (function() {
var next_until = null;
var next_until__1 = (function ($elem){return $elem.nextUntil();
});
var next_until__2 = (function ($elem,selector){return $elem.nextUntil(jayq.core.__GT_selector(selector));
});
var next_until__3 = (function ($elem,selector,filtr){return $elem.nextUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});
next_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return next_until__1.call(this,$elem);
case 2:
return next_until__2.call(this,$elem,selector);
case 3:
return next_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_until.cljs$core$IFn$_invoke$arity$1 = next_until__1;
next_until.cljs$core$IFn$_invoke$arity$2 = next_until__2;
next_until.cljs$core$IFn$_invoke$arity$3 = next_until__3;
return next_until;
})()
;
jayq.core.prev_until = (function() {
var prev_until = null;
var prev_until__1 = (function ($elem){return $elem.prevUntil();
});
var prev_until__2 = (function ($elem,selector){return $elem.prevUntil(jayq.core.__GT_selector(selector));
});
var prev_until__3 = (function ($elem,selector,filtr){return $elem.prevUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});
prev_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return prev_until__1.call(this,$elem);
case 2:
return prev_until__2.call(this,$elem,selector);
case 3:
return prev_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_until.cljs$core$IFn$_invoke$arity$1 = prev_until__1;
prev_until.cljs$core$IFn$_invoke$arity$2 = prev_until__2;
prev_until.cljs$core$IFn$_invoke$arity$3 = prev_until__3;
return prev_until;
})()
;
jayq.core.find = (function find($elem,selector){return $elem.find(cljs.core.name(selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__25126){var vec__25128 = p__25126;var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25128,0,null);return $elem.closest(jayq.core.__GT_selector(selector),context);
};
var closest = function ($elem,selector,var_args){
var p__25126 = null;if (arguments.length > 2) {
  p__25126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return closest__delegate.call(this,$elem,selector,p__25126);};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__25129){
var $elem = cljs.core.first(arglist__25129);
arglist__25129 = cljs.core.next(arglist__25129);
var selector = cljs.core.first(arglist__25129);
var p__25126 = cljs.core.rest(arglist__25129);
return closest__delegate($elem,selector,p__25126);
});
closest.cljs$core$IFn$_invoke$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){return $elem.clone();
});
jayq.core.html = (function() {
var html = null;
var html__1 = (function ($elem){return $elem.html();
});
var html__2 = (function ($elem,v){return $elem.html(v);
});
html = function($elem,v){
switch(arguments.length){
case 1:
return html__1.call(this,$elem);
case 2:
return html__2.call(this,$elem,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$core$IFn$_invoke$arity$1 = html__1;
html.cljs$core$IFn$_invoke$arity$2 = html__2;
return html;
})()
;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function empty($elem){return $elem.empty();
});
jayq.core.val = (function() {
var val = null;
var val__1 = (function ($elem){return $elem.val();
});
var val__2 = (function ($elem,v){return $elem.val(v);
});
val = function($elem,v){
switch(arguments.length){
case 1:
return val__1.call(this,$elem);
case 2:
return val__2.call(this,$elem,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
val.cljs$core$IFn$_invoke$arity$1 = val__1;
val.cljs$core$IFn$_invoke$arity$2 = val__2;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){return $elem.serialize();
});
jayq.core.queue = (function() {
var queue = null;
var queue__1 = (function ($elem){return $elem.queue();
});
var queue__2 = (function ($elem,x){return $elem.queue(x);
});
var queue__3 = (function ($elem,x,y){return $elem.queue(x,y);
});
queue = function($elem,x,y){
switch(arguments.length){
case 1:
return queue__1.call(this,$elem);
case 2:
return queue__2.call(this,$elem,x);
case 3:
return queue__3.call(this,$elem,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
queue.cljs$core$IFn$_invoke$arity$1 = queue__1;
queue.cljs$core$IFn$_invoke$arity$2 = queue__2;
queue.cljs$core$IFn$_invoke$arity$3 = queue__3;
return queue;
})()
;
jayq.core.dequeue = (function() {
var dequeue = null;
var dequeue__1 = (function ($elem){return $elem.dequeue();
});
var dequeue__2 = (function ($elem,queue_name){return $elem.dequeue(queue_name);
});
dequeue = function($elem,queue_name){
switch(arguments.length){
case 1:
return dequeue__1.call(this,$elem);
case 2:
return dequeue__2.call(this,$elem,queue_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dequeue.cljs$core$IFn$_invoke$arity$1 = dequeue__1;
dequeue.cljs$core$IFn$_invoke$arity$2 = dequeue__2;
return dequeue;
})()
;
jayq.core.document_ready = (function document_ready(func){return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).ready(func);
});
jayq.core.mimetype_converter = (function mimetype_converter(s){return cljs.reader.read_string([cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,"application/edn, text/edn",cljs.core.constant$keyword$196,"application/clojure, text/clojure"], null),cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),cljs.core.constant$keyword$194,new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function clj_content_type_QMARK_(x){return cljs.core.re_find(/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function __GT_content_type(ct){if(typeof ct === 'string')
{return ct;
} else
{if((ct instanceof cljs.core.Keyword))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ct)].join(''),1);
} else
{return null;
}
}
});
jayq.core.preprocess_request = (function preprocess_request(p__25132){var map__25134 = p__25132;var map__25134__$1 = ((cljs.core.seq_QMARK_(map__25134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25134):map__25134);var request = map__25134__$1;var contentType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25134__$1,cljs.core.constant$keyword$197);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25134__$1,cljs.core.constant$keyword$198);var ct = jayq.core.__GT_content_type(contentType);return (function (p1__25131_SHARP_){if(cljs.core.truth_(jayq.core.clj_content_type_QMARK_(ct)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25131_SHARP_,cljs.core.constant$keyword$198,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
} else
{return p1__25131_SHARP_;
}
}).call(null,(function (p1__25130_SHARP_){if(cljs.core.truth_(ct))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25130_SHARP_,cljs.core.constant$keyword$197,ct);
} else
{return p1__25130_SHARP_;
}
}).call(null,request));
});
jayq.core.__GT_ajax_settings = (function __GT_ajax_settings(request){return cljs.core.clj__GT_js(jayq.core.preprocess_request(request));
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){return jQuery.ajax(jayq.core.__GT_ajax_settings(settings));
});
var ajax__2 = (function (url,settings){return jQuery.ajax(url,jayq.core.__GT_ajax_settings(settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax.cljs$core$IFn$_invoke$arity$1 = ajax__1;
ajax.cljs$core$IFn$_invoke$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.xhr = (function xhr(p__25135,content,callback){var vec__25137 = p__25135;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,0,null);var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,1,null);var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$158,clojure.string.upper_case(cljs.core.name(method)),cljs.core.constant$keyword$198,cljs.core.clj__GT_js(content),cljs.core.constant$keyword$199,callback], null));return jQuery.ajax(uri,params);
});
/**
* Reads clojure data from element content (preferably a script tag with type=edn/clojure)
*/
jayq.core.read = (function read($elem){return cljs.reader.read_string(jayq.core.html.cljs$core$IFn$_invoke$arity$1($elem));
});
jayq.core.bind = (function bind($elem,ev,func){return $elem.bind(cljs.core.name(ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__25138){var vec__25140 = p__25138;var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,0,null);return $elem.unbind(cljs.core.name(ev),func);
};
var unbind = function ($elem,ev,var_args){
var p__25138 = null;if (arguments.length > 2) {
  p__25138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return unbind__delegate.call(this,$elem,ev,p__25138);};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__25141){
var $elem = cljs.core.first(arglist__25141);
arglist__25141 = cljs.core.next(arglist__25141);
var ev = cljs.core.first(arglist__25141);
var p__25138 = cljs.core.rest(arglist__25141);
return unbind__delegate($elem,ev,p__25138);
});
unbind.cljs$core$IFn$_invoke$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){return $elem.trigger(cljs.core.name(ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){return $elem.delegate(jayq.core.__GT_selector(sel),cljs.core.name(ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){if(cljs.core.coll_QMARK_(e))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,e));
} else
{return cljs.core.clj__GT_js(e);
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__25142){var vec__25144 = p__25142;var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,0,null);var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,1,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,2,null);return $elem.on(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
};
var on = function ($elem,events,var_args){
var p__25142 = null;if (arguments.length > 2) {
  p__25142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return on__delegate.call(this,$elem,events,p__25142);};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__25145){
var $elem = cljs.core.first(arglist__25145);
arglist__25145 = cljs.core.next(arglist__25145);
var events = cljs.core.first(arglist__25145);
var p__25142 = cljs.core.rest(arglist__25145);
return on__delegate($elem,events,p__25142);
});
on.cljs$core$IFn$_invoke$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__25146){var vec__25148 = p__25146;var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,0,null);var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,1,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,2,null);return $elem.one(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
};
var one = function ($elem,events,var_args){
var p__25146 = null;if (arguments.length > 2) {
  p__25146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return one__delegate.call(this,$elem,events,p__25146);};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__25149){
var $elem = cljs.core.first(arglist__25149);
arglist__25149 = cljs.core.next(arglist__25149);
var events = cljs.core.first(arglist__25149);
var p__25146 = cljs.core.rest(arglist__25149);
return one__delegate($elem,events,p__25146);
});
one.cljs$core$IFn$_invoke$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__25150){var vec__25152 = p__25150;var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25152,0,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25152,1,null);return $elem.off(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),handler);
};
var off = function ($elem,events,var_args){
var p__25150 = null;if (arguments.length > 2) {
  p__25150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return off__delegate.call(this,$elem,events,p__25150);};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__25153){
var $elem = cljs.core.first(arglist__25153);
arglist__25153 = cljs.core.next(arglist__25153);
var events = cljs.core.first(arglist__25153);
var p__25150 = cljs.core.rest(arglist__25153);
return off__delegate($elem,events,p__25150);
});
off.cljs$core$IFn$_invoke$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){return e.preventDefault();
});
jayq.core.height = (function() {
var height = null;
var height__1 = (function ($elem){return $elem.height();
});
var height__2 = (function ($elem,x){return $elem.height(x);
});
height = function($elem,x){
switch(arguments.length){
case 1:
return height__1.call(this,$elem);
case 2:
return height__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
height.cljs$core$IFn$_invoke$arity$1 = height__1;
height.cljs$core$IFn$_invoke$arity$2 = height__2;
return height;
})()
;
jayq.core.width = (function() {
var width = null;
var width__1 = (function ($elem){return $elem.width();
});
var width__2 = (function ($elem,x){return $elem.width(x);
});
width = function($elem,x){
switch(arguments.length){
case 1:
return width__1.call(this,$elem);
case 2:
return width__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
width.cljs$core$IFn$_invoke$arity$1 = width__1;
width.cljs$core$IFn$_invoke$arity$2 = width__2;
return width;
})()
;
jayq.core.inner_height = (function inner_height($elem){return $elem.innerHeight();
});
jayq.core.inner_width = (function inner_width($elem){return $elem.innerWidth();
});
jayq.core.outer_height = (function outer_height($elem){return $elem.outerHeight();
});
jayq.core.outer_width = (function outer_width($elem){return $elem.outerWidth();
});
jayq.core.offset = (function() {
var offset = null;
var offset__1 = (function ($elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.offset(),cljs.core.array_seq([cljs.core.constant$keyword$130,true], 0));
});
var offset__2 = (function ($elem,coords){return cljs.core.clj__GT_js(coords).offset();
});
offset = function($elem,coords){
switch(arguments.length){
case 1:
return offset__1.call(this,$elem);
case 2:
return offset__2.call(this,$elem,coords);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offset.cljs$core$IFn$_invoke$arity$1 = offset__1;
offset.cljs$core$IFn$_invoke$arity$2 = offset__2;
return offset;
})()
;
jayq.core.offset_parent = (function offset_parent($elem){return $elem.offsetParent();
});
jayq.core.position = (function position($elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.position(),cljs.core.array_seq([cljs.core.constant$keyword$130,true], 0));
});
jayq.core.scroll_left = (function() {
var scroll_left = null;
var scroll_left__1 = (function ($elem){return $elem.scrollLeft();
});
var scroll_left__2 = (function ($elem,x){return $elem.scrollLeft(x);
});
scroll_left = function($elem,x){
switch(arguments.length){
case 1:
return scroll_left__1.call(this,$elem);
case 2:
return scroll_left__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scroll_left.cljs$core$IFn$_invoke$arity$1 = scroll_left__1;
scroll_left.cljs$core$IFn$_invoke$arity$2 = scroll_left__2;
return scroll_left;
})()
;
jayq.core.scroll_top = (function() {
var scroll_top = null;
var scroll_top__1 = (function ($elem){return $elem.scrollTop();
});
var scroll_top__2 = (function ($elem,x){return $elem.scrollTop(x);
});
scroll_top = function($elem,x){
switch(arguments.length){
case 1:
return scroll_top__1.call(this,$elem);
case 2:
return scroll_top__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scroll_top.cljs$core$IFn$_invoke$arity$1 = scroll_top__1;
scroll_top.cljs$core$IFn$_invoke$arity$2 = scroll_top__2;
return scroll_top;
})()
;
jayq.core.$deferred = $.Deferred;
jayq.core.$when = $.when;
jayq.core.then = (function() {
var then = null;
var then__3 = (function (deferred,done_fn,fail_fn){return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn));
});
var then__4 = (function (deferred,done_fn,fail_fn,progress_fn){return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn),cljs.core.clj__GT_js(progress_fn));
});
then = function(deferred,done_fn,fail_fn,progress_fn){
switch(arguments.length){
case 3:
return then__3.call(this,deferred,done_fn,fail_fn);
case 4:
return then__4.call(this,deferred,done_fn,fail_fn,progress_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
then.cljs$core$IFn$_invoke$arity$3 = then__3;
then.cljs$core$IFn$_invoke$arity$4 = then__4;
return then;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.done = (function() { 
var done__delegate = function (deferred,fns_args){return deferred.done.apply(deferred,cljs.core.clj__GT_js(fns_args));
};
var done = function (deferred,var_args){
var fns_args = null;if (arguments.length > 1) {
  fns_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return done__delegate.call(this,deferred,fns_args);};
done.cljs$lang$maxFixedArity = 1;
done.cljs$lang$applyTo = (function (arglist__25154){
var deferred = cljs.core.first(arglist__25154);
var fns_args = cljs.core.rest(arglist__25154);
return done__delegate(deferred,fns_args);
});
done.cljs$core$IFn$_invoke$arity$variadic = done__delegate;
return done;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fail = (function() { 
var fail__delegate = function (deferred,fns_args){return deferred.fail.apply(deferred,cljs.core.clj__GT_js(fns_args));
};
var fail = function (deferred,var_args){
var fns_args = null;if (arguments.length > 1) {
  fns_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fail__delegate.call(this,deferred,fns_args);};
fail.cljs$lang$maxFixedArity = 1;
fail.cljs$lang$applyTo = (function (arglist__25155){
var deferred = cljs.core.first(arglist__25155);
var fns_args = cljs.core.rest(arglist__25155);
return fail__delegate(deferred,fns_args);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
jayq.core.progress = (function progress(deferred,fns_args){return deferred.progress(cljs.core.clj__GT_js(fns_args));
});
jayq.core.promise = (function() {
var promise = null;
var promise__1 = (function (deferred){return deferred.promise();
});
var promise__2 = (function (deferred,type){return deferred.promise(type);
});
var promise__3 = (function (deferred,type,target){return deferred.promise(type,target);
});
promise = function(deferred,type,target){
switch(arguments.length){
case 1:
return promise__1.call(this,deferred);
case 2:
return promise__2.call(this,deferred,type);
case 3:
return promise__3.call(this,deferred,type,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promise.cljs$core$IFn$_invoke$arity$1 = promise__1;
promise.cljs$core$IFn$_invoke$arity$2 = promise__2;
promise.cljs$core$IFn$_invoke$arity$3 = promise__3;
return promise;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.always = (function() { 
var always__delegate = function (deferred,fns_args){return deferred.always.apply(deferred,cljs.core.clj__GT_js(fns_args));
};
var always = function (deferred,var_args){
var fns_args = null;if (arguments.length > 1) {
  fns_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return always__delegate.call(this,deferred,fns_args);};
always.cljs$lang$maxFixedArity = 1;
always.cljs$lang$applyTo = (function (arglist__25156){
var deferred = cljs.core.first(arglist__25156);
var fns_args = cljs.core.rest(arglist__25156);
return always__delegate(deferred,fns_args);
});
always.cljs$core$IFn$_invoke$arity$variadic = always__delegate;
return always;
})()
;
jayq.core.reject = (function reject(deferred,args){return deferred.reject(args);
});
jayq.core.reject_with = (function reject_with(deferred,context,args){return deferred.rejectWith(context,args);
});
jayq.core.notify = (function notify(deferred,args){return deferred.notify(args);
});
jayq.core.notify_with = (function notify_with(deferred,context,args){return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function resolve(deferred,args){return deferred.resolve(args);
});
jayq.core.resolve_with = (function resolve_with(deferred,context,args){return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function() {
var pipe = null;
var pipe__2 = (function (deferred,done_filter){return deferred.pipe(done_filter);
});
var pipe__3 = (function (deferred,done_filter,fail_filter){return deferred.pipe(done_filter,fail_filter);
});
var pipe__4 = (function (deferred,done_filter,fail_filter,progress_filter){return deferred.pipe(done_filter,fail_filter,progress_filter);
});
pipe = function(deferred,done_filter,fail_filter,progress_filter){
switch(arguments.length){
case 2:
return pipe__2.call(this,deferred,done_filter);
case 3:
return pipe__3.call(this,deferred,done_filter,fail_filter);
case 4:
return pipe__4.call(this,deferred,done_filter,fail_filter,progress_filter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
pipe.cljs$core$IFn$_invoke$arity$4 = pipe__4;
return pipe;
})()
;
jayq.core.state = (function state(deferred){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$200,jayq.core.$when,cljs.core.constant$keyword$201,(function (x,f){var dfd = (jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0 ? jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0() : jayq.core.$deferred.call(null));jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([(function (v){return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.array_seq([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jayq.core.resolve,dfd)], 0));
})], 0));
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1(dfd);
}),cljs.core.constant$keyword$202,cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$200,cljs.core.identity,cljs.core.constant$keyword$201,(function (x,f){return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(jayq.core.ajax.cljs$core$IFn$_invoke$arity$1(x),cljs.core.array_seq([f], 0));
}),cljs.core.constant$keyword$202,cljs.core.identity], null);
