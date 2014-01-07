// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_14416 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14417 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14418 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14417,table_section_wrapper_14417,opt_wrapper_14416,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14418,table_section_wrapper_14417,cell_wrapper_14418,opt_wrapper_14416,table_section_wrapper_14417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14417]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14423 = cljs.core.seq.call(null,tbody);var chunk__14424 = null;var count__14425 = 0;var i__14426 = 0;while(true){
if((i__14426 < count__14425))
{var child = cljs.core._nth.call(null,chunk__14424,i__14426);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14427 = seq__14423;
var G__14428 = chunk__14424;
var G__14429 = count__14425;
var G__14430 = (i__14426 + 1);
seq__14423 = G__14427;
chunk__14424 = G__14428;
count__14425 = G__14429;
i__14426 = G__14430;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14423);if(temp__4092__auto__)
{var seq__14423__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14423__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14423__$1);{
var G__14431 = cljs.core.chunk_rest.call(null,seq__14423__$1);
var G__14432 = c__4148__auto__;
var G__14433 = cljs.core.count.call(null,c__4148__auto__);
var G__14434 = 0;
seq__14423 = G__14431;
chunk__14424 = G__14432;
count__14425 = G__14433;
i__14426 = G__14434;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14423__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14435 = cljs.core.next.call(null,seq__14423__$1);
var G__14436 = null;
var G__14437 = 0;
var G__14438 = 0;
seq__14423 = G__14435;
chunk__14424 = G__14436;
count__14425 = G__14437;
i__14426 = G__14438;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14440 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14440,0,null);var start_wrap = cljs.core.nth.call(null,vec__14440,1,null);var end_wrap = cljs.core.nth.call(null,vec__14440,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14441 = wrapper.lastChild;
var G__14442 = (level - 1);
wrapper = G__14441;
level = G__14442;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj14444 = {};return obj14444;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__14445){
var mesg = cljs.core.seq(arglist__14445);
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
log.cljs$lang$applyTo = (function (arglist__14446){
var mesg = cljs.core.seq(arglist__14446);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14447){
var contents = cljs.core.seq(arglist__14447);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14448_SHARP_){return p1__14448_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14449_SHARP_,p2__14450_SHARP_){return goog.dom.insertChildAt(p1__14449_SHARP_,p2__14450_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14452_SHARP_,p2__14451_SHARP_){return goog.dom.insertSiblingBefore(p2__14451_SHARP_,p1__14452_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14454_SHARP_,p2__14453_SHARP_){return goog.dom.insertSiblingAfter(p2__14453_SHARP_,p1__14454_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14456_SHARP_,p2__14455_SHARP_){return goog.dom.replaceNode(p2__14455_SHARP_,p1__14456_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__14461_14465 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14462_14466 = null;var count__14463_14467 = 0;var i__14464_14468 = 0;while(true){
if((i__14464_14468 < count__14463_14467))
{var n_14469 = cljs.core._nth.call(null,chunk__14462_14466,i__14464_14468);goog.style.setStyle(n_14469,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14470 = seq__14461_14465;
var G__14471 = chunk__14462_14466;
var G__14472 = count__14463_14467;
var G__14473 = (i__14464_14468 + 1);
seq__14461_14465 = G__14470;
chunk__14462_14466 = G__14471;
count__14463_14467 = G__14472;
i__14464_14468 = G__14473;
continue;
}
} else
{var temp__4092__auto___14474 = cljs.core.seq.call(null,seq__14461_14465);if(temp__4092__auto___14474)
{var seq__14461_14475__$1 = temp__4092__auto___14474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14461_14475__$1))
{var c__4148__auto___14476 = cljs.core.chunk_first.call(null,seq__14461_14475__$1);{
var G__14477 = cljs.core.chunk_rest.call(null,seq__14461_14475__$1);
var G__14478 = c__4148__auto___14476;
var G__14479 = cljs.core.count.call(null,c__4148__auto___14476);
var G__14480 = 0;
seq__14461_14465 = G__14477;
chunk__14462_14466 = G__14478;
count__14463_14467 = G__14479;
i__14464_14468 = G__14480;
continue;
}
} else
{var n_14481 = cljs.core.first.call(null,seq__14461_14475__$1);goog.style.setStyle(n_14481,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14482 = cljs.core.next.call(null,seq__14461_14475__$1);
var G__14483 = null;
var G__14484 = 0;
var G__14485 = 0;
seq__14461_14465 = G__14482;
chunk__14462_14466 = G__14483;
count__14463_14467 = G__14484;
i__14464_14468 = G__14485;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14486){
var content = cljs.core.first(arglist__14486);
arglist__14486 = cljs.core.next(arglist__14486);
var name = cljs.core.first(arglist__14486);
var value = cljs.core.rest(arglist__14486);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__14491_14495 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14492_14496 = null;var count__14493_14497 = 0;var i__14494_14498 = 0;while(true){
if((i__14494_14498 < count__14493_14497))
{var n_14499 = cljs.core._nth.call(null,chunk__14492_14496,i__14494_14498);n_14499.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14500 = seq__14491_14495;
var G__14501 = chunk__14492_14496;
var G__14502 = count__14493_14497;
var G__14503 = (i__14494_14498 + 1);
seq__14491_14495 = G__14500;
chunk__14492_14496 = G__14501;
count__14493_14497 = G__14502;
i__14494_14498 = G__14503;
continue;
}
} else
{var temp__4092__auto___14504 = cljs.core.seq.call(null,seq__14491_14495);if(temp__4092__auto___14504)
{var seq__14491_14505__$1 = temp__4092__auto___14504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14491_14505__$1))
{var c__4148__auto___14506 = cljs.core.chunk_first.call(null,seq__14491_14505__$1);{
var G__14507 = cljs.core.chunk_rest.call(null,seq__14491_14505__$1);
var G__14508 = c__4148__auto___14506;
var G__14509 = cljs.core.count.call(null,c__4148__auto___14506);
var G__14510 = 0;
seq__14491_14495 = G__14507;
chunk__14492_14496 = G__14508;
count__14493_14497 = G__14509;
i__14494_14498 = G__14510;
continue;
}
} else
{var n_14511 = cljs.core.first.call(null,seq__14491_14505__$1);n_14511.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14512 = cljs.core.next.call(null,seq__14491_14505__$1);
var G__14513 = null;
var G__14514 = 0;
var G__14515 = 0;
seq__14491_14495 = G__14512;
chunk__14492_14496 = G__14513;
count__14493_14497 = G__14514;
i__14494_14498 = G__14515;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14516){
var content = cljs.core.first(arglist__14516);
arglist__14516 = cljs.core.next(arglist__14516);
var name = cljs.core.first(arglist__14516);
var value = cljs.core.rest(arglist__14516);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14521_14525 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14522_14526 = null;var count__14523_14527 = 0;var i__14524_14528 = 0;while(true){
if((i__14524_14528 < count__14523_14527))
{var n_14529 = cljs.core._nth.call(null,chunk__14522_14526,i__14524_14528);n_14529.removeAttribute(cljs.core.name.call(null,name));
{
var G__14530 = seq__14521_14525;
var G__14531 = chunk__14522_14526;
var G__14532 = count__14523_14527;
var G__14533 = (i__14524_14528 + 1);
seq__14521_14525 = G__14530;
chunk__14522_14526 = G__14531;
count__14523_14527 = G__14532;
i__14524_14528 = G__14533;
continue;
}
} else
{var temp__4092__auto___14534 = cljs.core.seq.call(null,seq__14521_14525);if(temp__4092__auto___14534)
{var seq__14521_14535__$1 = temp__4092__auto___14534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14521_14535__$1))
{var c__4148__auto___14536 = cljs.core.chunk_first.call(null,seq__14521_14535__$1);{
var G__14537 = cljs.core.chunk_rest.call(null,seq__14521_14535__$1);
var G__14538 = c__4148__auto___14536;
var G__14539 = cljs.core.count.call(null,c__4148__auto___14536);
var G__14540 = 0;
seq__14521_14525 = G__14537;
chunk__14522_14526 = G__14538;
count__14523_14527 = G__14539;
i__14524_14528 = G__14540;
continue;
}
} else
{var n_14541 = cljs.core.first.call(null,seq__14521_14535__$1);n_14541.removeAttribute(cljs.core.name.call(null,name));
{
var G__14542 = cljs.core.next.call(null,seq__14521_14535__$1);
var G__14543 = null;
var G__14544 = 0;
var G__14545 = 0;
seq__14521_14525 = G__14542;
chunk__14522_14526 = G__14543;
count__14523_14527 = G__14544;
i__14524_14528 = G__14545;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__14547 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__14547,0,null);var v = cljs.core.nth.call(null,vec__14547,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__14548_SHARP_){var attr = attrs__$1.item(p1__14548_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14555_14561 = cljs.core.seq.call(null,styles);var chunk__14556_14562 = null;var count__14557_14563 = 0;var i__14558_14564 = 0;while(true){
if((i__14558_14564 < count__14557_14563))
{var vec__14559_14565 = cljs.core._nth.call(null,chunk__14556_14562,i__14558_14564);var name_14566 = cljs.core.nth.call(null,vec__14559_14565,0,null);var value_14567 = cljs.core.nth.call(null,vec__14559_14565,1,null);domina.set_style_BANG_.call(null,content,name_14566,value_14567);
{
var G__14568 = seq__14555_14561;
var G__14569 = chunk__14556_14562;
var G__14570 = count__14557_14563;
var G__14571 = (i__14558_14564 + 1);
seq__14555_14561 = G__14568;
chunk__14556_14562 = G__14569;
count__14557_14563 = G__14570;
i__14558_14564 = G__14571;
continue;
}
} else
{var temp__4092__auto___14572 = cljs.core.seq.call(null,seq__14555_14561);if(temp__4092__auto___14572)
{var seq__14555_14573__$1 = temp__4092__auto___14572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14555_14573__$1))
{var c__4148__auto___14574 = cljs.core.chunk_first.call(null,seq__14555_14573__$1);{
var G__14575 = cljs.core.chunk_rest.call(null,seq__14555_14573__$1);
var G__14576 = c__4148__auto___14574;
var G__14577 = cljs.core.count.call(null,c__4148__auto___14574);
var G__14578 = 0;
seq__14555_14561 = G__14575;
chunk__14556_14562 = G__14576;
count__14557_14563 = G__14577;
i__14558_14564 = G__14578;
continue;
}
} else
{var vec__14560_14579 = cljs.core.first.call(null,seq__14555_14573__$1);var name_14580 = cljs.core.nth.call(null,vec__14560_14579,0,null);var value_14581 = cljs.core.nth.call(null,vec__14560_14579,1,null);domina.set_style_BANG_.call(null,content,name_14580,value_14581);
{
var G__14582 = cljs.core.next.call(null,seq__14555_14573__$1);
var G__14583 = null;
var G__14584 = 0;
var G__14585 = 0;
seq__14555_14561 = G__14582;
chunk__14556_14562 = G__14583;
count__14557_14563 = G__14584;
i__14558_14564 = G__14585;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14592_14598 = cljs.core.seq.call(null,attrs);var chunk__14593_14599 = null;var count__14594_14600 = 0;var i__14595_14601 = 0;while(true){
if((i__14595_14601 < count__14594_14600))
{var vec__14596_14602 = cljs.core._nth.call(null,chunk__14593_14599,i__14595_14601);var name_14603 = cljs.core.nth.call(null,vec__14596_14602,0,null);var value_14604 = cljs.core.nth.call(null,vec__14596_14602,1,null);domina.set_attr_BANG_.call(null,content,name_14603,value_14604);
{
var G__14605 = seq__14592_14598;
var G__14606 = chunk__14593_14599;
var G__14607 = count__14594_14600;
var G__14608 = (i__14595_14601 + 1);
seq__14592_14598 = G__14605;
chunk__14593_14599 = G__14606;
count__14594_14600 = G__14607;
i__14595_14601 = G__14608;
continue;
}
} else
{var temp__4092__auto___14609 = cljs.core.seq.call(null,seq__14592_14598);if(temp__4092__auto___14609)
{var seq__14592_14610__$1 = temp__4092__auto___14609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14592_14610__$1))
{var c__4148__auto___14611 = cljs.core.chunk_first.call(null,seq__14592_14610__$1);{
var G__14612 = cljs.core.chunk_rest.call(null,seq__14592_14610__$1);
var G__14613 = c__4148__auto___14611;
var G__14614 = cljs.core.count.call(null,c__4148__auto___14611);
var G__14615 = 0;
seq__14592_14598 = G__14612;
chunk__14593_14599 = G__14613;
count__14594_14600 = G__14614;
i__14595_14601 = G__14615;
continue;
}
} else
{var vec__14597_14616 = cljs.core.first.call(null,seq__14592_14610__$1);var name_14617 = cljs.core.nth.call(null,vec__14597_14616,0,null);var value_14618 = cljs.core.nth.call(null,vec__14597_14616,1,null);domina.set_attr_BANG_.call(null,content,name_14617,value_14618);
{
var G__14619 = cljs.core.next.call(null,seq__14592_14610__$1);
var G__14620 = null;
var G__14621 = 0;
var G__14622 = 0;
seq__14592_14598 = G__14619;
chunk__14593_14599 = G__14620;
count__14594_14600 = G__14621;
i__14595_14601 = G__14622;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14627_14631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14628_14632 = null;var count__14629_14633 = 0;var i__14630_14634 = 0;while(true){
if((i__14630_14634 < count__14629_14633))
{var node_14635 = cljs.core._nth.call(null,chunk__14628_14632,i__14630_14634);goog.dom.classes.add(node_14635,class$);
{
var G__14636 = seq__14627_14631;
var G__14637 = chunk__14628_14632;
var G__14638 = count__14629_14633;
var G__14639 = (i__14630_14634 + 1);
seq__14627_14631 = G__14636;
chunk__14628_14632 = G__14637;
count__14629_14633 = G__14638;
i__14630_14634 = G__14639;
continue;
}
} else
{var temp__4092__auto___14640 = cljs.core.seq.call(null,seq__14627_14631);if(temp__4092__auto___14640)
{var seq__14627_14641__$1 = temp__4092__auto___14640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14627_14641__$1))
{var c__4148__auto___14642 = cljs.core.chunk_first.call(null,seq__14627_14641__$1);{
var G__14643 = cljs.core.chunk_rest.call(null,seq__14627_14641__$1);
var G__14644 = c__4148__auto___14642;
var G__14645 = cljs.core.count.call(null,c__4148__auto___14642);
var G__14646 = 0;
seq__14627_14631 = G__14643;
chunk__14628_14632 = G__14644;
count__14629_14633 = G__14645;
i__14630_14634 = G__14646;
continue;
}
} else
{var node_14647 = cljs.core.first.call(null,seq__14627_14641__$1);goog.dom.classes.add(node_14647,class$);
{
var G__14648 = cljs.core.next.call(null,seq__14627_14641__$1);
var G__14649 = null;
var G__14650 = 0;
var G__14651 = 0;
seq__14627_14631 = G__14648;
chunk__14628_14632 = G__14649;
count__14629_14633 = G__14650;
i__14630_14634 = G__14651;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14656_14660 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14657_14661 = null;var count__14658_14662 = 0;var i__14659_14663 = 0;while(true){
if((i__14659_14663 < count__14658_14662))
{var node_14664 = cljs.core._nth.call(null,chunk__14657_14661,i__14659_14663);goog.dom.classes.remove(node_14664,class$);
{
var G__14665 = seq__14656_14660;
var G__14666 = chunk__14657_14661;
var G__14667 = count__14658_14662;
var G__14668 = (i__14659_14663 + 1);
seq__14656_14660 = G__14665;
chunk__14657_14661 = G__14666;
count__14658_14662 = G__14667;
i__14659_14663 = G__14668;
continue;
}
} else
{var temp__4092__auto___14669 = cljs.core.seq.call(null,seq__14656_14660);if(temp__4092__auto___14669)
{var seq__14656_14670__$1 = temp__4092__auto___14669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14656_14670__$1))
{var c__4148__auto___14671 = cljs.core.chunk_first.call(null,seq__14656_14670__$1);{
var G__14672 = cljs.core.chunk_rest.call(null,seq__14656_14670__$1);
var G__14673 = c__4148__auto___14671;
var G__14674 = cljs.core.count.call(null,c__4148__auto___14671);
var G__14675 = 0;
seq__14656_14660 = G__14672;
chunk__14657_14661 = G__14673;
count__14658_14662 = G__14674;
i__14659_14663 = G__14675;
continue;
}
} else
{var node_14676 = cljs.core.first.call(null,seq__14656_14670__$1);goog.dom.classes.remove(node_14676,class$);
{
var G__14677 = cljs.core.next.call(null,seq__14656_14670__$1);
var G__14678 = null;
var G__14679 = 0;
var G__14680 = 0;
seq__14656_14660 = G__14677;
chunk__14657_14661 = G__14678;
count__14658_14662 = G__14679;
i__14659_14663 = G__14680;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14685_14689 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14686_14690 = null;var count__14687_14691 = 0;var i__14688_14692 = 0;while(true){
if((i__14688_14692 < count__14687_14691))
{var node_14693 = cljs.core._nth.call(null,chunk__14686_14690,i__14688_14692);goog.dom.classes.toggle(node_14693,class$);
{
var G__14694 = seq__14685_14689;
var G__14695 = chunk__14686_14690;
var G__14696 = count__14687_14691;
var G__14697 = (i__14688_14692 + 1);
seq__14685_14689 = G__14694;
chunk__14686_14690 = G__14695;
count__14687_14691 = G__14696;
i__14688_14692 = G__14697;
continue;
}
} else
{var temp__4092__auto___14698 = cljs.core.seq.call(null,seq__14685_14689);if(temp__4092__auto___14698)
{var seq__14685_14699__$1 = temp__4092__auto___14698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14685_14699__$1))
{var c__4148__auto___14700 = cljs.core.chunk_first.call(null,seq__14685_14699__$1);{
var G__14701 = cljs.core.chunk_rest.call(null,seq__14685_14699__$1);
var G__14702 = c__4148__auto___14700;
var G__14703 = cljs.core.count.call(null,c__4148__auto___14700);
var G__14704 = 0;
seq__14685_14689 = G__14701;
chunk__14686_14690 = G__14702;
count__14687_14691 = G__14703;
i__14688_14692 = G__14704;
continue;
}
} else
{var node_14705 = cljs.core.first.call(null,seq__14685_14699__$1);goog.dom.classes.toggle(node_14705,class$);
{
var G__14706 = cljs.core.next.call(null,seq__14685_14699__$1);
var G__14707 = null;
var G__14708 = 0;
var G__14709 = 0;
seq__14685_14689 = G__14706;
chunk__14686_14690 = G__14707;
count__14687_14691 = G__14708;
i__14688_14692 = G__14709;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14718__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__14714_14719 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14715_14720 = null;var count__14716_14721 = 0;var i__14717_14722 = 0;while(true){
if((i__14717_14722 < count__14716_14721))
{var node_14723 = cljs.core._nth.call(null,chunk__14715_14720,i__14717_14722);goog.dom.classes.set(node_14723,classes_14718__$1);
{
var G__14724 = seq__14714_14719;
var G__14725 = chunk__14715_14720;
var G__14726 = count__14716_14721;
var G__14727 = (i__14717_14722 + 1);
seq__14714_14719 = G__14724;
chunk__14715_14720 = G__14725;
count__14716_14721 = G__14726;
i__14717_14722 = G__14727;
continue;
}
} else
{var temp__4092__auto___14728 = cljs.core.seq.call(null,seq__14714_14719);if(temp__4092__auto___14728)
{var seq__14714_14729__$1 = temp__4092__auto___14728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14714_14729__$1))
{var c__4148__auto___14730 = cljs.core.chunk_first.call(null,seq__14714_14729__$1);{
var G__14731 = cljs.core.chunk_rest.call(null,seq__14714_14729__$1);
var G__14732 = c__4148__auto___14730;
var G__14733 = cljs.core.count.call(null,c__4148__auto___14730);
var G__14734 = 0;
seq__14714_14719 = G__14731;
chunk__14715_14720 = G__14732;
count__14716_14721 = G__14733;
i__14717_14722 = G__14734;
continue;
}
} else
{var node_14735 = cljs.core.first.call(null,seq__14714_14729__$1);goog.dom.classes.set(node_14735,classes_14718__$1);
{
var G__14736 = cljs.core.next.call(null,seq__14714_14729__$1);
var G__14737 = null;
var G__14738 = 0;
var G__14739 = 0;
seq__14714_14719 = G__14736;
chunk__14715_14720 = G__14737;
count__14716_14721 = G__14738;
i__14717_14722 = G__14739;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14744_14748 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14745_14749 = null;var count__14746_14750 = 0;var i__14747_14751 = 0;while(true){
if((i__14747_14751 < count__14746_14750))
{var node_14752 = cljs.core._nth.call(null,chunk__14745_14749,i__14747_14751);goog.dom.setTextContent(node_14752,value);
{
var G__14753 = seq__14744_14748;
var G__14754 = chunk__14745_14749;
var G__14755 = count__14746_14750;
var G__14756 = (i__14747_14751 + 1);
seq__14744_14748 = G__14753;
chunk__14745_14749 = G__14754;
count__14746_14750 = G__14755;
i__14747_14751 = G__14756;
continue;
}
} else
{var temp__4092__auto___14757 = cljs.core.seq.call(null,seq__14744_14748);if(temp__4092__auto___14757)
{var seq__14744_14758__$1 = temp__4092__auto___14757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14744_14758__$1))
{var c__4148__auto___14759 = cljs.core.chunk_first.call(null,seq__14744_14758__$1);{
var G__14760 = cljs.core.chunk_rest.call(null,seq__14744_14758__$1);
var G__14761 = c__4148__auto___14759;
var G__14762 = cljs.core.count.call(null,c__4148__auto___14759);
var G__14763 = 0;
seq__14744_14748 = G__14760;
chunk__14745_14749 = G__14761;
count__14746_14750 = G__14762;
i__14747_14751 = G__14763;
continue;
}
} else
{var node_14764 = cljs.core.first.call(null,seq__14744_14758__$1);goog.dom.setTextContent(node_14764,value);
{
var G__14765 = cljs.core.next.call(null,seq__14744_14758__$1);
var G__14766 = null;
var G__14767 = 0;
var G__14768 = 0;
seq__14744_14748 = G__14765;
chunk__14745_14749 = G__14766;
count__14746_14750 = G__14767;
i__14747_14751 = G__14768;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__14773_14777 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14774_14778 = null;var count__14775_14779 = 0;var i__14776_14780 = 0;while(true){
if((i__14776_14780 < count__14775_14779))
{var node_14781 = cljs.core._nth.call(null,chunk__14774_14778,i__14776_14780);goog.dom.forms.setValue(node_14781,value);
{
var G__14782 = seq__14773_14777;
var G__14783 = chunk__14774_14778;
var G__14784 = count__14775_14779;
var G__14785 = (i__14776_14780 + 1);
seq__14773_14777 = G__14782;
chunk__14774_14778 = G__14783;
count__14775_14779 = G__14784;
i__14776_14780 = G__14785;
continue;
}
} else
{var temp__4092__auto___14786 = cljs.core.seq.call(null,seq__14773_14777);if(temp__4092__auto___14786)
{var seq__14773_14787__$1 = temp__4092__auto___14786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14773_14787__$1))
{var c__4148__auto___14788 = cljs.core.chunk_first.call(null,seq__14773_14787__$1);{
var G__14789 = cljs.core.chunk_rest.call(null,seq__14773_14787__$1);
var G__14790 = c__4148__auto___14788;
var G__14791 = cljs.core.count.call(null,c__4148__auto___14788);
var G__14792 = 0;
seq__14773_14777 = G__14789;
chunk__14774_14778 = G__14790;
count__14775_14779 = G__14791;
i__14776_14780 = G__14792;
continue;
}
} else
{var node_14793 = cljs.core.first.call(null,seq__14773_14787__$1);goog.dom.forms.setValue(node_14793,value);
{
var G__14794 = cljs.core.next.call(null,seq__14773_14787__$1);
var G__14795 = null;
var G__14796 = 0;
var G__14797 = 0;
seq__14773_14777 = G__14794;
chunk__14774_14778 = G__14795;
count__14775_14779 = G__14796;
i__14776_14780 = G__14797;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_14808 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__14804_14809 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14805_14810 = null;var count__14806_14811 = 0;var i__14807_14812 = 0;while(true){
if((i__14807_14812 < count__14806_14811))
{var node_14813 = cljs.core._nth.call(null,chunk__14805_14810,i__14807_14812);node_14813.innerHTML = value_14808;
{
var G__14814 = seq__14804_14809;
var G__14815 = chunk__14805_14810;
var G__14816 = count__14806_14811;
var G__14817 = (i__14807_14812 + 1);
seq__14804_14809 = G__14814;
chunk__14805_14810 = G__14815;
count__14806_14811 = G__14816;
i__14807_14812 = G__14817;
continue;
}
} else
{var temp__4092__auto___14818 = cljs.core.seq.call(null,seq__14804_14809);if(temp__4092__auto___14818)
{var seq__14804_14819__$1 = temp__4092__auto___14818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14804_14819__$1))
{var c__4148__auto___14820 = cljs.core.chunk_first.call(null,seq__14804_14819__$1);{
var G__14821 = cljs.core.chunk_rest.call(null,seq__14804_14819__$1);
var G__14822 = c__4148__auto___14820;
var G__14823 = cljs.core.count.call(null,c__4148__auto___14820);
var G__14824 = 0;
seq__14804_14809 = G__14821;
chunk__14805_14810 = G__14822;
count__14806_14811 = G__14823;
i__14807_14812 = G__14824;
continue;
}
} else
{var node_14825 = cljs.core.first.call(null,seq__14804_14819__$1);node_14825.innerHTML = value_14808;
{
var G__14826 = cljs.core.next.call(null,seq__14804_14819__$1);
var G__14827 = null;
var G__14828 = 0;
var G__14829 = 0;
seq__14804_14809 = G__14826;
chunk__14805_14810 = G__14827;
count__14806_14811 = G__14828;
i__14807_14812 = G__14829;
continue;
}
}
} else
{}
}
break;
}
}catch (e14803){if((e14803 instanceof Error))
{var e_14830 = e14803;domina.replace_children_BANG_.call(null,content,value_14808);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14803;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__14837_14841 = cljs.core.seq.call(null,children);var chunk__14838_14842 = null;var count__14839_14843 = 0;var i__14840_14844 = 0;while(true){
if((i__14840_14844 < count__14839_14843))
{var child_14845 = cljs.core._nth.call(null,chunk__14838_14842,i__14840_14844);frag.appendChild(child_14845);
{
var G__14846 = seq__14837_14841;
var G__14847 = chunk__14838_14842;
var G__14848 = count__14839_14843;
var G__14849 = (i__14840_14844 + 1);
seq__14837_14841 = G__14846;
chunk__14838_14842 = G__14847;
count__14839_14843 = G__14848;
i__14840_14844 = G__14849;
continue;
}
} else
{var temp__4092__auto___14850 = cljs.core.seq.call(null,seq__14837_14841);if(temp__4092__auto___14850)
{var seq__14837_14851__$1 = temp__4092__auto___14850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14837_14851__$1))
{var c__4148__auto___14852 = cljs.core.chunk_first.call(null,seq__14837_14851__$1);{
var G__14853 = cljs.core.chunk_rest.call(null,seq__14837_14851__$1);
var G__14854 = c__4148__auto___14852;
var G__14855 = cljs.core.count.call(null,c__4148__auto___14852);
var G__14856 = 0;
seq__14837_14841 = G__14853;
chunk__14838_14842 = G__14854;
count__14839_14843 = G__14855;
i__14840_14844 = G__14856;
continue;
}
} else
{var child_14857 = cljs.core.first.call(null,seq__14837_14851__$1);frag.appendChild(child_14857);
{
var G__14858 = cljs.core.next.call(null,seq__14837_14851__$1);
var G__14859 = null;
var G__14860 = 0;
var G__14861 = 0;
seq__14837_14841 = G__14858;
chunk__14838_14842 = G__14859;
count__14839_14843 = G__14860;
i__14840_14844 = G__14861;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14831_SHARP_,p2__14832_SHARP_){return f.call(null,p1__14831_SHARP_,p2__14832_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__14863 = list_thing;if(G__14863)
{var bit__4050__auto__ = (G__14863.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__14863.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14863.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14863);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__14864 = content;if(G__14864)
{var bit__4050__auto__ = (G__14864.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__14864.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14864.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14864);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14864);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__14865 = content;if(G__14865)
{var bit__4050__auto__ = (G__14865.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__14865.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14865.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14865);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14865);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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

//# sourceMappingURL=domina.js.map