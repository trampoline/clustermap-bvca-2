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
var opt_wrapper_23730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$110,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_23731,table_section_wrapper_23731,opt_wrapper_23730,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_23732,table_section_wrapper_23731,cell_wrapper_23732,opt_wrapper_23730,table_section_wrapper_23731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_23731]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__23737 = cljs.core.seq(tbody);var chunk__23738 = null;var count__23739 = 0;var i__23740 = 0;while(true){
if((i__23740 < count__23739))
{var child = chunk__23738.cljs$core$IIndexed$_nth$arity$2(null,i__23740);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23741 = seq__23737;
var G__23742 = chunk__23738;
var G__23743 = count__23739;
var G__23744 = (i__23740 + 1);
seq__23737 = G__23741;
chunk__23738 = G__23742;
count__23739 = G__23743;
i__23740 = G__23744;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23737);if(temp__4092__auto__)
{var seq__23737__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23737__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23737__$1);{
var G__23745 = cljs.core.chunk_rest(seq__23737__$1);
var G__23746 = c__4148__auto__;
var G__23747 = cljs.core.count(c__4148__auto__);
var G__23748 = 0;
seq__23737 = G__23745;
chunk__23738 = G__23746;
count__23739 = G__23747;
i__23740 = G__23748;
continue;
}
} else
{var child = cljs.core.first(seq__23737__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23749 = cljs.core.next(seq__23737__$1);
var G__23750 = null;
var G__23751 = 0;
var G__23752 = 0;
seq__23737 = G__23749;
chunk__23738 = G__23750;
count__23739 = G__23751;
i__23740 = G__23752;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__23754 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23754,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23754,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23754,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__23755 = wrapper.lastChild;
var G__23756 = (level - 1);
wrapper = G__23755;
level = G__23756;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj23758 = {};return obj23758;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__23759){
var mesg = cljs.core.seq(arglist__23759);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__23760){
var mesg = cljs.core.seq(arglist__23760);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__23761){
var contents = cljs.core.seq(arglist__23761);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23762_SHARP_){return p1__23762_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23763_SHARP_,p2__23764_SHARP_){return goog.dom.insertChildAt(p1__23763_SHARP_,p2__23764_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__23763_SHARP_,p2__23764_SHARP_){return goog.dom.insertChildAt(p1__23763_SHARP_,p2__23764_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23766_SHARP_,p2__23765_SHARP_){return goog.dom.insertSiblingBefore(p2__23765_SHARP_,p1__23766_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23766_SHARP_,p2__23765_SHARP_){return goog.dom.insertSiblingBefore(p2__23765_SHARP_,p1__23766_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23768_SHARP_,p2__23767_SHARP_){return goog.dom.insertSiblingAfter(p2__23767_SHARP_,p1__23768_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23768_SHARP_,p2__23767_SHARP_){return goog.dom.insertSiblingAfter(p2__23767_SHARP_,p1__23768_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23770_SHARP_,p2__23769_SHARP_){return goog.dom.replaceNode(p2__23769_SHARP_,p1__23770_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23770_SHARP_,p2__23769_SHARP_){return goog.dom.replaceNode(p2__23769_SHARP_,p1__23770_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__23775_23779 = cljs.core.seq(domina.nodes(content));var chunk__23776_23780 = null;var count__23777_23781 = 0;var i__23778_23782 = 0;while(true){
if((i__23778_23782 < count__23777_23781))
{var n_23783 = chunk__23776_23780.cljs$core$IIndexed$_nth$arity$2(null,i__23778_23782);goog.style.setStyle(n_23783,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23784 = seq__23775_23779;
var G__23785 = chunk__23776_23780;
var G__23786 = count__23777_23781;
var G__23787 = (i__23778_23782 + 1);
seq__23775_23779 = G__23784;
chunk__23776_23780 = G__23785;
count__23777_23781 = G__23786;
i__23778_23782 = G__23787;
continue;
}
} else
{var temp__4092__auto___23788 = cljs.core.seq(seq__23775_23779);if(temp__4092__auto___23788)
{var seq__23775_23789__$1 = temp__4092__auto___23788;if(cljs.core.chunked_seq_QMARK_(seq__23775_23789__$1))
{var c__4148__auto___23790 = cljs.core.chunk_first(seq__23775_23789__$1);{
var G__23791 = cljs.core.chunk_rest(seq__23775_23789__$1);
var G__23792 = c__4148__auto___23790;
var G__23793 = cljs.core.count(c__4148__auto___23790);
var G__23794 = 0;
seq__23775_23779 = G__23791;
chunk__23776_23780 = G__23792;
count__23777_23781 = G__23793;
i__23778_23782 = G__23794;
continue;
}
} else
{var n_23795 = cljs.core.first(seq__23775_23789__$1);goog.style.setStyle(n_23795,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23796 = cljs.core.next(seq__23775_23789__$1);
var G__23797 = null;
var G__23798 = 0;
var G__23799 = 0;
seq__23775_23779 = G__23796;
chunk__23776_23780 = G__23797;
count__23777_23781 = G__23798;
i__23778_23782 = G__23799;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23800){
var content = cljs.core.first(arglist__23800);
arglist__23800 = cljs.core.next(arglist__23800);
var name = cljs.core.first(arglist__23800);
var value = cljs.core.rest(arglist__23800);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23805_23809 = cljs.core.seq(domina.nodes(content));var chunk__23806_23810 = null;var count__23807_23811 = 0;var i__23808_23812 = 0;while(true){
if((i__23808_23812 < count__23807_23811))
{var n_23813 = chunk__23806_23810.cljs$core$IIndexed$_nth$arity$2(null,i__23808_23812);n_23813.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23814 = seq__23805_23809;
var G__23815 = chunk__23806_23810;
var G__23816 = count__23807_23811;
var G__23817 = (i__23808_23812 + 1);
seq__23805_23809 = G__23814;
chunk__23806_23810 = G__23815;
count__23807_23811 = G__23816;
i__23808_23812 = G__23817;
continue;
}
} else
{var temp__4092__auto___23818 = cljs.core.seq(seq__23805_23809);if(temp__4092__auto___23818)
{var seq__23805_23819__$1 = temp__4092__auto___23818;if(cljs.core.chunked_seq_QMARK_(seq__23805_23819__$1))
{var c__4148__auto___23820 = cljs.core.chunk_first(seq__23805_23819__$1);{
var G__23821 = cljs.core.chunk_rest(seq__23805_23819__$1);
var G__23822 = c__4148__auto___23820;
var G__23823 = cljs.core.count(c__4148__auto___23820);
var G__23824 = 0;
seq__23805_23809 = G__23821;
chunk__23806_23810 = G__23822;
count__23807_23811 = G__23823;
i__23808_23812 = G__23824;
continue;
}
} else
{var n_23825 = cljs.core.first(seq__23805_23819__$1);n_23825.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23826 = cljs.core.next(seq__23805_23819__$1);
var G__23827 = null;
var G__23828 = 0;
var G__23829 = 0;
seq__23805_23809 = G__23826;
chunk__23806_23810 = G__23827;
count__23807_23811 = G__23828;
i__23808_23812 = G__23829;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23830){
var content = cljs.core.first(arglist__23830);
arglist__23830 = cljs.core.next(arglist__23830);
var name = cljs.core.first(arglist__23830);
var value = cljs.core.rest(arglist__23830);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23835_23839 = cljs.core.seq(domina.nodes(content));var chunk__23836_23840 = null;var count__23837_23841 = 0;var i__23838_23842 = 0;while(true){
if((i__23838_23842 < count__23837_23841))
{var n_23843 = chunk__23836_23840.cljs$core$IIndexed$_nth$arity$2(null,i__23838_23842);n_23843.removeAttribute(cljs.core.name(name));
{
var G__23844 = seq__23835_23839;
var G__23845 = chunk__23836_23840;
var G__23846 = count__23837_23841;
var G__23847 = (i__23838_23842 + 1);
seq__23835_23839 = G__23844;
chunk__23836_23840 = G__23845;
count__23837_23841 = G__23846;
i__23838_23842 = G__23847;
continue;
}
} else
{var temp__4092__auto___23848 = cljs.core.seq(seq__23835_23839);if(temp__4092__auto___23848)
{var seq__23835_23849__$1 = temp__4092__auto___23848;if(cljs.core.chunked_seq_QMARK_(seq__23835_23849__$1))
{var c__4148__auto___23850 = cljs.core.chunk_first(seq__23835_23849__$1);{
var G__23851 = cljs.core.chunk_rest(seq__23835_23849__$1);
var G__23852 = c__4148__auto___23850;
var G__23853 = cljs.core.count(c__4148__auto___23850);
var G__23854 = 0;
seq__23835_23839 = G__23851;
chunk__23836_23840 = G__23852;
count__23837_23841 = G__23853;
i__23838_23842 = G__23854;
continue;
}
} else
{var n_23855 = cljs.core.first(seq__23835_23849__$1);n_23855.removeAttribute(cljs.core.name(name));
{
var G__23856 = cljs.core.next(seq__23835_23849__$1);
var G__23857 = null;
var G__23858 = 0;
var G__23859 = 0;
seq__23835_23839 = G__23856;
chunk__23836_23840 = G__23857;
count__23837_23841 = G__23858;
i__23838_23842 = G__23859;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__23861 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23861,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23861,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$109)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23862_SHARP_){var attr = attrs__$1.item(p1__23862_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23869_23875 = cljs.core.seq(styles);var chunk__23870_23876 = null;var count__23871_23877 = 0;var i__23872_23878 = 0;while(true){
if((i__23872_23878 < count__23871_23877))
{var vec__23873_23879 = chunk__23870_23876.cljs$core$IIndexed$_nth$arity$2(null,i__23872_23878);var name_23880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873_23879,0,null);var value_23881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873_23879,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23880,cljs.core.array_seq([value_23881], 0));
{
var G__23882 = seq__23869_23875;
var G__23883 = chunk__23870_23876;
var G__23884 = count__23871_23877;
var G__23885 = (i__23872_23878 + 1);
seq__23869_23875 = G__23882;
chunk__23870_23876 = G__23883;
count__23871_23877 = G__23884;
i__23872_23878 = G__23885;
continue;
}
} else
{var temp__4092__auto___23886 = cljs.core.seq(seq__23869_23875);if(temp__4092__auto___23886)
{var seq__23869_23887__$1 = temp__4092__auto___23886;if(cljs.core.chunked_seq_QMARK_(seq__23869_23887__$1))
{var c__4148__auto___23888 = cljs.core.chunk_first(seq__23869_23887__$1);{
var G__23889 = cljs.core.chunk_rest(seq__23869_23887__$1);
var G__23890 = c__4148__auto___23888;
var G__23891 = cljs.core.count(c__4148__auto___23888);
var G__23892 = 0;
seq__23869_23875 = G__23889;
chunk__23870_23876 = G__23890;
count__23871_23877 = G__23891;
i__23872_23878 = G__23892;
continue;
}
} else
{var vec__23874_23893 = cljs.core.first(seq__23869_23887__$1);var name_23894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874_23893,0,null);var value_23895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874_23893,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23894,cljs.core.array_seq([value_23895], 0));
{
var G__23896 = cljs.core.next(seq__23869_23887__$1);
var G__23897 = null;
var G__23898 = 0;
var G__23899 = 0;
seq__23869_23875 = G__23896;
chunk__23870_23876 = G__23897;
count__23871_23877 = G__23898;
i__23872_23878 = G__23899;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23906_23912 = cljs.core.seq(attrs);var chunk__23907_23913 = null;var count__23908_23914 = 0;var i__23909_23915 = 0;while(true){
if((i__23909_23915 < count__23908_23914))
{var vec__23910_23916 = chunk__23907_23913.cljs$core$IIndexed$_nth$arity$2(null,i__23909_23915);var name_23917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910_23916,0,null);var value_23918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910_23916,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23917,cljs.core.array_seq([value_23918], 0));
{
var G__23919 = seq__23906_23912;
var G__23920 = chunk__23907_23913;
var G__23921 = count__23908_23914;
var G__23922 = (i__23909_23915 + 1);
seq__23906_23912 = G__23919;
chunk__23907_23913 = G__23920;
count__23908_23914 = G__23921;
i__23909_23915 = G__23922;
continue;
}
} else
{var temp__4092__auto___23923 = cljs.core.seq(seq__23906_23912);if(temp__4092__auto___23923)
{var seq__23906_23924__$1 = temp__4092__auto___23923;if(cljs.core.chunked_seq_QMARK_(seq__23906_23924__$1))
{var c__4148__auto___23925 = cljs.core.chunk_first(seq__23906_23924__$1);{
var G__23926 = cljs.core.chunk_rest(seq__23906_23924__$1);
var G__23927 = c__4148__auto___23925;
var G__23928 = cljs.core.count(c__4148__auto___23925);
var G__23929 = 0;
seq__23906_23912 = G__23926;
chunk__23907_23913 = G__23927;
count__23908_23914 = G__23928;
i__23909_23915 = G__23929;
continue;
}
} else
{var vec__23911_23930 = cljs.core.first(seq__23906_23924__$1);var name_23931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23911_23930,0,null);var value_23932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23911_23930,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23931,cljs.core.array_seq([value_23932], 0));
{
var G__23933 = cljs.core.next(seq__23906_23924__$1);
var G__23934 = null;
var G__23935 = 0;
var G__23936 = 0;
seq__23906_23912 = G__23933;
chunk__23907_23913 = G__23934;
count__23908_23914 = G__23935;
i__23909_23915 = G__23936;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23941_23945 = cljs.core.seq(domina.nodes(content));var chunk__23942_23946 = null;var count__23943_23947 = 0;var i__23944_23948 = 0;while(true){
if((i__23944_23948 < count__23943_23947))
{var node_23949 = chunk__23942_23946.cljs$core$IIndexed$_nth$arity$2(null,i__23944_23948);goog.dom.classes.add(node_23949,class$);
{
var G__23950 = seq__23941_23945;
var G__23951 = chunk__23942_23946;
var G__23952 = count__23943_23947;
var G__23953 = (i__23944_23948 + 1);
seq__23941_23945 = G__23950;
chunk__23942_23946 = G__23951;
count__23943_23947 = G__23952;
i__23944_23948 = G__23953;
continue;
}
} else
{var temp__4092__auto___23954 = cljs.core.seq(seq__23941_23945);if(temp__4092__auto___23954)
{var seq__23941_23955__$1 = temp__4092__auto___23954;if(cljs.core.chunked_seq_QMARK_(seq__23941_23955__$1))
{var c__4148__auto___23956 = cljs.core.chunk_first(seq__23941_23955__$1);{
var G__23957 = cljs.core.chunk_rest(seq__23941_23955__$1);
var G__23958 = c__4148__auto___23956;
var G__23959 = cljs.core.count(c__4148__auto___23956);
var G__23960 = 0;
seq__23941_23945 = G__23957;
chunk__23942_23946 = G__23958;
count__23943_23947 = G__23959;
i__23944_23948 = G__23960;
continue;
}
} else
{var node_23961 = cljs.core.first(seq__23941_23955__$1);goog.dom.classes.add(node_23961,class$);
{
var G__23962 = cljs.core.next(seq__23941_23955__$1);
var G__23963 = null;
var G__23964 = 0;
var G__23965 = 0;
seq__23941_23945 = G__23962;
chunk__23942_23946 = G__23963;
count__23943_23947 = G__23964;
i__23944_23948 = G__23965;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23970_23974 = cljs.core.seq(domina.nodes(content));var chunk__23971_23975 = null;var count__23972_23976 = 0;var i__23973_23977 = 0;while(true){
if((i__23973_23977 < count__23972_23976))
{var node_23978 = chunk__23971_23975.cljs$core$IIndexed$_nth$arity$2(null,i__23973_23977);goog.dom.classes.remove(node_23978,class$);
{
var G__23979 = seq__23970_23974;
var G__23980 = chunk__23971_23975;
var G__23981 = count__23972_23976;
var G__23982 = (i__23973_23977 + 1);
seq__23970_23974 = G__23979;
chunk__23971_23975 = G__23980;
count__23972_23976 = G__23981;
i__23973_23977 = G__23982;
continue;
}
} else
{var temp__4092__auto___23983 = cljs.core.seq(seq__23970_23974);if(temp__4092__auto___23983)
{var seq__23970_23984__$1 = temp__4092__auto___23983;if(cljs.core.chunked_seq_QMARK_(seq__23970_23984__$1))
{var c__4148__auto___23985 = cljs.core.chunk_first(seq__23970_23984__$1);{
var G__23986 = cljs.core.chunk_rest(seq__23970_23984__$1);
var G__23987 = c__4148__auto___23985;
var G__23988 = cljs.core.count(c__4148__auto___23985);
var G__23989 = 0;
seq__23970_23974 = G__23986;
chunk__23971_23975 = G__23987;
count__23972_23976 = G__23988;
i__23973_23977 = G__23989;
continue;
}
} else
{var node_23990 = cljs.core.first(seq__23970_23984__$1);goog.dom.classes.remove(node_23990,class$);
{
var G__23991 = cljs.core.next(seq__23970_23984__$1);
var G__23992 = null;
var G__23993 = 0;
var G__23994 = 0;
seq__23970_23974 = G__23991;
chunk__23971_23975 = G__23992;
count__23972_23976 = G__23993;
i__23973_23977 = G__23994;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23999_24003 = cljs.core.seq(domina.nodes(content));var chunk__24000_24004 = null;var count__24001_24005 = 0;var i__24002_24006 = 0;while(true){
if((i__24002_24006 < count__24001_24005))
{var node_24007 = chunk__24000_24004.cljs$core$IIndexed$_nth$arity$2(null,i__24002_24006);goog.dom.classes.toggle(node_24007,class$);
{
var G__24008 = seq__23999_24003;
var G__24009 = chunk__24000_24004;
var G__24010 = count__24001_24005;
var G__24011 = (i__24002_24006 + 1);
seq__23999_24003 = G__24008;
chunk__24000_24004 = G__24009;
count__24001_24005 = G__24010;
i__24002_24006 = G__24011;
continue;
}
} else
{var temp__4092__auto___24012 = cljs.core.seq(seq__23999_24003);if(temp__4092__auto___24012)
{var seq__23999_24013__$1 = temp__4092__auto___24012;if(cljs.core.chunked_seq_QMARK_(seq__23999_24013__$1))
{var c__4148__auto___24014 = cljs.core.chunk_first(seq__23999_24013__$1);{
var G__24015 = cljs.core.chunk_rest(seq__23999_24013__$1);
var G__24016 = c__4148__auto___24014;
var G__24017 = cljs.core.count(c__4148__auto___24014);
var G__24018 = 0;
seq__23999_24003 = G__24015;
chunk__24000_24004 = G__24016;
count__24001_24005 = G__24017;
i__24002_24006 = G__24018;
continue;
}
} else
{var node_24019 = cljs.core.first(seq__23999_24013__$1);goog.dom.classes.toggle(node_24019,class$);
{
var G__24020 = cljs.core.next(seq__23999_24013__$1);
var G__24021 = null;
var G__24022 = 0;
var G__24023 = 0;
seq__23999_24003 = G__24020;
chunk__24000_24004 = G__24021;
count__24001_24005 = G__24022;
i__24002_24006 = G__24023;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24032__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24028_24033 = cljs.core.seq(domina.nodes(content));var chunk__24029_24034 = null;var count__24030_24035 = 0;var i__24031_24036 = 0;while(true){
if((i__24031_24036 < count__24030_24035))
{var node_24037 = chunk__24029_24034.cljs$core$IIndexed$_nth$arity$2(null,i__24031_24036);goog.dom.classes.set(node_24037,classes_24032__$1);
{
var G__24038 = seq__24028_24033;
var G__24039 = chunk__24029_24034;
var G__24040 = count__24030_24035;
var G__24041 = (i__24031_24036 + 1);
seq__24028_24033 = G__24038;
chunk__24029_24034 = G__24039;
count__24030_24035 = G__24040;
i__24031_24036 = G__24041;
continue;
}
} else
{var temp__4092__auto___24042 = cljs.core.seq(seq__24028_24033);if(temp__4092__auto___24042)
{var seq__24028_24043__$1 = temp__4092__auto___24042;if(cljs.core.chunked_seq_QMARK_(seq__24028_24043__$1))
{var c__4148__auto___24044 = cljs.core.chunk_first(seq__24028_24043__$1);{
var G__24045 = cljs.core.chunk_rest(seq__24028_24043__$1);
var G__24046 = c__4148__auto___24044;
var G__24047 = cljs.core.count(c__4148__auto___24044);
var G__24048 = 0;
seq__24028_24033 = G__24045;
chunk__24029_24034 = G__24046;
count__24030_24035 = G__24047;
i__24031_24036 = G__24048;
continue;
}
} else
{var node_24049 = cljs.core.first(seq__24028_24043__$1);goog.dom.classes.set(node_24049,classes_24032__$1);
{
var G__24050 = cljs.core.next(seq__24028_24043__$1);
var G__24051 = null;
var G__24052 = 0;
var G__24053 = 0;
seq__24028_24033 = G__24050;
chunk__24029_24034 = G__24051;
count__24030_24035 = G__24052;
i__24031_24036 = G__24053;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24058_24062 = cljs.core.seq(domina.nodes(content));var chunk__24059_24063 = null;var count__24060_24064 = 0;var i__24061_24065 = 0;while(true){
if((i__24061_24065 < count__24060_24064))
{var node_24066 = chunk__24059_24063.cljs$core$IIndexed$_nth$arity$2(null,i__24061_24065);goog.dom.setTextContent(node_24066,value);
{
var G__24067 = seq__24058_24062;
var G__24068 = chunk__24059_24063;
var G__24069 = count__24060_24064;
var G__24070 = (i__24061_24065 + 1);
seq__24058_24062 = G__24067;
chunk__24059_24063 = G__24068;
count__24060_24064 = G__24069;
i__24061_24065 = G__24070;
continue;
}
} else
{var temp__4092__auto___24071 = cljs.core.seq(seq__24058_24062);if(temp__4092__auto___24071)
{var seq__24058_24072__$1 = temp__4092__auto___24071;if(cljs.core.chunked_seq_QMARK_(seq__24058_24072__$1))
{var c__4148__auto___24073 = cljs.core.chunk_first(seq__24058_24072__$1);{
var G__24074 = cljs.core.chunk_rest(seq__24058_24072__$1);
var G__24075 = c__4148__auto___24073;
var G__24076 = cljs.core.count(c__4148__auto___24073);
var G__24077 = 0;
seq__24058_24062 = G__24074;
chunk__24059_24063 = G__24075;
count__24060_24064 = G__24076;
i__24061_24065 = G__24077;
continue;
}
} else
{var node_24078 = cljs.core.first(seq__24058_24072__$1);goog.dom.setTextContent(node_24078,value);
{
var G__24079 = cljs.core.next(seq__24058_24072__$1);
var G__24080 = null;
var G__24081 = 0;
var G__24082 = 0;
seq__24058_24062 = G__24079;
chunk__24059_24063 = G__24080;
count__24060_24064 = G__24081;
i__24061_24065 = G__24082;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24087_24091 = cljs.core.seq(domina.nodes(content));var chunk__24088_24092 = null;var count__24089_24093 = 0;var i__24090_24094 = 0;while(true){
if((i__24090_24094 < count__24089_24093))
{var node_24095 = chunk__24088_24092.cljs$core$IIndexed$_nth$arity$2(null,i__24090_24094);goog.dom.forms.setValue(node_24095,value);
{
var G__24096 = seq__24087_24091;
var G__24097 = chunk__24088_24092;
var G__24098 = count__24089_24093;
var G__24099 = (i__24090_24094 + 1);
seq__24087_24091 = G__24096;
chunk__24088_24092 = G__24097;
count__24089_24093 = G__24098;
i__24090_24094 = G__24099;
continue;
}
} else
{var temp__4092__auto___24100 = cljs.core.seq(seq__24087_24091);if(temp__4092__auto___24100)
{var seq__24087_24101__$1 = temp__4092__auto___24100;if(cljs.core.chunked_seq_QMARK_(seq__24087_24101__$1))
{var c__4148__auto___24102 = cljs.core.chunk_first(seq__24087_24101__$1);{
var G__24103 = cljs.core.chunk_rest(seq__24087_24101__$1);
var G__24104 = c__4148__auto___24102;
var G__24105 = cljs.core.count(c__4148__auto___24102);
var G__24106 = 0;
seq__24087_24091 = G__24103;
chunk__24088_24092 = G__24104;
count__24089_24093 = G__24105;
i__24090_24094 = G__24106;
continue;
}
} else
{var node_24107 = cljs.core.first(seq__24087_24101__$1);goog.dom.forms.setValue(node_24107,value);
{
var G__24108 = cljs.core.next(seq__24087_24101__$1);
var G__24109 = null;
var G__24110 = 0;
var G__24111 = 0;
seq__24087_24091 = G__24108;
chunk__24088_24092 = G__24109;
count__24089_24093 = G__24110;
i__24090_24094 = G__24111;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_24122 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24118_24123 = cljs.core.seq(domina.nodes(content));var chunk__24119_24124 = null;var count__24120_24125 = 0;var i__24121_24126 = 0;while(true){
if((i__24121_24126 < count__24120_24125))
{var node_24127 = chunk__24119_24124.cljs$core$IIndexed$_nth$arity$2(null,i__24121_24126);node_24127.innerHTML = value_24122;
{
var G__24128 = seq__24118_24123;
var G__24129 = chunk__24119_24124;
var G__24130 = count__24120_24125;
var G__24131 = (i__24121_24126 + 1);
seq__24118_24123 = G__24128;
chunk__24119_24124 = G__24129;
count__24120_24125 = G__24130;
i__24121_24126 = G__24131;
continue;
}
} else
{var temp__4092__auto___24132 = cljs.core.seq(seq__24118_24123);if(temp__4092__auto___24132)
{var seq__24118_24133__$1 = temp__4092__auto___24132;if(cljs.core.chunked_seq_QMARK_(seq__24118_24133__$1))
{var c__4148__auto___24134 = cljs.core.chunk_first(seq__24118_24133__$1);{
var G__24135 = cljs.core.chunk_rest(seq__24118_24133__$1);
var G__24136 = c__4148__auto___24134;
var G__24137 = cljs.core.count(c__4148__auto___24134);
var G__24138 = 0;
seq__24118_24123 = G__24135;
chunk__24119_24124 = G__24136;
count__24120_24125 = G__24137;
i__24121_24126 = G__24138;
continue;
}
} else
{var node_24139 = cljs.core.first(seq__24118_24133__$1);node_24139.innerHTML = value_24122;
{
var G__24140 = cljs.core.next(seq__24118_24133__$1);
var G__24141 = null;
var G__24142 = 0;
var G__24143 = 0;
seq__24118_24123 = G__24140;
chunk__24119_24124 = G__24141;
count__24120_24125 = G__24142;
i__24121_24126 = G__24143;
continue;
}
}
} else
{}
}
break;
}
}catch (e24117){if((e24117 instanceof Error))
{var e_24144 = e24117;domina.replace_children_BANG_(content,value_24122);
} else
{if(cljs.core.constant$keyword$109)
{throw e24117;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24151_24155 = cljs.core.seq(children);var chunk__24152_24156 = null;var count__24153_24157 = 0;var i__24154_24158 = 0;while(true){
if((i__24154_24158 < count__24153_24157))
{var child_24159 = chunk__24152_24156.cljs$core$IIndexed$_nth$arity$2(null,i__24154_24158);frag.appendChild(child_24159);
{
var G__24160 = seq__24151_24155;
var G__24161 = chunk__24152_24156;
var G__24162 = count__24153_24157;
var G__24163 = (i__24154_24158 + 1);
seq__24151_24155 = G__24160;
chunk__24152_24156 = G__24161;
count__24153_24157 = G__24162;
i__24154_24158 = G__24163;
continue;
}
} else
{var temp__4092__auto___24164 = cljs.core.seq(seq__24151_24155);if(temp__4092__auto___24164)
{var seq__24151_24165__$1 = temp__4092__auto___24164;if(cljs.core.chunked_seq_QMARK_(seq__24151_24165__$1))
{var c__4148__auto___24166 = cljs.core.chunk_first(seq__24151_24165__$1);{
var G__24167 = cljs.core.chunk_rest(seq__24151_24165__$1);
var G__24168 = c__4148__auto___24166;
var G__24169 = cljs.core.count(c__4148__auto___24166);
var G__24170 = 0;
seq__24151_24155 = G__24167;
chunk__24152_24156 = G__24168;
count__24153_24157 = G__24169;
i__24154_24158 = G__24170;
continue;
}
} else
{var child_24171 = cljs.core.first(seq__24151_24165__$1);frag.appendChild(child_24171);
{
var G__24172 = cljs.core.next(seq__24151_24165__$1);
var G__24173 = null;
var G__24174 = 0;
var G__24175 = 0;
seq__24151_24155 = G__24172;
chunk__24152_24156 = G__24173;
count__24153_24157 = G__24174;
i__24154_24158 = G__24175;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24145_SHARP_,p2__24146_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24145_SHARP_,p2__24146_SHARP_) : f.call(null,p1__24145_SHARP_,p2__24146_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__24177 = list_thing;if(G__24177)
{var bit__4050__auto__ = (G__24177.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24177.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24177.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24177);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24177);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$110)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__24178 = content;if(G__24178)
{var bit__4050__auto__ = (G__24178.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24178.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24178);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$110)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__24179 = content;if(G__24179)
{var bit__4050__auto__ = (G__24179.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24179.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24179.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24179);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24179);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$110)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
