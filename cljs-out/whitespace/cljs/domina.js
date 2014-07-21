// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19376,opt_wrapper_19374,table_section_wrapper_19375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19374,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19375,cell_wrapper_19376,table_section_wrapper_19375,table_section_wrapper_19375]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19381 = cljs.core.seq.call(null,tbody);var chunk__19382 = null;var count__19383 = (0);var i__19384 = (0);while(true){
if((i__19384 < count__19383))
{var child = cljs.core._nth.call(null,chunk__19382,i__19384);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19385 = seq__19381;
var G__19386 = chunk__19382;
var G__19387 = count__19383;
var G__19388 = (i__19384 + (1));
seq__19381 = G__19385;
chunk__19382 = G__19386;
count__19383 = G__19387;
i__19384 = G__19388;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19381);if(temp__4126__auto__)
{var seq__19381__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19381__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19381__$1);{
var G__19389 = cljs.core.chunk_rest.call(null,seq__19381__$1);
var G__19390 = c__4299__auto__;
var G__19391 = cljs.core.count.call(null,c__4299__auto__);
var G__19392 = (0);
seq__19381 = G__19389;
chunk__19382 = G__19390;
count__19383 = G__19391;
i__19384 = G__19392;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19381__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19393 = cljs.core.next.call(null,seq__19381__$1);
var G__19394 = null;
var G__19395 = (0);
var G__19396 = (0);
seq__19381 = G__19393;
chunk__19382 = G__19394;
count__19383 = G__19395;
i__19384 = G__19396;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19398 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19398,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19398,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19398,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19399 = wrapper.lastChild;
var G__19400 = (level - (1));
wrapper = G__19399;
level = G__19400;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj19402 = {};return obj19402;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19403){
var mesg = cljs.core.seq(arglist__19403);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19404){
var mesg = cljs.core.seq(arglist__19404);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19405){
var contents = cljs.core.seq(arglist__19405);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19406_SHARP_){return p1__19406_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19407_SHARP_,p2__19408_SHARP_){return goog.dom.insertChildAt(p1__19407_SHARP_,p2__19408_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19410_SHARP_,p2__19409_SHARP_){return goog.dom.insertSiblingBefore(p2__19409_SHARP_,p1__19410_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19412_SHARP_,p2__19411_SHARP_){return goog.dom.insertSiblingAfter(p2__19411_SHARP_,p1__19412_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19414_SHARP_,p2__19413_SHARP_){return goog.dom.replaceNode(p2__19413_SHARP_,p1__19414_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__19419_19423 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19420_19424 = null;var count__19421_19425 = (0);var i__19422_19426 = (0);while(true){
if((i__19422_19426 < count__19421_19425))
{var n_19427 = cljs.core._nth.call(null,chunk__19420_19424,i__19422_19426);goog.style.setStyle(n_19427,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19428 = seq__19419_19423;
var G__19429 = chunk__19420_19424;
var G__19430 = count__19421_19425;
var G__19431 = (i__19422_19426 + (1));
seq__19419_19423 = G__19428;
chunk__19420_19424 = G__19429;
count__19421_19425 = G__19430;
i__19422_19426 = G__19431;
continue;
}
} else
{var temp__4126__auto___19432 = cljs.core.seq.call(null,seq__19419_19423);if(temp__4126__auto___19432)
{var seq__19419_19433__$1 = temp__4126__auto___19432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19419_19433__$1))
{var c__4299__auto___19434 = cljs.core.chunk_first.call(null,seq__19419_19433__$1);{
var G__19435 = cljs.core.chunk_rest.call(null,seq__19419_19433__$1);
var G__19436 = c__4299__auto___19434;
var G__19437 = cljs.core.count.call(null,c__4299__auto___19434);
var G__19438 = (0);
seq__19419_19423 = G__19435;
chunk__19420_19424 = G__19436;
count__19421_19425 = G__19437;
i__19422_19426 = G__19438;
continue;
}
} else
{var n_19439 = cljs.core.first.call(null,seq__19419_19433__$1);goog.style.setStyle(n_19439,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19440 = cljs.core.next.call(null,seq__19419_19433__$1);
var G__19441 = null;
var G__19442 = (0);
var G__19443 = (0);
seq__19419_19423 = G__19440;
chunk__19420_19424 = G__19441;
count__19421_19425 = G__19442;
i__19422_19426 = G__19443;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19444){
var content = cljs.core.first(arglist__19444);
arglist__19444 = cljs.core.next(arglist__19444);
var name = cljs.core.first(arglist__19444);
var value = cljs.core.rest(arglist__19444);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__19449_19453 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19450_19454 = null;var count__19451_19455 = (0);var i__19452_19456 = (0);while(true){
if((i__19452_19456 < count__19451_19455))
{var n_19457 = cljs.core._nth.call(null,chunk__19450_19454,i__19452_19456);n_19457.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19458 = seq__19449_19453;
var G__19459 = chunk__19450_19454;
var G__19460 = count__19451_19455;
var G__19461 = (i__19452_19456 + (1));
seq__19449_19453 = G__19458;
chunk__19450_19454 = G__19459;
count__19451_19455 = G__19460;
i__19452_19456 = G__19461;
continue;
}
} else
{var temp__4126__auto___19462 = cljs.core.seq.call(null,seq__19449_19453);if(temp__4126__auto___19462)
{var seq__19449_19463__$1 = temp__4126__auto___19462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19449_19463__$1))
{var c__4299__auto___19464 = cljs.core.chunk_first.call(null,seq__19449_19463__$1);{
var G__19465 = cljs.core.chunk_rest.call(null,seq__19449_19463__$1);
var G__19466 = c__4299__auto___19464;
var G__19467 = cljs.core.count.call(null,c__4299__auto___19464);
var G__19468 = (0);
seq__19449_19453 = G__19465;
chunk__19450_19454 = G__19466;
count__19451_19455 = G__19467;
i__19452_19456 = G__19468;
continue;
}
} else
{var n_19469 = cljs.core.first.call(null,seq__19449_19463__$1);n_19469.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19470 = cljs.core.next.call(null,seq__19449_19463__$1);
var G__19471 = null;
var G__19472 = (0);
var G__19473 = (0);
seq__19449_19453 = G__19470;
chunk__19450_19454 = G__19471;
count__19451_19455 = G__19472;
i__19452_19456 = G__19473;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19474){
var content = cljs.core.first(arglist__19474);
arglist__19474 = cljs.core.next(arglist__19474);
var name = cljs.core.first(arglist__19474);
var value = cljs.core.rest(arglist__19474);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19479_19483 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19480_19484 = null;var count__19481_19485 = (0);var i__19482_19486 = (0);while(true){
if((i__19482_19486 < count__19481_19485))
{var n_19487 = cljs.core._nth.call(null,chunk__19480_19484,i__19482_19486);n_19487.removeAttribute(cljs.core.name.call(null,name));
{
var G__19488 = seq__19479_19483;
var G__19489 = chunk__19480_19484;
var G__19490 = count__19481_19485;
var G__19491 = (i__19482_19486 + (1));
seq__19479_19483 = G__19488;
chunk__19480_19484 = G__19489;
count__19481_19485 = G__19490;
i__19482_19486 = G__19491;
continue;
}
} else
{var temp__4126__auto___19492 = cljs.core.seq.call(null,seq__19479_19483);if(temp__4126__auto___19492)
{var seq__19479_19493__$1 = temp__4126__auto___19492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19479_19493__$1))
{var c__4299__auto___19494 = cljs.core.chunk_first.call(null,seq__19479_19493__$1);{
var G__19495 = cljs.core.chunk_rest.call(null,seq__19479_19493__$1);
var G__19496 = c__4299__auto___19494;
var G__19497 = cljs.core.count.call(null,c__4299__auto___19494);
var G__19498 = (0);
seq__19479_19483 = G__19495;
chunk__19480_19484 = G__19496;
count__19481_19485 = G__19497;
i__19482_19486 = G__19498;
continue;
}
} else
{var n_19499 = cljs.core.first.call(null,seq__19479_19493__$1);n_19499.removeAttribute(cljs.core.name.call(null,name));
{
var G__19500 = cljs.core.next.call(null,seq__19479_19493__$1);
var G__19501 = null;
var G__19502 = (0);
var G__19503 = (0);
seq__19479_19483 = G__19500;
chunk__19480_19484 = G__19501;
count__19481_19485 = G__19502;
i__19482_19486 = G__19503;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19505 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19505,(0),null);var v = cljs.core.nth.call(null,vec__19505,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19506_SHARP_){var attr = attrs__$1.item(p1__19506_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19513_19519 = cljs.core.seq.call(null,styles);var chunk__19514_19520 = null;var count__19515_19521 = (0);var i__19516_19522 = (0);while(true){
if((i__19516_19522 < count__19515_19521))
{var vec__19517_19523 = cljs.core._nth.call(null,chunk__19514_19520,i__19516_19522);var name_19524 = cljs.core.nth.call(null,vec__19517_19523,(0),null);var value_19525 = cljs.core.nth.call(null,vec__19517_19523,(1),null);domina.set_style_BANG_.call(null,content,name_19524,value_19525);
{
var G__19526 = seq__19513_19519;
var G__19527 = chunk__19514_19520;
var G__19528 = count__19515_19521;
var G__19529 = (i__19516_19522 + (1));
seq__19513_19519 = G__19526;
chunk__19514_19520 = G__19527;
count__19515_19521 = G__19528;
i__19516_19522 = G__19529;
continue;
}
} else
{var temp__4126__auto___19530 = cljs.core.seq.call(null,seq__19513_19519);if(temp__4126__auto___19530)
{var seq__19513_19531__$1 = temp__4126__auto___19530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19513_19531__$1))
{var c__4299__auto___19532 = cljs.core.chunk_first.call(null,seq__19513_19531__$1);{
var G__19533 = cljs.core.chunk_rest.call(null,seq__19513_19531__$1);
var G__19534 = c__4299__auto___19532;
var G__19535 = cljs.core.count.call(null,c__4299__auto___19532);
var G__19536 = (0);
seq__19513_19519 = G__19533;
chunk__19514_19520 = G__19534;
count__19515_19521 = G__19535;
i__19516_19522 = G__19536;
continue;
}
} else
{var vec__19518_19537 = cljs.core.first.call(null,seq__19513_19531__$1);var name_19538 = cljs.core.nth.call(null,vec__19518_19537,(0),null);var value_19539 = cljs.core.nth.call(null,vec__19518_19537,(1),null);domina.set_style_BANG_.call(null,content,name_19538,value_19539);
{
var G__19540 = cljs.core.next.call(null,seq__19513_19531__$1);
var G__19541 = null;
var G__19542 = (0);
var G__19543 = (0);
seq__19513_19519 = G__19540;
chunk__19514_19520 = G__19541;
count__19515_19521 = G__19542;
i__19516_19522 = G__19543;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19550_19556 = cljs.core.seq.call(null,attrs);var chunk__19551_19557 = null;var count__19552_19558 = (0);var i__19553_19559 = (0);while(true){
if((i__19553_19559 < count__19552_19558))
{var vec__19554_19560 = cljs.core._nth.call(null,chunk__19551_19557,i__19553_19559);var name_19561 = cljs.core.nth.call(null,vec__19554_19560,(0),null);var value_19562 = cljs.core.nth.call(null,vec__19554_19560,(1),null);domina.set_attr_BANG_.call(null,content,name_19561,value_19562);
{
var G__19563 = seq__19550_19556;
var G__19564 = chunk__19551_19557;
var G__19565 = count__19552_19558;
var G__19566 = (i__19553_19559 + (1));
seq__19550_19556 = G__19563;
chunk__19551_19557 = G__19564;
count__19552_19558 = G__19565;
i__19553_19559 = G__19566;
continue;
}
} else
{var temp__4126__auto___19567 = cljs.core.seq.call(null,seq__19550_19556);if(temp__4126__auto___19567)
{var seq__19550_19568__$1 = temp__4126__auto___19567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19550_19568__$1))
{var c__4299__auto___19569 = cljs.core.chunk_first.call(null,seq__19550_19568__$1);{
var G__19570 = cljs.core.chunk_rest.call(null,seq__19550_19568__$1);
var G__19571 = c__4299__auto___19569;
var G__19572 = cljs.core.count.call(null,c__4299__auto___19569);
var G__19573 = (0);
seq__19550_19556 = G__19570;
chunk__19551_19557 = G__19571;
count__19552_19558 = G__19572;
i__19553_19559 = G__19573;
continue;
}
} else
{var vec__19555_19574 = cljs.core.first.call(null,seq__19550_19568__$1);var name_19575 = cljs.core.nth.call(null,vec__19555_19574,(0),null);var value_19576 = cljs.core.nth.call(null,vec__19555_19574,(1),null);domina.set_attr_BANG_.call(null,content,name_19575,value_19576);
{
var G__19577 = cljs.core.next.call(null,seq__19550_19568__$1);
var G__19578 = null;
var G__19579 = (0);
var G__19580 = (0);
seq__19550_19556 = G__19577;
chunk__19551_19557 = G__19578;
count__19552_19558 = G__19579;
i__19553_19559 = G__19580;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19585_19589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19586_19590 = null;var count__19587_19591 = (0);var i__19588_19592 = (0);while(true){
if((i__19588_19592 < count__19587_19591))
{var node_19593 = cljs.core._nth.call(null,chunk__19586_19590,i__19588_19592);goog.dom.classes.add(node_19593,class$);
{
var G__19594 = seq__19585_19589;
var G__19595 = chunk__19586_19590;
var G__19596 = count__19587_19591;
var G__19597 = (i__19588_19592 + (1));
seq__19585_19589 = G__19594;
chunk__19586_19590 = G__19595;
count__19587_19591 = G__19596;
i__19588_19592 = G__19597;
continue;
}
} else
{var temp__4126__auto___19598 = cljs.core.seq.call(null,seq__19585_19589);if(temp__4126__auto___19598)
{var seq__19585_19599__$1 = temp__4126__auto___19598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19585_19599__$1))
{var c__4299__auto___19600 = cljs.core.chunk_first.call(null,seq__19585_19599__$1);{
var G__19601 = cljs.core.chunk_rest.call(null,seq__19585_19599__$1);
var G__19602 = c__4299__auto___19600;
var G__19603 = cljs.core.count.call(null,c__4299__auto___19600);
var G__19604 = (0);
seq__19585_19589 = G__19601;
chunk__19586_19590 = G__19602;
count__19587_19591 = G__19603;
i__19588_19592 = G__19604;
continue;
}
} else
{var node_19605 = cljs.core.first.call(null,seq__19585_19599__$1);goog.dom.classes.add(node_19605,class$);
{
var G__19606 = cljs.core.next.call(null,seq__19585_19599__$1);
var G__19607 = null;
var G__19608 = (0);
var G__19609 = (0);
seq__19585_19589 = G__19606;
chunk__19586_19590 = G__19607;
count__19587_19591 = G__19608;
i__19588_19592 = G__19609;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19614_19618 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19615_19619 = null;var count__19616_19620 = (0);var i__19617_19621 = (0);while(true){
if((i__19617_19621 < count__19616_19620))
{var node_19622 = cljs.core._nth.call(null,chunk__19615_19619,i__19617_19621);goog.dom.classes.remove(node_19622,class$);
{
var G__19623 = seq__19614_19618;
var G__19624 = chunk__19615_19619;
var G__19625 = count__19616_19620;
var G__19626 = (i__19617_19621 + (1));
seq__19614_19618 = G__19623;
chunk__19615_19619 = G__19624;
count__19616_19620 = G__19625;
i__19617_19621 = G__19626;
continue;
}
} else
{var temp__4126__auto___19627 = cljs.core.seq.call(null,seq__19614_19618);if(temp__4126__auto___19627)
{var seq__19614_19628__$1 = temp__4126__auto___19627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19614_19628__$1))
{var c__4299__auto___19629 = cljs.core.chunk_first.call(null,seq__19614_19628__$1);{
var G__19630 = cljs.core.chunk_rest.call(null,seq__19614_19628__$1);
var G__19631 = c__4299__auto___19629;
var G__19632 = cljs.core.count.call(null,c__4299__auto___19629);
var G__19633 = (0);
seq__19614_19618 = G__19630;
chunk__19615_19619 = G__19631;
count__19616_19620 = G__19632;
i__19617_19621 = G__19633;
continue;
}
} else
{var node_19634 = cljs.core.first.call(null,seq__19614_19628__$1);goog.dom.classes.remove(node_19634,class$);
{
var G__19635 = cljs.core.next.call(null,seq__19614_19628__$1);
var G__19636 = null;
var G__19637 = (0);
var G__19638 = (0);
seq__19614_19618 = G__19635;
chunk__19615_19619 = G__19636;
count__19616_19620 = G__19637;
i__19617_19621 = G__19638;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19643_19647 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19644_19648 = null;var count__19645_19649 = (0);var i__19646_19650 = (0);while(true){
if((i__19646_19650 < count__19645_19649))
{var node_19651 = cljs.core._nth.call(null,chunk__19644_19648,i__19646_19650);goog.dom.classes.toggle(node_19651,class$);
{
var G__19652 = seq__19643_19647;
var G__19653 = chunk__19644_19648;
var G__19654 = count__19645_19649;
var G__19655 = (i__19646_19650 + (1));
seq__19643_19647 = G__19652;
chunk__19644_19648 = G__19653;
count__19645_19649 = G__19654;
i__19646_19650 = G__19655;
continue;
}
} else
{var temp__4126__auto___19656 = cljs.core.seq.call(null,seq__19643_19647);if(temp__4126__auto___19656)
{var seq__19643_19657__$1 = temp__4126__auto___19656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19643_19657__$1))
{var c__4299__auto___19658 = cljs.core.chunk_first.call(null,seq__19643_19657__$1);{
var G__19659 = cljs.core.chunk_rest.call(null,seq__19643_19657__$1);
var G__19660 = c__4299__auto___19658;
var G__19661 = cljs.core.count.call(null,c__4299__auto___19658);
var G__19662 = (0);
seq__19643_19647 = G__19659;
chunk__19644_19648 = G__19660;
count__19645_19649 = G__19661;
i__19646_19650 = G__19662;
continue;
}
} else
{var node_19663 = cljs.core.first.call(null,seq__19643_19657__$1);goog.dom.classes.toggle(node_19663,class$);
{
var G__19664 = cljs.core.next.call(null,seq__19643_19657__$1);
var G__19665 = null;
var G__19666 = (0);
var G__19667 = (0);
seq__19643_19647 = G__19664;
chunk__19644_19648 = G__19665;
count__19645_19649 = G__19666;
i__19646_19650 = G__19667;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19676__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19672_19677 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19673_19678 = null;var count__19674_19679 = (0);var i__19675_19680 = (0);while(true){
if((i__19675_19680 < count__19674_19679))
{var node_19681 = cljs.core._nth.call(null,chunk__19673_19678,i__19675_19680);goog.dom.classes.set(node_19681,classes_19676__$1);
{
var G__19682 = seq__19672_19677;
var G__19683 = chunk__19673_19678;
var G__19684 = count__19674_19679;
var G__19685 = (i__19675_19680 + (1));
seq__19672_19677 = G__19682;
chunk__19673_19678 = G__19683;
count__19674_19679 = G__19684;
i__19675_19680 = G__19685;
continue;
}
} else
{var temp__4126__auto___19686 = cljs.core.seq.call(null,seq__19672_19677);if(temp__4126__auto___19686)
{var seq__19672_19687__$1 = temp__4126__auto___19686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19672_19687__$1))
{var c__4299__auto___19688 = cljs.core.chunk_first.call(null,seq__19672_19687__$1);{
var G__19689 = cljs.core.chunk_rest.call(null,seq__19672_19687__$1);
var G__19690 = c__4299__auto___19688;
var G__19691 = cljs.core.count.call(null,c__4299__auto___19688);
var G__19692 = (0);
seq__19672_19677 = G__19689;
chunk__19673_19678 = G__19690;
count__19674_19679 = G__19691;
i__19675_19680 = G__19692;
continue;
}
} else
{var node_19693 = cljs.core.first.call(null,seq__19672_19687__$1);goog.dom.classes.set(node_19693,classes_19676__$1);
{
var G__19694 = cljs.core.next.call(null,seq__19672_19687__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__19672_19677 = G__19694;
chunk__19673_19678 = G__19695;
count__19674_19679 = G__19696;
i__19675_19680 = G__19697;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19702_19706 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19703_19707 = null;var count__19704_19708 = (0);var i__19705_19709 = (0);while(true){
if((i__19705_19709 < count__19704_19708))
{var node_19710 = cljs.core._nth.call(null,chunk__19703_19707,i__19705_19709);goog.dom.setTextContent(node_19710,value);
{
var G__19711 = seq__19702_19706;
var G__19712 = chunk__19703_19707;
var G__19713 = count__19704_19708;
var G__19714 = (i__19705_19709 + (1));
seq__19702_19706 = G__19711;
chunk__19703_19707 = G__19712;
count__19704_19708 = G__19713;
i__19705_19709 = G__19714;
continue;
}
} else
{var temp__4126__auto___19715 = cljs.core.seq.call(null,seq__19702_19706);if(temp__4126__auto___19715)
{var seq__19702_19716__$1 = temp__4126__auto___19715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19702_19716__$1))
{var c__4299__auto___19717 = cljs.core.chunk_first.call(null,seq__19702_19716__$1);{
var G__19718 = cljs.core.chunk_rest.call(null,seq__19702_19716__$1);
var G__19719 = c__4299__auto___19717;
var G__19720 = cljs.core.count.call(null,c__4299__auto___19717);
var G__19721 = (0);
seq__19702_19706 = G__19718;
chunk__19703_19707 = G__19719;
count__19704_19708 = G__19720;
i__19705_19709 = G__19721;
continue;
}
} else
{var node_19722 = cljs.core.first.call(null,seq__19702_19716__$1);goog.dom.setTextContent(node_19722,value);
{
var G__19723 = cljs.core.next.call(null,seq__19702_19716__$1);
var G__19724 = null;
var G__19725 = (0);
var G__19726 = (0);
seq__19702_19706 = G__19723;
chunk__19703_19707 = G__19724;
count__19704_19708 = G__19725;
i__19705_19709 = G__19726;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19731_19735 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19732_19736 = null;var count__19733_19737 = (0);var i__19734_19738 = (0);while(true){
if((i__19734_19738 < count__19733_19737))
{var node_19739 = cljs.core._nth.call(null,chunk__19732_19736,i__19734_19738);goog.dom.forms.setValue(node_19739,value);
{
var G__19740 = seq__19731_19735;
var G__19741 = chunk__19732_19736;
var G__19742 = count__19733_19737;
var G__19743 = (i__19734_19738 + (1));
seq__19731_19735 = G__19740;
chunk__19732_19736 = G__19741;
count__19733_19737 = G__19742;
i__19734_19738 = G__19743;
continue;
}
} else
{var temp__4126__auto___19744 = cljs.core.seq.call(null,seq__19731_19735);if(temp__4126__auto___19744)
{var seq__19731_19745__$1 = temp__4126__auto___19744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19731_19745__$1))
{var c__4299__auto___19746 = cljs.core.chunk_first.call(null,seq__19731_19745__$1);{
var G__19747 = cljs.core.chunk_rest.call(null,seq__19731_19745__$1);
var G__19748 = c__4299__auto___19746;
var G__19749 = cljs.core.count.call(null,c__4299__auto___19746);
var G__19750 = (0);
seq__19731_19735 = G__19747;
chunk__19732_19736 = G__19748;
count__19733_19737 = G__19749;
i__19734_19738 = G__19750;
continue;
}
} else
{var node_19751 = cljs.core.first.call(null,seq__19731_19745__$1);goog.dom.forms.setValue(node_19751,value);
{
var G__19752 = cljs.core.next.call(null,seq__19731_19745__$1);
var G__19753 = null;
var G__19754 = (0);
var G__19755 = (0);
seq__19731_19735 = G__19752;
chunk__19732_19736 = G__19753;
count__19733_19737 = G__19754;
i__19734_19738 = G__19755;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_19766 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19762_19767 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19763_19768 = null;var count__19764_19769 = (0);var i__19765_19770 = (0);while(true){
if((i__19765_19770 < count__19764_19769))
{var node_19771 = cljs.core._nth.call(null,chunk__19763_19768,i__19765_19770);node_19771.innerHTML = value_19766;
{
var G__19772 = seq__19762_19767;
var G__19773 = chunk__19763_19768;
var G__19774 = count__19764_19769;
var G__19775 = (i__19765_19770 + (1));
seq__19762_19767 = G__19772;
chunk__19763_19768 = G__19773;
count__19764_19769 = G__19774;
i__19765_19770 = G__19775;
continue;
}
} else
{var temp__4126__auto___19776 = cljs.core.seq.call(null,seq__19762_19767);if(temp__4126__auto___19776)
{var seq__19762_19777__$1 = temp__4126__auto___19776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19762_19777__$1))
{var c__4299__auto___19778 = cljs.core.chunk_first.call(null,seq__19762_19777__$1);{
var G__19779 = cljs.core.chunk_rest.call(null,seq__19762_19777__$1);
var G__19780 = c__4299__auto___19778;
var G__19781 = cljs.core.count.call(null,c__4299__auto___19778);
var G__19782 = (0);
seq__19762_19767 = G__19779;
chunk__19763_19768 = G__19780;
count__19764_19769 = G__19781;
i__19765_19770 = G__19782;
continue;
}
} else
{var node_19783 = cljs.core.first.call(null,seq__19762_19777__$1);node_19783.innerHTML = value_19766;
{
var G__19784 = cljs.core.next.call(null,seq__19762_19777__$1);
var G__19785 = null;
var G__19786 = (0);
var G__19787 = (0);
seq__19762_19767 = G__19784;
chunk__19763_19768 = G__19785;
count__19764_19769 = G__19786;
i__19765_19770 = G__19787;
continue;
}
}
} else
{}
}
break;
}
}catch (e19761){if((e19761 instanceof Error))
{var e_19788 = e19761;domina.replace_children_BANG_.call(null,content,value_19766);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19761;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19795_19799 = cljs.core.seq.call(null,children);var chunk__19796_19800 = null;var count__19797_19801 = (0);var i__19798_19802 = (0);while(true){
if((i__19798_19802 < count__19797_19801))
{var child_19803 = cljs.core._nth.call(null,chunk__19796_19800,i__19798_19802);frag.appendChild(child_19803);
{
var G__19804 = seq__19795_19799;
var G__19805 = chunk__19796_19800;
var G__19806 = count__19797_19801;
var G__19807 = (i__19798_19802 + (1));
seq__19795_19799 = G__19804;
chunk__19796_19800 = G__19805;
count__19797_19801 = G__19806;
i__19798_19802 = G__19807;
continue;
}
} else
{var temp__4126__auto___19808 = cljs.core.seq.call(null,seq__19795_19799);if(temp__4126__auto___19808)
{var seq__19795_19809__$1 = temp__4126__auto___19808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19795_19809__$1))
{var c__4299__auto___19810 = cljs.core.chunk_first.call(null,seq__19795_19809__$1);{
var G__19811 = cljs.core.chunk_rest.call(null,seq__19795_19809__$1);
var G__19812 = c__4299__auto___19810;
var G__19813 = cljs.core.count.call(null,c__4299__auto___19810);
var G__19814 = (0);
seq__19795_19799 = G__19811;
chunk__19796_19800 = G__19812;
count__19797_19801 = G__19813;
i__19798_19802 = G__19814;
continue;
}
} else
{var child_19815 = cljs.core.first.call(null,seq__19795_19809__$1);frag.appendChild(child_19815);
{
var G__19816 = cljs.core.next.call(null,seq__19795_19809__$1);
var G__19817 = null;
var G__19818 = (0);
var G__19819 = (0);
seq__19795_19799 = G__19816;
chunk__19796_19800 = G__19817;
count__19797_19801 = G__19818;
i__19798_19802 = G__19819;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19789_SHARP_,p2__19790_SHARP_){return f.call(null,p1__19789_SHARP_,p2__19790_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19821 = list_thing;if(G__19821)
{var bit__4193__auto__ = (G__19821.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19821.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19821.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19821);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19821);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19822 = content;if(G__19822)
{var bit__4193__auto__ = (G__19822.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19822.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19822.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19822);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19823 = content;if(G__19823)
{var bit__4193__auto__ = (G__19823.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19823.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19823.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19823);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19823);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
