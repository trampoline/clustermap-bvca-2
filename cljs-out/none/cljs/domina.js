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
var opt_wrapper_12816 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_12817 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_12818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_12817,table_section_wrapper_12817,opt_wrapper_12816,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_12818,table_section_wrapper_12817,cell_wrapper_12818,opt_wrapper_12816,table_section_wrapper_12817,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_12817]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__12823 = cljs.core.seq.call(null,tbody);var chunk__12824 = null;var count__12825 = 0;var i__12826 = 0;while(true){
if((i__12826 < count__12825))
{var child = cljs.core._nth.call(null,chunk__12824,i__12826);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__12827 = seq__12823;
var G__12828 = chunk__12824;
var G__12829 = count__12825;
var G__12830 = (i__12826 + 1);
seq__12823 = G__12827;
chunk__12824 = G__12828;
count__12825 = G__12829;
i__12826 = G__12830;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12823);if(temp__4092__auto__)
{var seq__12823__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12823__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12823__$1);{
var G__12831 = cljs.core.chunk_rest.call(null,seq__12823__$1);
var G__12832 = c__4148__auto__;
var G__12833 = cljs.core.count.call(null,c__4148__auto__);
var G__12834 = 0;
seq__12823 = G__12831;
chunk__12824 = G__12832;
count__12825 = G__12833;
i__12826 = G__12834;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__12823__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__12835 = cljs.core.next.call(null,seq__12823__$1);
var G__12836 = null;
var G__12837 = 0;
var G__12838 = 0;
seq__12823 = G__12835;
chunk__12824 = G__12836;
count__12825 = G__12837;
i__12826 = G__12838;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__12840 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__12840,0,null);var start_wrap = cljs.core.nth.call(null,vec__12840,1,null);var end_wrap = cljs.core.nth.call(null,vec__12840,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__12841 = wrapper.lastChild;
var G__12842 = (level - 1);
wrapper = G__12841;
level = G__12842;
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
domina.DomContent = (function (){var obj12844 = {};return obj12844;
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
log_debug.cljs$lang$applyTo = (function (arglist__12845){
var mesg = cljs.core.seq(arglist__12845);
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
log.cljs$lang$applyTo = (function (arglist__12846){
var mesg = cljs.core.seq(arglist__12846);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__12847){
var contents = cljs.core.seq(arglist__12847);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__12848_SHARP_){return p1__12848_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__12849_SHARP_,p2__12850_SHARP_){return goog.dom.insertChildAt(p1__12849_SHARP_,p2__12850_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__12852_SHARP_,p2__12851_SHARP_){return goog.dom.insertSiblingBefore(p2__12851_SHARP_,p1__12852_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__12854_SHARP_,p2__12853_SHARP_){return goog.dom.insertSiblingAfter(p2__12853_SHARP_,p1__12854_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__12856_SHARP_,p2__12855_SHARP_){return goog.dom.replaceNode(p2__12855_SHARP_,p1__12856_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__12861_12865 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12862_12866 = null;var count__12863_12867 = 0;var i__12864_12868 = 0;while(true){
if((i__12864_12868 < count__12863_12867))
{var n_12869 = cljs.core._nth.call(null,chunk__12862_12866,i__12864_12868);goog.style.setStyle(n_12869,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12870 = seq__12861_12865;
var G__12871 = chunk__12862_12866;
var G__12872 = count__12863_12867;
var G__12873 = (i__12864_12868 + 1);
seq__12861_12865 = G__12870;
chunk__12862_12866 = G__12871;
count__12863_12867 = G__12872;
i__12864_12868 = G__12873;
continue;
}
} else
{var temp__4092__auto___12874 = cljs.core.seq.call(null,seq__12861_12865);if(temp__4092__auto___12874)
{var seq__12861_12875__$1 = temp__4092__auto___12874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12861_12875__$1))
{var c__4148__auto___12876 = cljs.core.chunk_first.call(null,seq__12861_12875__$1);{
var G__12877 = cljs.core.chunk_rest.call(null,seq__12861_12875__$1);
var G__12878 = c__4148__auto___12876;
var G__12879 = cljs.core.count.call(null,c__4148__auto___12876);
var G__12880 = 0;
seq__12861_12865 = G__12877;
chunk__12862_12866 = G__12878;
count__12863_12867 = G__12879;
i__12864_12868 = G__12880;
continue;
}
} else
{var n_12881 = cljs.core.first.call(null,seq__12861_12875__$1);goog.style.setStyle(n_12881,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12882 = cljs.core.next.call(null,seq__12861_12875__$1);
var G__12883 = null;
var G__12884 = 0;
var G__12885 = 0;
seq__12861_12865 = G__12882;
chunk__12862_12866 = G__12883;
count__12863_12867 = G__12884;
i__12864_12868 = G__12885;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12886){
var content = cljs.core.first(arglist__12886);
arglist__12886 = cljs.core.next(arglist__12886);
var name = cljs.core.first(arglist__12886);
var value = cljs.core.rest(arglist__12886);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__12891_12895 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12892_12896 = null;var count__12893_12897 = 0;var i__12894_12898 = 0;while(true){
if((i__12894_12898 < count__12893_12897))
{var n_12899 = cljs.core._nth.call(null,chunk__12892_12896,i__12894_12898);n_12899.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12900 = seq__12891_12895;
var G__12901 = chunk__12892_12896;
var G__12902 = count__12893_12897;
var G__12903 = (i__12894_12898 + 1);
seq__12891_12895 = G__12900;
chunk__12892_12896 = G__12901;
count__12893_12897 = G__12902;
i__12894_12898 = G__12903;
continue;
}
} else
{var temp__4092__auto___12904 = cljs.core.seq.call(null,seq__12891_12895);if(temp__4092__auto___12904)
{var seq__12891_12905__$1 = temp__4092__auto___12904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12891_12905__$1))
{var c__4148__auto___12906 = cljs.core.chunk_first.call(null,seq__12891_12905__$1);{
var G__12907 = cljs.core.chunk_rest.call(null,seq__12891_12905__$1);
var G__12908 = c__4148__auto___12906;
var G__12909 = cljs.core.count.call(null,c__4148__auto___12906);
var G__12910 = 0;
seq__12891_12895 = G__12907;
chunk__12892_12896 = G__12908;
count__12893_12897 = G__12909;
i__12894_12898 = G__12910;
continue;
}
} else
{var n_12911 = cljs.core.first.call(null,seq__12891_12905__$1);n_12911.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12912 = cljs.core.next.call(null,seq__12891_12905__$1);
var G__12913 = null;
var G__12914 = 0;
var G__12915 = 0;
seq__12891_12895 = G__12912;
chunk__12892_12896 = G__12913;
count__12893_12897 = G__12914;
i__12894_12898 = G__12915;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12916){
var content = cljs.core.first(arglist__12916);
arglist__12916 = cljs.core.next(arglist__12916);
var name = cljs.core.first(arglist__12916);
var value = cljs.core.rest(arglist__12916);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__12921_12925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12922_12926 = null;var count__12923_12927 = 0;var i__12924_12928 = 0;while(true){
if((i__12924_12928 < count__12923_12927))
{var n_12929 = cljs.core._nth.call(null,chunk__12922_12926,i__12924_12928);n_12929.removeAttribute(cljs.core.name.call(null,name));
{
var G__12930 = seq__12921_12925;
var G__12931 = chunk__12922_12926;
var G__12932 = count__12923_12927;
var G__12933 = (i__12924_12928 + 1);
seq__12921_12925 = G__12930;
chunk__12922_12926 = G__12931;
count__12923_12927 = G__12932;
i__12924_12928 = G__12933;
continue;
}
} else
{var temp__4092__auto___12934 = cljs.core.seq.call(null,seq__12921_12925);if(temp__4092__auto___12934)
{var seq__12921_12935__$1 = temp__4092__auto___12934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12921_12935__$1))
{var c__4148__auto___12936 = cljs.core.chunk_first.call(null,seq__12921_12935__$1);{
var G__12937 = cljs.core.chunk_rest.call(null,seq__12921_12935__$1);
var G__12938 = c__4148__auto___12936;
var G__12939 = cljs.core.count.call(null,c__4148__auto___12936);
var G__12940 = 0;
seq__12921_12925 = G__12937;
chunk__12922_12926 = G__12938;
count__12923_12927 = G__12939;
i__12924_12928 = G__12940;
continue;
}
} else
{var n_12941 = cljs.core.first.call(null,seq__12921_12935__$1);n_12941.removeAttribute(cljs.core.name.call(null,name));
{
var G__12942 = cljs.core.next.call(null,seq__12921_12935__$1);
var G__12943 = null;
var G__12944 = 0;
var G__12945 = 0;
seq__12921_12925 = G__12942;
chunk__12922_12926 = G__12943;
count__12923_12927 = G__12944;
i__12924_12928 = G__12945;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__12947 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__12947,0,null);var v = cljs.core.nth.call(null,vec__12947,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12948_SHARP_){var attr = attrs__$1.item(p1__12948_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__12955_12961 = cljs.core.seq.call(null,styles);var chunk__12956_12962 = null;var count__12957_12963 = 0;var i__12958_12964 = 0;while(true){
if((i__12958_12964 < count__12957_12963))
{var vec__12959_12965 = cljs.core._nth.call(null,chunk__12956_12962,i__12958_12964);var name_12966 = cljs.core.nth.call(null,vec__12959_12965,0,null);var value_12967 = cljs.core.nth.call(null,vec__12959_12965,1,null);domina.set_style_BANG_.call(null,content,name_12966,value_12967);
{
var G__12968 = seq__12955_12961;
var G__12969 = chunk__12956_12962;
var G__12970 = count__12957_12963;
var G__12971 = (i__12958_12964 + 1);
seq__12955_12961 = G__12968;
chunk__12956_12962 = G__12969;
count__12957_12963 = G__12970;
i__12958_12964 = G__12971;
continue;
}
} else
{var temp__4092__auto___12972 = cljs.core.seq.call(null,seq__12955_12961);if(temp__4092__auto___12972)
{var seq__12955_12973__$1 = temp__4092__auto___12972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12955_12973__$1))
{var c__4148__auto___12974 = cljs.core.chunk_first.call(null,seq__12955_12973__$1);{
var G__12975 = cljs.core.chunk_rest.call(null,seq__12955_12973__$1);
var G__12976 = c__4148__auto___12974;
var G__12977 = cljs.core.count.call(null,c__4148__auto___12974);
var G__12978 = 0;
seq__12955_12961 = G__12975;
chunk__12956_12962 = G__12976;
count__12957_12963 = G__12977;
i__12958_12964 = G__12978;
continue;
}
} else
{var vec__12960_12979 = cljs.core.first.call(null,seq__12955_12973__$1);var name_12980 = cljs.core.nth.call(null,vec__12960_12979,0,null);var value_12981 = cljs.core.nth.call(null,vec__12960_12979,1,null);domina.set_style_BANG_.call(null,content,name_12980,value_12981);
{
var G__12982 = cljs.core.next.call(null,seq__12955_12973__$1);
var G__12983 = null;
var G__12984 = 0;
var G__12985 = 0;
seq__12955_12961 = G__12982;
chunk__12956_12962 = G__12983;
count__12957_12963 = G__12984;
i__12958_12964 = G__12985;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__12992_12998 = cljs.core.seq.call(null,attrs);var chunk__12993_12999 = null;var count__12994_13000 = 0;var i__12995_13001 = 0;while(true){
if((i__12995_13001 < count__12994_13000))
{var vec__12996_13002 = cljs.core._nth.call(null,chunk__12993_12999,i__12995_13001);var name_13003 = cljs.core.nth.call(null,vec__12996_13002,0,null);var value_13004 = cljs.core.nth.call(null,vec__12996_13002,1,null);domina.set_attr_BANG_.call(null,content,name_13003,value_13004);
{
var G__13005 = seq__12992_12998;
var G__13006 = chunk__12993_12999;
var G__13007 = count__12994_13000;
var G__13008 = (i__12995_13001 + 1);
seq__12992_12998 = G__13005;
chunk__12993_12999 = G__13006;
count__12994_13000 = G__13007;
i__12995_13001 = G__13008;
continue;
}
} else
{var temp__4092__auto___13009 = cljs.core.seq.call(null,seq__12992_12998);if(temp__4092__auto___13009)
{var seq__12992_13010__$1 = temp__4092__auto___13009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12992_13010__$1))
{var c__4148__auto___13011 = cljs.core.chunk_first.call(null,seq__12992_13010__$1);{
var G__13012 = cljs.core.chunk_rest.call(null,seq__12992_13010__$1);
var G__13013 = c__4148__auto___13011;
var G__13014 = cljs.core.count.call(null,c__4148__auto___13011);
var G__13015 = 0;
seq__12992_12998 = G__13012;
chunk__12993_12999 = G__13013;
count__12994_13000 = G__13014;
i__12995_13001 = G__13015;
continue;
}
} else
{var vec__12997_13016 = cljs.core.first.call(null,seq__12992_13010__$1);var name_13017 = cljs.core.nth.call(null,vec__12997_13016,0,null);var value_13018 = cljs.core.nth.call(null,vec__12997_13016,1,null);domina.set_attr_BANG_.call(null,content,name_13017,value_13018);
{
var G__13019 = cljs.core.next.call(null,seq__12992_13010__$1);
var G__13020 = null;
var G__13021 = 0;
var G__13022 = 0;
seq__12992_12998 = G__13019;
chunk__12993_12999 = G__13020;
count__12994_13000 = G__13021;
i__12995_13001 = G__13022;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__13027_13031 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13028_13032 = null;var count__13029_13033 = 0;var i__13030_13034 = 0;while(true){
if((i__13030_13034 < count__13029_13033))
{var node_13035 = cljs.core._nth.call(null,chunk__13028_13032,i__13030_13034);goog.dom.classes.add(node_13035,class$);
{
var G__13036 = seq__13027_13031;
var G__13037 = chunk__13028_13032;
var G__13038 = count__13029_13033;
var G__13039 = (i__13030_13034 + 1);
seq__13027_13031 = G__13036;
chunk__13028_13032 = G__13037;
count__13029_13033 = G__13038;
i__13030_13034 = G__13039;
continue;
}
} else
{var temp__4092__auto___13040 = cljs.core.seq.call(null,seq__13027_13031);if(temp__4092__auto___13040)
{var seq__13027_13041__$1 = temp__4092__auto___13040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13027_13041__$1))
{var c__4148__auto___13042 = cljs.core.chunk_first.call(null,seq__13027_13041__$1);{
var G__13043 = cljs.core.chunk_rest.call(null,seq__13027_13041__$1);
var G__13044 = c__4148__auto___13042;
var G__13045 = cljs.core.count.call(null,c__4148__auto___13042);
var G__13046 = 0;
seq__13027_13031 = G__13043;
chunk__13028_13032 = G__13044;
count__13029_13033 = G__13045;
i__13030_13034 = G__13046;
continue;
}
} else
{var node_13047 = cljs.core.first.call(null,seq__13027_13041__$1);goog.dom.classes.add(node_13047,class$);
{
var G__13048 = cljs.core.next.call(null,seq__13027_13041__$1);
var G__13049 = null;
var G__13050 = 0;
var G__13051 = 0;
seq__13027_13031 = G__13048;
chunk__13028_13032 = G__13049;
count__13029_13033 = G__13050;
i__13030_13034 = G__13051;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__13056_13060 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13057_13061 = null;var count__13058_13062 = 0;var i__13059_13063 = 0;while(true){
if((i__13059_13063 < count__13058_13062))
{var node_13064 = cljs.core._nth.call(null,chunk__13057_13061,i__13059_13063);goog.dom.classes.remove(node_13064,class$);
{
var G__13065 = seq__13056_13060;
var G__13066 = chunk__13057_13061;
var G__13067 = count__13058_13062;
var G__13068 = (i__13059_13063 + 1);
seq__13056_13060 = G__13065;
chunk__13057_13061 = G__13066;
count__13058_13062 = G__13067;
i__13059_13063 = G__13068;
continue;
}
} else
{var temp__4092__auto___13069 = cljs.core.seq.call(null,seq__13056_13060);if(temp__4092__auto___13069)
{var seq__13056_13070__$1 = temp__4092__auto___13069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13056_13070__$1))
{var c__4148__auto___13071 = cljs.core.chunk_first.call(null,seq__13056_13070__$1);{
var G__13072 = cljs.core.chunk_rest.call(null,seq__13056_13070__$1);
var G__13073 = c__4148__auto___13071;
var G__13074 = cljs.core.count.call(null,c__4148__auto___13071);
var G__13075 = 0;
seq__13056_13060 = G__13072;
chunk__13057_13061 = G__13073;
count__13058_13062 = G__13074;
i__13059_13063 = G__13075;
continue;
}
} else
{var node_13076 = cljs.core.first.call(null,seq__13056_13070__$1);goog.dom.classes.remove(node_13076,class$);
{
var G__13077 = cljs.core.next.call(null,seq__13056_13070__$1);
var G__13078 = null;
var G__13079 = 0;
var G__13080 = 0;
seq__13056_13060 = G__13077;
chunk__13057_13061 = G__13078;
count__13058_13062 = G__13079;
i__13059_13063 = G__13080;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__13085_13089 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13086_13090 = null;var count__13087_13091 = 0;var i__13088_13092 = 0;while(true){
if((i__13088_13092 < count__13087_13091))
{var node_13093 = cljs.core._nth.call(null,chunk__13086_13090,i__13088_13092);goog.dom.classes.toggle(node_13093,class$);
{
var G__13094 = seq__13085_13089;
var G__13095 = chunk__13086_13090;
var G__13096 = count__13087_13091;
var G__13097 = (i__13088_13092 + 1);
seq__13085_13089 = G__13094;
chunk__13086_13090 = G__13095;
count__13087_13091 = G__13096;
i__13088_13092 = G__13097;
continue;
}
} else
{var temp__4092__auto___13098 = cljs.core.seq.call(null,seq__13085_13089);if(temp__4092__auto___13098)
{var seq__13085_13099__$1 = temp__4092__auto___13098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13085_13099__$1))
{var c__4148__auto___13100 = cljs.core.chunk_first.call(null,seq__13085_13099__$1);{
var G__13101 = cljs.core.chunk_rest.call(null,seq__13085_13099__$1);
var G__13102 = c__4148__auto___13100;
var G__13103 = cljs.core.count.call(null,c__4148__auto___13100);
var G__13104 = 0;
seq__13085_13089 = G__13101;
chunk__13086_13090 = G__13102;
count__13087_13091 = G__13103;
i__13088_13092 = G__13104;
continue;
}
} else
{var node_13105 = cljs.core.first.call(null,seq__13085_13099__$1);goog.dom.classes.toggle(node_13105,class$);
{
var G__13106 = cljs.core.next.call(null,seq__13085_13099__$1);
var G__13107 = null;
var G__13108 = 0;
var G__13109 = 0;
seq__13085_13089 = G__13106;
chunk__13086_13090 = G__13107;
count__13087_13091 = G__13108;
i__13088_13092 = G__13109;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_13118__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__13114_13119 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13115_13120 = null;var count__13116_13121 = 0;var i__13117_13122 = 0;while(true){
if((i__13117_13122 < count__13116_13121))
{var node_13123 = cljs.core._nth.call(null,chunk__13115_13120,i__13117_13122);goog.dom.classes.set(node_13123,classes_13118__$1);
{
var G__13124 = seq__13114_13119;
var G__13125 = chunk__13115_13120;
var G__13126 = count__13116_13121;
var G__13127 = (i__13117_13122 + 1);
seq__13114_13119 = G__13124;
chunk__13115_13120 = G__13125;
count__13116_13121 = G__13126;
i__13117_13122 = G__13127;
continue;
}
} else
{var temp__4092__auto___13128 = cljs.core.seq.call(null,seq__13114_13119);if(temp__4092__auto___13128)
{var seq__13114_13129__$1 = temp__4092__auto___13128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13114_13129__$1))
{var c__4148__auto___13130 = cljs.core.chunk_first.call(null,seq__13114_13129__$1);{
var G__13131 = cljs.core.chunk_rest.call(null,seq__13114_13129__$1);
var G__13132 = c__4148__auto___13130;
var G__13133 = cljs.core.count.call(null,c__4148__auto___13130);
var G__13134 = 0;
seq__13114_13119 = G__13131;
chunk__13115_13120 = G__13132;
count__13116_13121 = G__13133;
i__13117_13122 = G__13134;
continue;
}
} else
{var node_13135 = cljs.core.first.call(null,seq__13114_13129__$1);goog.dom.classes.set(node_13135,classes_13118__$1);
{
var G__13136 = cljs.core.next.call(null,seq__13114_13129__$1);
var G__13137 = null;
var G__13138 = 0;
var G__13139 = 0;
seq__13114_13119 = G__13136;
chunk__13115_13120 = G__13137;
count__13116_13121 = G__13138;
i__13117_13122 = G__13139;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__13144_13148 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13145_13149 = null;var count__13146_13150 = 0;var i__13147_13151 = 0;while(true){
if((i__13147_13151 < count__13146_13150))
{var node_13152 = cljs.core._nth.call(null,chunk__13145_13149,i__13147_13151);goog.dom.setTextContent(node_13152,value);
{
var G__13153 = seq__13144_13148;
var G__13154 = chunk__13145_13149;
var G__13155 = count__13146_13150;
var G__13156 = (i__13147_13151 + 1);
seq__13144_13148 = G__13153;
chunk__13145_13149 = G__13154;
count__13146_13150 = G__13155;
i__13147_13151 = G__13156;
continue;
}
} else
{var temp__4092__auto___13157 = cljs.core.seq.call(null,seq__13144_13148);if(temp__4092__auto___13157)
{var seq__13144_13158__$1 = temp__4092__auto___13157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13144_13158__$1))
{var c__4148__auto___13159 = cljs.core.chunk_first.call(null,seq__13144_13158__$1);{
var G__13160 = cljs.core.chunk_rest.call(null,seq__13144_13158__$1);
var G__13161 = c__4148__auto___13159;
var G__13162 = cljs.core.count.call(null,c__4148__auto___13159);
var G__13163 = 0;
seq__13144_13148 = G__13160;
chunk__13145_13149 = G__13161;
count__13146_13150 = G__13162;
i__13147_13151 = G__13163;
continue;
}
} else
{var node_13164 = cljs.core.first.call(null,seq__13144_13158__$1);goog.dom.setTextContent(node_13164,value);
{
var G__13165 = cljs.core.next.call(null,seq__13144_13158__$1);
var G__13166 = null;
var G__13167 = 0;
var G__13168 = 0;
seq__13144_13148 = G__13165;
chunk__13145_13149 = G__13166;
count__13146_13150 = G__13167;
i__13147_13151 = G__13168;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__13173_13177 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13174_13178 = null;var count__13175_13179 = 0;var i__13176_13180 = 0;while(true){
if((i__13176_13180 < count__13175_13179))
{var node_13181 = cljs.core._nth.call(null,chunk__13174_13178,i__13176_13180);goog.dom.forms.setValue(node_13181,value);
{
var G__13182 = seq__13173_13177;
var G__13183 = chunk__13174_13178;
var G__13184 = count__13175_13179;
var G__13185 = (i__13176_13180 + 1);
seq__13173_13177 = G__13182;
chunk__13174_13178 = G__13183;
count__13175_13179 = G__13184;
i__13176_13180 = G__13185;
continue;
}
} else
{var temp__4092__auto___13186 = cljs.core.seq.call(null,seq__13173_13177);if(temp__4092__auto___13186)
{var seq__13173_13187__$1 = temp__4092__auto___13186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13173_13187__$1))
{var c__4148__auto___13188 = cljs.core.chunk_first.call(null,seq__13173_13187__$1);{
var G__13189 = cljs.core.chunk_rest.call(null,seq__13173_13187__$1);
var G__13190 = c__4148__auto___13188;
var G__13191 = cljs.core.count.call(null,c__4148__auto___13188);
var G__13192 = 0;
seq__13173_13177 = G__13189;
chunk__13174_13178 = G__13190;
count__13175_13179 = G__13191;
i__13176_13180 = G__13192;
continue;
}
} else
{var node_13193 = cljs.core.first.call(null,seq__13173_13187__$1);goog.dom.forms.setValue(node_13193,value);
{
var G__13194 = cljs.core.next.call(null,seq__13173_13187__$1);
var G__13195 = null;
var G__13196 = 0;
var G__13197 = 0;
seq__13173_13177 = G__13194;
chunk__13174_13178 = G__13195;
count__13175_13179 = G__13196;
i__13176_13180 = G__13197;
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
{var value_13208 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__13204_13209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13205_13210 = null;var count__13206_13211 = 0;var i__13207_13212 = 0;while(true){
if((i__13207_13212 < count__13206_13211))
{var node_13213 = cljs.core._nth.call(null,chunk__13205_13210,i__13207_13212);node_13213.innerHTML = value_13208;
{
var G__13214 = seq__13204_13209;
var G__13215 = chunk__13205_13210;
var G__13216 = count__13206_13211;
var G__13217 = (i__13207_13212 + 1);
seq__13204_13209 = G__13214;
chunk__13205_13210 = G__13215;
count__13206_13211 = G__13216;
i__13207_13212 = G__13217;
continue;
}
} else
{var temp__4092__auto___13218 = cljs.core.seq.call(null,seq__13204_13209);if(temp__4092__auto___13218)
{var seq__13204_13219__$1 = temp__4092__auto___13218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13204_13219__$1))
{var c__4148__auto___13220 = cljs.core.chunk_first.call(null,seq__13204_13219__$1);{
var G__13221 = cljs.core.chunk_rest.call(null,seq__13204_13219__$1);
var G__13222 = c__4148__auto___13220;
var G__13223 = cljs.core.count.call(null,c__4148__auto___13220);
var G__13224 = 0;
seq__13204_13209 = G__13221;
chunk__13205_13210 = G__13222;
count__13206_13211 = G__13223;
i__13207_13212 = G__13224;
continue;
}
} else
{var node_13225 = cljs.core.first.call(null,seq__13204_13219__$1);node_13225.innerHTML = value_13208;
{
var G__13226 = cljs.core.next.call(null,seq__13204_13219__$1);
var G__13227 = null;
var G__13228 = 0;
var G__13229 = 0;
seq__13204_13209 = G__13226;
chunk__13205_13210 = G__13227;
count__13206_13211 = G__13228;
i__13207_13212 = G__13229;
continue;
}
}
} else
{}
}
break;
}
}catch (e13203){if((e13203 instanceof Error))
{var e_13230 = e13203;domina.replace_children_BANG_.call(null,content,value_13208);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13203;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__13237_13241 = cljs.core.seq.call(null,children);var chunk__13238_13242 = null;var count__13239_13243 = 0;var i__13240_13244 = 0;while(true){
if((i__13240_13244 < count__13239_13243))
{var child_13245 = cljs.core._nth.call(null,chunk__13238_13242,i__13240_13244);frag.appendChild(child_13245);
{
var G__13246 = seq__13237_13241;
var G__13247 = chunk__13238_13242;
var G__13248 = count__13239_13243;
var G__13249 = (i__13240_13244 + 1);
seq__13237_13241 = G__13246;
chunk__13238_13242 = G__13247;
count__13239_13243 = G__13248;
i__13240_13244 = G__13249;
continue;
}
} else
{var temp__4092__auto___13250 = cljs.core.seq.call(null,seq__13237_13241);if(temp__4092__auto___13250)
{var seq__13237_13251__$1 = temp__4092__auto___13250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13237_13251__$1))
{var c__4148__auto___13252 = cljs.core.chunk_first.call(null,seq__13237_13251__$1);{
var G__13253 = cljs.core.chunk_rest.call(null,seq__13237_13251__$1);
var G__13254 = c__4148__auto___13252;
var G__13255 = cljs.core.count.call(null,c__4148__auto___13252);
var G__13256 = 0;
seq__13237_13241 = G__13253;
chunk__13238_13242 = G__13254;
count__13239_13243 = G__13255;
i__13240_13244 = G__13256;
continue;
}
} else
{var child_13257 = cljs.core.first.call(null,seq__13237_13251__$1);frag.appendChild(child_13257);
{
var G__13258 = cljs.core.next.call(null,seq__13237_13251__$1);
var G__13259 = null;
var G__13260 = 0;
var G__13261 = 0;
seq__13237_13241 = G__13258;
chunk__13238_13242 = G__13259;
count__13239_13243 = G__13260;
i__13240_13244 = G__13261;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__13231_SHARP_,p2__13232_SHARP_){return f.call(null,p1__13231_SHARP_,p2__13232_SHARP_);
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
{if((function (){var G__13263 = list_thing;if(G__13263)
{var bit__4050__auto__ = (G__13263.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__13263.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13263);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13263);
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
{if((function (){var G__13264 = content;if(G__13264)
{var bit__4050__auto__ = (G__13264.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__13264.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13264);
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
{if((function (){var G__13265 = content;if(G__13265)
{var bit__4050__auto__ = (G__13265.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__13265.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13265.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13265);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13265);
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