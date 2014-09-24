// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_19382 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19383 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19384 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19384,opt_wrapper_19382,table_section_wrapper_19383,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19382,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19383,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19383,cell_wrapper_19384,table_section_wrapper_19383,table_section_wrapper_19383]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19389 = cljs.core.seq.call(null,tbody);var chunk__19390 = null;var count__19391 = (0);var i__19392 = (0);while(true){
if((i__19392 < count__19391))
{var child = cljs.core._nth.call(null,chunk__19390,i__19392);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19393 = seq__19389;
var G__19394 = chunk__19390;
var G__19395 = count__19391;
var G__19396 = (i__19392 + (1));
seq__19389 = G__19393;
chunk__19390 = G__19394;
count__19391 = G__19395;
i__19392 = G__19396;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19389);if(temp__4126__auto__)
{var seq__19389__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19389__$1);{
var G__19397 = cljs.core.chunk_rest.call(null,seq__19389__$1);
var G__19398 = c__4314__auto__;
var G__19399 = cljs.core.count.call(null,c__4314__auto__);
var G__19400 = (0);
seq__19389 = G__19397;
chunk__19390 = G__19398;
count__19391 = G__19399;
i__19392 = G__19400;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19389__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19401 = cljs.core.next.call(null,seq__19389__$1);
var G__19402 = null;
var G__19403 = (0);
var G__19404 = (0);
seq__19389 = G__19401;
chunk__19390 = G__19402;
count__19391 = G__19403;
i__19392 = G__19404;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19406 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19406,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19406,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19406,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19407 = wrapper.lastChild;
var G__19408 = (level - (1));
wrapper = G__19407;
level = G__19408;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj19410 = {};return obj19410;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19411){
var mesg = cljs.core.seq(arglist__19411);
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
log.cljs$lang$applyTo = (function (arglist__19412){
var mesg = cljs.core.seq(arglist__19412);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19413){
var contents = cljs.core.seq(arglist__19413);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19414_SHARP_){return p1__19414_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19415_SHARP_,p2__19416_SHARP_){return goog.dom.insertChildAt(p1__19415_SHARP_,p2__19416_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19418_SHARP_,p2__19417_SHARP_){return goog.dom.insertSiblingBefore(p2__19417_SHARP_,p1__19418_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19420_SHARP_,p2__19419_SHARP_){return goog.dom.insertSiblingAfter(p2__19419_SHARP_,p1__19420_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19422_SHARP_,p2__19421_SHARP_){return goog.dom.replaceNode(p2__19421_SHARP_,p1__19422_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19427_19431 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19428_19432 = null;var count__19429_19433 = (0);var i__19430_19434 = (0);while(true){
if((i__19430_19434 < count__19429_19433))
{var n_19435 = cljs.core._nth.call(null,chunk__19428_19432,i__19430_19434);goog.style.setStyle(n_19435,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19436 = seq__19427_19431;
var G__19437 = chunk__19428_19432;
var G__19438 = count__19429_19433;
var G__19439 = (i__19430_19434 + (1));
seq__19427_19431 = G__19436;
chunk__19428_19432 = G__19437;
count__19429_19433 = G__19438;
i__19430_19434 = G__19439;
continue;
}
} else
{var temp__4126__auto___19440 = cljs.core.seq.call(null,seq__19427_19431);if(temp__4126__auto___19440)
{var seq__19427_19441__$1 = temp__4126__auto___19440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19427_19441__$1))
{var c__4314__auto___19442 = cljs.core.chunk_first.call(null,seq__19427_19441__$1);{
var G__19443 = cljs.core.chunk_rest.call(null,seq__19427_19441__$1);
var G__19444 = c__4314__auto___19442;
var G__19445 = cljs.core.count.call(null,c__4314__auto___19442);
var G__19446 = (0);
seq__19427_19431 = G__19443;
chunk__19428_19432 = G__19444;
count__19429_19433 = G__19445;
i__19430_19434 = G__19446;
continue;
}
} else
{var n_19447 = cljs.core.first.call(null,seq__19427_19441__$1);goog.style.setStyle(n_19447,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19448 = cljs.core.next.call(null,seq__19427_19441__$1);
var G__19449 = null;
var G__19450 = (0);
var G__19451 = (0);
seq__19427_19431 = G__19448;
chunk__19428_19432 = G__19449;
count__19429_19433 = G__19450;
i__19430_19434 = G__19451;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19452){
var content = cljs.core.first(arglist__19452);
arglist__19452 = cljs.core.next(arglist__19452);
var name = cljs.core.first(arglist__19452);
var value = cljs.core.rest(arglist__19452);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19457_19461 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19458_19462 = null;var count__19459_19463 = (0);var i__19460_19464 = (0);while(true){
if((i__19460_19464 < count__19459_19463))
{var n_19465 = cljs.core._nth.call(null,chunk__19458_19462,i__19460_19464);n_19465.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19466 = seq__19457_19461;
var G__19467 = chunk__19458_19462;
var G__19468 = count__19459_19463;
var G__19469 = (i__19460_19464 + (1));
seq__19457_19461 = G__19466;
chunk__19458_19462 = G__19467;
count__19459_19463 = G__19468;
i__19460_19464 = G__19469;
continue;
}
} else
{var temp__4126__auto___19470 = cljs.core.seq.call(null,seq__19457_19461);if(temp__4126__auto___19470)
{var seq__19457_19471__$1 = temp__4126__auto___19470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19457_19471__$1))
{var c__4314__auto___19472 = cljs.core.chunk_first.call(null,seq__19457_19471__$1);{
var G__19473 = cljs.core.chunk_rest.call(null,seq__19457_19471__$1);
var G__19474 = c__4314__auto___19472;
var G__19475 = cljs.core.count.call(null,c__4314__auto___19472);
var G__19476 = (0);
seq__19457_19461 = G__19473;
chunk__19458_19462 = G__19474;
count__19459_19463 = G__19475;
i__19460_19464 = G__19476;
continue;
}
} else
{var n_19477 = cljs.core.first.call(null,seq__19457_19471__$1);n_19477.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19478 = cljs.core.next.call(null,seq__19457_19471__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__19457_19461 = G__19478;
chunk__19458_19462 = G__19479;
count__19459_19463 = G__19480;
i__19460_19464 = G__19481;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19482){
var content = cljs.core.first(arglist__19482);
arglist__19482 = cljs.core.next(arglist__19482);
var name = cljs.core.first(arglist__19482);
var value = cljs.core.rest(arglist__19482);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19487_19491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19488_19492 = null;var count__19489_19493 = (0);var i__19490_19494 = (0);while(true){
if((i__19490_19494 < count__19489_19493))
{var n_19495 = cljs.core._nth.call(null,chunk__19488_19492,i__19490_19494);n_19495.removeAttribute(cljs.core.name.call(null,name));
{
var G__19496 = seq__19487_19491;
var G__19497 = chunk__19488_19492;
var G__19498 = count__19489_19493;
var G__19499 = (i__19490_19494 + (1));
seq__19487_19491 = G__19496;
chunk__19488_19492 = G__19497;
count__19489_19493 = G__19498;
i__19490_19494 = G__19499;
continue;
}
} else
{var temp__4126__auto___19500 = cljs.core.seq.call(null,seq__19487_19491);if(temp__4126__auto___19500)
{var seq__19487_19501__$1 = temp__4126__auto___19500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19487_19501__$1))
{var c__4314__auto___19502 = cljs.core.chunk_first.call(null,seq__19487_19501__$1);{
var G__19503 = cljs.core.chunk_rest.call(null,seq__19487_19501__$1);
var G__19504 = c__4314__auto___19502;
var G__19505 = cljs.core.count.call(null,c__4314__auto___19502);
var G__19506 = (0);
seq__19487_19491 = G__19503;
chunk__19488_19492 = G__19504;
count__19489_19493 = G__19505;
i__19490_19494 = G__19506;
continue;
}
} else
{var n_19507 = cljs.core.first.call(null,seq__19487_19501__$1);n_19507.removeAttribute(cljs.core.name.call(null,name));
{
var G__19508 = cljs.core.next.call(null,seq__19487_19501__$1);
var G__19509 = null;
var G__19510 = (0);
var G__19511 = (0);
seq__19487_19491 = G__19508;
chunk__19488_19492 = G__19509;
count__19489_19493 = G__19510;
i__19490_19494 = G__19511;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19513 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19513,(0),null);var v = cljs.core.nth.call(null,vec__19513,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19514_SHARP_){var attr = attrs__$1.item(p1__19514_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19521_19527 = cljs.core.seq.call(null,styles);var chunk__19522_19528 = null;var count__19523_19529 = (0);var i__19524_19530 = (0);while(true){
if((i__19524_19530 < count__19523_19529))
{var vec__19525_19531 = cljs.core._nth.call(null,chunk__19522_19528,i__19524_19530);var name_19532 = cljs.core.nth.call(null,vec__19525_19531,(0),null);var value_19533 = cljs.core.nth.call(null,vec__19525_19531,(1),null);domina.set_style_BANG_.call(null,content,name_19532,value_19533);
{
var G__19534 = seq__19521_19527;
var G__19535 = chunk__19522_19528;
var G__19536 = count__19523_19529;
var G__19537 = (i__19524_19530 + (1));
seq__19521_19527 = G__19534;
chunk__19522_19528 = G__19535;
count__19523_19529 = G__19536;
i__19524_19530 = G__19537;
continue;
}
} else
{var temp__4126__auto___19538 = cljs.core.seq.call(null,seq__19521_19527);if(temp__4126__auto___19538)
{var seq__19521_19539__$1 = temp__4126__auto___19538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19521_19539__$1))
{var c__4314__auto___19540 = cljs.core.chunk_first.call(null,seq__19521_19539__$1);{
var G__19541 = cljs.core.chunk_rest.call(null,seq__19521_19539__$1);
var G__19542 = c__4314__auto___19540;
var G__19543 = cljs.core.count.call(null,c__4314__auto___19540);
var G__19544 = (0);
seq__19521_19527 = G__19541;
chunk__19522_19528 = G__19542;
count__19523_19529 = G__19543;
i__19524_19530 = G__19544;
continue;
}
} else
{var vec__19526_19545 = cljs.core.first.call(null,seq__19521_19539__$1);var name_19546 = cljs.core.nth.call(null,vec__19526_19545,(0),null);var value_19547 = cljs.core.nth.call(null,vec__19526_19545,(1),null);domina.set_style_BANG_.call(null,content,name_19546,value_19547);
{
var G__19548 = cljs.core.next.call(null,seq__19521_19539__$1);
var G__19549 = null;
var G__19550 = (0);
var G__19551 = (0);
seq__19521_19527 = G__19548;
chunk__19522_19528 = G__19549;
count__19523_19529 = G__19550;
i__19524_19530 = G__19551;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19558_19564 = cljs.core.seq.call(null,attrs);var chunk__19559_19565 = null;var count__19560_19566 = (0);var i__19561_19567 = (0);while(true){
if((i__19561_19567 < count__19560_19566))
{var vec__19562_19568 = cljs.core._nth.call(null,chunk__19559_19565,i__19561_19567);var name_19569 = cljs.core.nth.call(null,vec__19562_19568,(0),null);var value_19570 = cljs.core.nth.call(null,vec__19562_19568,(1),null);domina.set_attr_BANG_.call(null,content,name_19569,value_19570);
{
var G__19571 = seq__19558_19564;
var G__19572 = chunk__19559_19565;
var G__19573 = count__19560_19566;
var G__19574 = (i__19561_19567 + (1));
seq__19558_19564 = G__19571;
chunk__19559_19565 = G__19572;
count__19560_19566 = G__19573;
i__19561_19567 = G__19574;
continue;
}
} else
{var temp__4126__auto___19575 = cljs.core.seq.call(null,seq__19558_19564);if(temp__4126__auto___19575)
{var seq__19558_19576__$1 = temp__4126__auto___19575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19558_19576__$1))
{var c__4314__auto___19577 = cljs.core.chunk_first.call(null,seq__19558_19576__$1);{
var G__19578 = cljs.core.chunk_rest.call(null,seq__19558_19576__$1);
var G__19579 = c__4314__auto___19577;
var G__19580 = cljs.core.count.call(null,c__4314__auto___19577);
var G__19581 = (0);
seq__19558_19564 = G__19578;
chunk__19559_19565 = G__19579;
count__19560_19566 = G__19580;
i__19561_19567 = G__19581;
continue;
}
} else
{var vec__19563_19582 = cljs.core.first.call(null,seq__19558_19576__$1);var name_19583 = cljs.core.nth.call(null,vec__19563_19582,(0),null);var value_19584 = cljs.core.nth.call(null,vec__19563_19582,(1),null);domina.set_attr_BANG_.call(null,content,name_19583,value_19584);
{
var G__19585 = cljs.core.next.call(null,seq__19558_19576__$1);
var G__19586 = null;
var G__19587 = (0);
var G__19588 = (0);
seq__19558_19564 = G__19585;
chunk__19559_19565 = G__19586;
count__19560_19566 = G__19587;
i__19561_19567 = G__19588;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19593_19597 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19594_19598 = null;var count__19595_19599 = (0);var i__19596_19600 = (0);while(true){
if((i__19596_19600 < count__19595_19599))
{var node_19601 = cljs.core._nth.call(null,chunk__19594_19598,i__19596_19600);goog.dom.classes.add(node_19601,class$);
{
var G__19602 = seq__19593_19597;
var G__19603 = chunk__19594_19598;
var G__19604 = count__19595_19599;
var G__19605 = (i__19596_19600 + (1));
seq__19593_19597 = G__19602;
chunk__19594_19598 = G__19603;
count__19595_19599 = G__19604;
i__19596_19600 = G__19605;
continue;
}
} else
{var temp__4126__auto___19606 = cljs.core.seq.call(null,seq__19593_19597);if(temp__4126__auto___19606)
{var seq__19593_19607__$1 = temp__4126__auto___19606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19593_19607__$1))
{var c__4314__auto___19608 = cljs.core.chunk_first.call(null,seq__19593_19607__$1);{
var G__19609 = cljs.core.chunk_rest.call(null,seq__19593_19607__$1);
var G__19610 = c__4314__auto___19608;
var G__19611 = cljs.core.count.call(null,c__4314__auto___19608);
var G__19612 = (0);
seq__19593_19597 = G__19609;
chunk__19594_19598 = G__19610;
count__19595_19599 = G__19611;
i__19596_19600 = G__19612;
continue;
}
} else
{var node_19613 = cljs.core.first.call(null,seq__19593_19607__$1);goog.dom.classes.add(node_19613,class$);
{
var G__19614 = cljs.core.next.call(null,seq__19593_19607__$1);
var G__19615 = null;
var G__19616 = (0);
var G__19617 = (0);
seq__19593_19597 = G__19614;
chunk__19594_19598 = G__19615;
count__19595_19599 = G__19616;
i__19596_19600 = G__19617;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19622_19626 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19623_19627 = null;var count__19624_19628 = (0);var i__19625_19629 = (0);while(true){
if((i__19625_19629 < count__19624_19628))
{var node_19630 = cljs.core._nth.call(null,chunk__19623_19627,i__19625_19629);goog.dom.classes.remove(node_19630,class$);
{
var G__19631 = seq__19622_19626;
var G__19632 = chunk__19623_19627;
var G__19633 = count__19624_19628;
var G__19634 = (i__19625_19629 + (1));
seq__19622_19626 = G__19631;
chunk__19623_19627 = G__19632;
count__19624_19628 = G__19633;
i__19625_19629 = G__19634;
continue;
}
} else
{var temp__4126__auto___19635 = cljs.core.seq.call(null,seq__19622_19626);if(temp__4126__auto___19635)
{var seq__19622_19636__$1 = temp__4126__auto___19635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19622_19636__$1))
{var c__4314__auto___19637 = cljs.core.chunk_first.call(null,seq__19622_19636__$1);{
var G__19638 = cljs.core.chunk_rest.call(null,seq__19622_19636__$1);
var G__19639 = c__4314__auto___19637;
var G__19640 = cljs.core.count.call(null,c__4314__auto___19637);
var G__19641 = (0);
seq__19622_19626 = G__19638;
chunk__19623_19627 = G__19639;
count__19624_19628 = G__19640;
i__19625_19629 = G__19641;
continue;
}
} else
{var node_19642 = cljs.core.first.call(null,seq__19622_19636__$1);goog.dom.classes.remove(node_19642,class$);
{
var G__19643 = cljs.core.next.call(null,seq__19622_19636__$1);
var G__19644 = null;
var G__19645 = (0);
var G__19646 = (0);
seq__19622_19626 = G__19643;
chunk__19623_19627 = G__19644;
count__19624_19628 = G__19645;
i__19625_19629 = G__19646;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19651_19655 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19652_19656 = null;var count__19653_19657 = (0);var i__19654_19658 = (0);while(true){
if((i__19654_19658 < count__19653_19657))
{var node_19659 = cljs.core._nth.call(null,chunk__19652_19656,i__19654_19658);goog.dom.classes.toggle(node_19659,class$);
{
var G__19660 = seq__19651_19655;
var G__19661 = chunk__19652_19656;
var G__19662 = count__19653_19657;
var G__19663 = (i__19654_19658 + (1));
seq__19651_19655 = G__19660;
chunk__19652_19656 = G__19661;
count__19653_19657 = G__19662;
i__19654_19658 = G__19663;
continue;
}
} else
{var temp__4126__auto___19664 = cljs.core.seq.call(null,seq__19651_19655);if(temp__4126__auto___19664)
{var seq__19651_19665__$1 = temp__4126__auto___19664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19651_19665__$1))
{var c__4314__auto___19666 = cljs.core.chunk_first.call(null,seq__19651_19665__$1);{
var G__19667 = cljs.core.chunk_rest.call(null,seq__19651_19665__$1);
var G__19668 = c__4314__auto___19666;
var G__19669 = cljs.core.count.call(null,c__4314__auto___19666);
var G__19670 = (0);
seq__19651_19655 = G__19667;
chunk__19652_19656 = G__19668;
count__19653_19657 = G__19669;
i__19654_19658 = G__19670;
continue;
}
} else
{var node_19671 = cljs.core.first.call(null,seq__19651_19665__$1);goog.dom.classes.toggle(node_19671,class$);
{
var G__19672 = cljs.core.next.call(null,seq__19651_19665__$1);
var G__19673 = null;
var G__19674 = (0);
var G__19675 = (0);
seq__19651_19655 = G__19672;
chunk__19652_19656 = G__19673;
count__19653_19657 = G__19674;
i__19654_19658 = G__19675;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19684__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19680_19685 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19681_19686 = null;var count__19682_19687 = (0);var i__19683_19688 = (0);while(true){
if((i__19683_19688 < count__19682_19687))
{var node_19689 = cljs.core._nth.call(null,chunk__19681_19686,i__19683_19688);goog.dom.classes.set(node_19689,classes_19684__$1);
{
var G__19690 = seq__19680_19685;
var G__19691 = chunk__19681_19686;
var G__19692 = count__19682_19687;
var G__19693 = (i__19683_19688 + (1));
seq__19680_19685 = G__19690;
chunk__19681_19686 = G__19691;
count__19682_19687 = G__19692;
i__19683_19688 = G__19693;
continue;
}
} else
{var temp__4126__auto___19694 = cljs.core.seq.call(null,seq__19680_19685);if(temp__4126__auto___19694)
{var seq__19680_19695__$1 = temp__4126__auto___19694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19680_19695__$1))
{var c__4314__auto___19696 = cljs.core.chunk_first.call(null,seq__19680_19695__$1);{
var G__19697 = cljs.core.chunk_rest.call(null,seq__19680_19695__$1);
var G__19698 = c__4314__auto___19696;
var G__19699 = cljs.core.count.call(null,c__4314__auto___19696);
var G__19700 = (0);
seq__19680_19685 = G__19697;
chunk__19681_19686 = G__19698;
count__19682_19687 = G__19699;
i__19683_19688 = G__19700;
continue;
}
} else
{var node_19701 = cljs.core.first.call(null,seq__19680_19695__$1);goog.dom.classes.set(node_19701,classes_19684__$1);
{
var G__19702 = cljs.core.next.call(null,seq__19680_19695__$1);
var G__19703 = null;
var G__19704 = (0);
var G__19705 = (0);
seq__19680_19685 = G__19702;
chunk__19681_19686 = G__19703;
count__19682_19687 = G__19704;
i__19683_19688 = G__19705;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19710_19714 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19711_19715 = null;var count__19712_19716 = (0);var i__19713_19717 = (0);while(true){
if((i__19713_19717 < count__19712_19716))
{var node_19718 = cljs.core._nth.call(null,chunk__19711_19715,i__19713_19717);goog.dom.setTextContent(node_19718,value);
{
var G__19719 = seq__19710_19714;
var G__19720 = chunk__19711_19715;
var G__19721 = count__19712_19716;
var G__19722 = (i__19713_19717 + (1));
seq__19710_19714 = G__19719;
chunk__19711_19715 = G__19720;
count__19712_19716 = G__19721;
i__19713_19717 = G__19722;
continue;
}
} else
{var temp__4126__auto___19723 = cljs.core.seq.call(null,seq__19710_19714);if(temp__4126__auto___19723)
{var seq__19710_19724__$1 = temp__4126__auto___19723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19710_19724__$1))
{var c__4314__auto___19725 = cljs.core.chunk_first.call(null,seq__19710_19724__$1);{
var G__19726 = cljs.core.chunk_rest.call(null,seq__19710_19724__$1);
var G__19727 = c__4314__auto___19725;
var G__19728 = cljs.core.count.call(null,c__4314__auto___19725);
var G__19729 = (0);
seq__19710_19714 = G__19726;
chunk__19711_19715 = G__19727;
count__19712_19716 = G__19728;
i__19713_19717 = G__19729;
continue;
}
} else
{var node_19730 = cljs.core.first.call(null,seq__19710_19724__$1);goog.dom.setTextContent(node_19730,value);
{
var G__19731 = cljs.core.next.call(null,seq__19710_19724__$1);
var G__19732 = null;
var G__19733 = (0);
var G__19734 = (0);
seq__19710_19714 = G__19731;
chunk__19711_19715 = G__19732;
count__19712_19716 = G__19733;
i__19713_19717 = G__19734;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19739_19743 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19740_19744 = null;var count__19741_19745 = (0);var i__19742_19746 = (0);while(true){
if((i__19742_19746 < count__19741_19745))
{var node_19747 = cljs.core._nth.call(null,chunk__19740_19744,i__19742_19746);goog.dom.forms.setValue(node_19747,value);
{
var G__19748 = seq__19739_19743;
var G__19749 = chunk__19740_19744;
var G__19750 = count__19741_19745;
var G__19751 = (i__19742_19746 + (1));
seq__19739_19743 = G__19748;
chunk__19740_19744 = G__19749;
count__19741_19745 = G__19750;
i__19742_19746 = G__19751;
continue;
}
} else
{var temp__4126__auto___19752 = cljs.core.seq.call(null,seq__19739_19743);if(temp__4126__auto___19752)
{var seq__19739_19753__$1 = temp__4126__auto___19752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19739_19753__$1))
{var c__4314__auto___19754 = cljs.core.chunk_first.call(null,seq__19739_19753__$1);{
var G__19755 = cljs.core.chunk_rest.call(null,seq__19739_19753__$1);
var G__19756 = c__4314__auto___19754;
var G__19757 = cljs.core.count.call(null,c__4314__auto___19754);
var G__19758 = (0);
seq__19739_19743 = G__19755;
chunk__19740_19744 = G__19756;
count__19741_19745 = G__19757;
i__19742_19746 = G__19758;
continue;
}
} else
{var node_19759 = cljs.core.first.call(null,seq__19739_19753__$1);goog.dom.forms.setValue(node_19759,value);
{
var G__19760 = cljs.core.next.call(null,seq__19739_19753__$1);
var G__19761 = null;
var G__19762 = (0);
var G__19763 = (0);
seq__19739_19743 = G__19760;
chunk__19740_19744 = G__19761;
count__19741_19745 = G__19762;
i__19742_19746 = G__19763;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_19774 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19770_19775 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19771_19776 = null;var count__19772_19777 = (0);var i__19773_19778 = (0);while(true){
if((i__19773_19778 < count__19772_19777))
{var node_19779 = cljs.core._nth.call(null,chunk__19771_19776,i__19773_19778);node_19779.innerHTML = value_19774;
{
var G__19780 = seq__19770_19775;
var G__19781 = chunk__19771_19776;
var G__19782 = count__19772_19777;
var G__19783 = (i__19773_19778 + (1));
seq__19770_19775 = G__19780;
chunk__19771_19776 = G__19781;
count__19772_19777 = G__19782;
i__19773_19778 = G__19783;
continue;
}
} else
{var temp__4126__auto___19784 = cljs.core.seq.call(null,seq__19770_19775);if(temp__4126__auto___19784)
{var seq__19770_19785__$1 = temp__4126__auto___19784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19770_19785__$1))
{var c__4314__auto___19786 = cljs.core.chunk_first.call(null,seq__19770_19785__$1);{
var G__19787 = cljs.core.chunk_rest.call(null,seq__19770_19785__$1);
var G__19788 = c__4314__auto___19786;
var G__19789 = cljs.core.count.call(null,c__4314__auto___19786);
var G__19790 = (0);
seq__19770_19775 = G__19787;
chunk__19771_19776 = G__19788;
count__19772_19777 = G__19789;
i__19773_19778 = G__19790;
continue;
}
} else
{var node_19791 = cljs.core.first.call(null,seq__19770_19785__$1);node_19791.innerHTML = value_19774;
{
var G__19792 = cljs.core.next.call(null,seq__19770_19785__$1);
var G__19793 = null;
var G__19794 = (0);
var G__19795 = (0);
seq__19770_19775 = G__19792;
chunk__19771_19776 = G__19793;
count__19772_19777 = G__19794;
i__19773_19778 = G__19795;
continue;
}
}
} else
{}
}
break;
}
}catch (e19769){if((e19769 instanceof Error))
{var e_19796 = e19769;domina.replace_children_BANG_.call(null,content,value_19774);
} else
{throw e19769;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19803_19807 = cljs.core.seq.call(null,children);var chunk__19804_19808 = null;var count__19805_19809 = (0);var i__19806_19810 = (0);while(true){
if((i__19806_19810 < count__19805_19809))
{var child_19811 = cljs.core._nth.call(null,chunk__19804_19808,i__19806_19810);frag.appendChild(child_19811);
{
var G__19812 = seq__19803_19807;
var G__19813 = chunk__19804_19808;
var G__19814 = count__19805_19809;
var G__19815 = (i__19806_19810 + (1));
seq__19803_19807 = G__19812;
chunk__19804_19808 = G__19813;
count__19805_19809 = G__19814;
i__19806_19810 = G__19815;
continue;
}
} else
{var temp__4126__auto___19816 = cljs.core.seq.call(null,seq__19803_19807);if(temp__4126__auto___19816)
{var seq__19803_19817__$1 = temp__4126__auto___19816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19803_19817__$1))
{var c__4314__auto___19818 = cljs.core.chunk_first.call(null,seq__19803_19817__$1);{
var G__19819 = cljs.core.chunk_rest.call(null,seq__19803_19817__$1);
var G__19820 = c__4314__auto___19818;
var G__19821 = cljs.core.count.call(null,c__4314__auto___19818);
var G__19822 = (0);
seq__19803_19807 = G__19819;
chunk__19804_19808 = G__19820;
count__19805_19809 = G__19821;
i__19806_19810 = G__19822;
continue;
}
} else
{var child_19823 = cljs.core.first.call(null,seq__19803_19817__$1);frag.appendChild(child_19823);
{
var G__19824 = cljs.core.next.call(null,seq__19803_19817__$1);
var G__19825 = null;
var G__19826 = (0);
var G__19827 = (0);
seq__19803_19807 = G__19824;
chunk__19804_19808 = G__19825;
count__19805_19809 = G__19826;
i__19806_19810 = G__19827;
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
return (function (p1__19797_SHARP_,p2__19798_SHARP_){return f.call(null,p1__19797_SHARP_,p2__19798_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__19829 = list_thing;if(G__19829)
{var bit__4208__auto__ = (G__19829.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19829.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19829.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19829);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19830 = content;if(G__19830)
{var bit__4208__auto__ = (G__19830.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19830.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19830.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19830);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19830);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19831 = content;if(G__19831)
{var bit__4208__auto__ = (G__19831.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19831.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19831.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19831);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19831);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
